import { useMemo } from "react";
import IssuesContext from "../../contexts/IssuesContext";
import { useSocrata } from "../utils";
import { ISSUES_ENDPOINT } from "../settings";

const STATUSES = ["needs_scoping", "backlog", "in_progress", "completed"];
const QUERY =
  "$limit=100000&$where=labels like '%Project Index%' or labels like '%Product Index%'";

function sortByUpdatedDate(a, b) {
  return new Date(b.updated_at) - new Date(a.updated_at);
}

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
      // in addition to concatening sub-arrays of workgroups, flattening drops any empty
      // arrays from issues with no workgroup(s)
      .flat();
    return [...new Set(allWorkgroupsLabels)].sort();
  }, [data]);
}

function getType(labels) {
  // if an issue has more than one `type: ` label, all but one are ignored
  const types = labels.filter((label) => label.startsWith("Type"));
  const typesParsed = types.map((type) => type.split("Type: ")[1]);
  return typesParsed[0];
}

function getStatus(pipeline) {
  switch (pipeline && pipeline.toLowerCase()) {
    case "new":
      return "backlog";
    case "needs scoping":
      return "needs_scoping";
    case "icebox":
      return "backlog";
    case "backlog":
      return "backlog";
    case "on deck":
      return "backlog";
    case "in progress":
      return "in_progress";
    case "blocked":
      return "in_progress";
    case "ongoing":
      return "in_progress";
    case "review/qa":
      return "in_progress";
    case "ready to deploy":
      return "in_progress";
    case "closed":
      return "completed";
    default:
      return null;
  }
}

function dropTitlePrefix(title) {
  return title.replace("Project: ", "").replace("Product: ", "");
}

function handleData(data) {
  // do some global tidying of the data.
  const dataHandled = data.map((issue) => {
    // copy issue to avoid modifying data in-place, which can have unexpected effects on re-render
    const newIssue = { ...issue };
    // remove html comments, which contain content we don't want to share
    newIssue.body = newIssue.body?.replace(/(<!-- .+? -->)/g, "");
    newIssue.labels = newIssue.labels ? newIssue.labels.split(", ") : [];
    newIssue.workgroups = newIssue.workgroups
      ? newIssue.workgroups.split(", ")
      : [];
    newIssue.type = getType(newIssue.labels);
    // assign a generalized "status" based on the issue pipeline
    newIssue.status = getStatus(newIssue.pipeline);
    newIssue.title = dropTitlePrefix(newIssue.title);
    newIssue.isFeatured = newIssue.labels.includes("Featured Project");
    return newIssue;
  });
  return dataHandled.sort(sortByUpdatedDate);
}

export function IssuesContextWrapper({ children }) {
  const url = encodeURI(`${ISSUES_ENDPOINT}?${QUERY}`);
  const { data, isLoaded, error } = useSocrata({ url });

  const dataHandled = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }
    return handleData(data);
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
