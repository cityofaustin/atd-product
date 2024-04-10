import { useMemo } from "react";
import IssuesContext from "../../contexts/IssuesContext";
import { useSocrata, handleIssueData } from "../utils";
import { ISSUES_ENDPOINT } from "../settings";

const STATUSES = ["needs_scoping", "backlog", "in_progress", "completed"];
const QUERY =
  "$limit=100000&$where=(labels like '%Project Index%' or labels like '%Product Index%') and pipeline != 'Icebox'";

function useProjectIssues(data) {
  return useMemo(
    () => data.filter((issue) => issue.labels.includes("Project Index")),
    [data]
  );
}

function useProductIssues(data) {
  return useMemo(
    () => data.filter((issue) => issue.labels.includes("Product Index")),
    [data]
  );
}

function useWorkgroups(data) {
  return useMemo(() => {
    const allWorkgroupsLabels = data
      .map((issue) => {
        return issue.workgroups;
      })
      // in addition to concatenating sub-arrays of workgroups, flattening drops any empty
      // arrays from issues with no workgroup(s)
      .flat();
    return [...new Set(allWorkgroupsLabels)].sort();
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
  const workgroups = useWorkgroups(dataHandled);
  return (
    <IssuesContext.Provider
      value={{
        issues: dataHandled,
        error,
        isLoaded,
        projectIssues,
        productIssues,
        workgroups,
        statuses: STATUSES,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
