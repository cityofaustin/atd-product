import useSWR from "swr";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsFilePlus } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";

const fetcher = async (url) => {
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) {
    throw text;
  }
  return JSON.parse(text);
};

export function useSocrata({ url }) {
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data || [],
    isLoaded: !!error || !!data,
    error: error,
  };
}

function getIssueType(labels) {
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

function sortByUpdatedDate(a, b) {
  return new Date(b.updated_at) - new Date(a.updated_at);
}

export function handleIssueData(data) {
  // do some global tidying of the data.
  const dataHandled = data.map((issue) => {
    // copy issue to avoid modifying data in-place, which can have unexpected effects on re-render
    const newIssue = { ...issue };
    // ensure the issue body is defined
    newIssue.body = newIssue.body || "";
    // remove html comments, which contain content we don't want to share
    newIssue.body = newIssue.body?.replace(/(<!-- .+? -->)/g, "");
    newIssue.labels = newIssue.labels ? newIssue.labels.split(", ") : [];
    newIssue.workgroups = newIssue.workgroups
      ? newIssue.workgroups.split(", ")
      : [];
    newIssue.type = getIssueType(newIssue.labels);
    // assign a generalized "status" based on the issue pipeline
    newIssue.status = getStatus(newIssue.pipeline);
    newIssue.title = dropTitlePrefix(newIssue.title);
    newIssue.isFeatured = newIssue.labels.includes("Featured Project");
    return newIssue;
  });
  return dataHandled.sort(sortByUpdatedDate);
}

export function getTypeIcon(type) {
  switch (type) {
    case "Feature":
      return <BsFilePlus />;
    case "New Application":
      return <BsReverseLayoutTextWindowReverse />;
    case "Enhancement":
      return <FaWrench />;
    case "Tech Debt":
      return <RiBankFill />;
    case "Research":
      return <FaSearch />;
    case "Data":
      return <FaDatabase />;
    case "Documentation":
      return <FaEdit />;
    default:
      return null;
  }
}
