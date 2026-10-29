import { useMemo } from "react";
import IssuesContext from "../../contexts/IssuesContext";
import { useSocrata, handleIssueData } from "../utils";
import { ISSUES_ENDPOINT } from "../settings";

const STATUSES = ["needs_scoping", "backlog", "in_progress", "completed"];

const QUERY =
  "$limit=100000&$where=(type like '%Project%' or type like '%Product%' or type like '%Service%') and labels not like '%Archived Project%' and (status != 'Icebox' or status is null)";

function useProjectIssues(data) {
  return useMemo(
    () => data.filter((issue) => issue.type === "Project"),
    [data]
  );
}

function useProductIssues(data) {
  return useMemo(
    () => data.filter((issue) => issue.type === "Product"),
    [data]
  );
}

function useServiceIssues(data) {
  return useMemo(
    () => data.filter((issue) => issue.type === "Service"),
    [data]
  );
}

function useDivisions(data) {
  return useMemo(() => {
    const allDivisionNames = data
      .map((issue) => {
        return issue.divisions;
      })
      // in addition to concatenating sub-arrays of divisions, flattening drops any empty
      // arrays from issues with no division(s)
      .flat();
    return [...new Set(allDivisionNames)].sort();
  }, [data]);
}

export function IssuesContextWrapper({ children }) {
  const url = encodeURI(`${ISSUES_ENDPOINT}?${QUERY}`);
  const { data, isLoaded, error } = useSocrata({ url });

  const dataHandled = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }
    return handleIssueData(data);
  }, [data]);

  const projectIssues = useProjectIssues(dataHandled);
  const productIssues = useProductIssues(dataHandled);
  const serviceIssues = useServiceIssues(dataHandled);
  const divisions = useDivisions(dataHandled);

  return (
    <IssuesContext.Provider
      value={{
        issues: dataHandled,
        error,
        isLoaded,
        projectIssues,
        productIssues,
        serviceIssues,
        divisions,
        statuses: STATUSES,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
