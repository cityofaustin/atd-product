import React from "react";
import IssuesContext from "./IssuesContext";

const STATUSES = ["Needs Scoping", "Backlog", "In Progress", "Completed"];

function sortByUpdatedDate(a, b) {
  return new Date(b.updated_at) - new Date(a.updated_at);
}

function getProjectIssues(data) {
  return data.filter((issue) => issue.labels.includes("Project Index"));
}

function getProductIssues(data) {
  return data.filter((issue) => issue.labels.includes("Product Index"));
}

function getUniqueWorkgroups(data) {
  const allWorkgroupsLabels = data
    .map((issue) => {
      return issue.workgroups;
    })
    // in addition to concatening sub-arrays of workgroups, flattening drops any empty
    // arrays from issues with no workgroup(s)
    .flat();

  return [...new Set(allWorkgroupsLabels)].sort();
}

function getType(labels) {
  // if an issue has more than one `type: ` label, all but one are ignored
  const types = labels.filter((label) => label.startsWith("Type"));
  const typesParsed = types.map((type) => type.split("Type: ")[1]);
  return typesParsed[0];
}

function getStatus(pipeline) {
  switch (pipeline) {
    case "New":
      return "Backlog";
    case "Needs Scoping":
      return "Needs Scoping";
    case "Icebox":
      return "Backlog";
    case "Backlog":
      return "Backlog";
    case "on deck":
      return "Backlog";
    case "In Progress":
      return "In Progress";
    case "Blocked":
      return "In Progress";
    case "Ongoing":
      return "In Progress";
    case "Review/QA":
      return "In Progress";
    case "Ready to Deploy":
      return "In Progress";
    case "Closed":
      return "Completed";
    default:
      return null;
  }
}

function dropTitlePrefix(title) {
  return title.replace("Project: ", "").replace("Product: ", "");
}

function handleData(data, setData) {
  // do some global tidying of the data.
  let dataHandled = data.map((issue) => {
    // remove html comments, which contain content we don't want to share
    issue.body = issue.body?.replace(/(<!-- .+? -->)/g, "");
    issue.labels = issue.labels ? issue.labels.split(", ") : [];
    issue.workgroups = issue.workgroups ? issue.workgroups.split(", ") : [];
    issue.type = getType(issue.labels);
    // assign a generalized "status" based on the issue pipeline
    issue.status = getStatus(issue.pipeline);
    issue.title = dropTitlePrefix(issue.title);
    issue.isFeatured = issue.labels.includes("Featured Project");
    return issue;
  });
  setData(dataHandled.sort(sortByUpdatedDate));
}

export function IssuesContextWrapper(props) {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [workgroups, setWorkgroups] = React.useState([]);
  const [projectIssues, setProjectIssues] = React.useState([]);
  const [productIssues, setProductIssues] = React.useState([]);
  const { url, children } = props;

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.error) {
            // on query error, socrata returns status 200 with {"error": true, "message": <message>} in body
            setError(result.message.toString());
          } else {
            handleData(result, setData);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error.toString());
        }
      );
  }, [url]);

  React.useEffect(() => {
    const currentProjectIssues = getProjectIssues(data);
    const currentProductissues = getProductIssues(data);
    const uniqueWorkgroup = getUniqueWorkgroups(data);
    setProjectIssues(currentProjectIssues);
    setProductIssues(currentProductissues);
    setWorkgroups(uniqueWorkgroup);
  }, [data]);

  return (
    <IssuesContext.Provider
      value={{
        issues: data,
        error: error,
        isLoaded: isLoaded,
        projectIssues: projectIssues,
        productIssues: productIssues,
        workgroups: workgroups,
        statuses: STATUSES,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}

