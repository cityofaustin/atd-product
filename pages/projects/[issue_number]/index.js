import React from "react";
import { useRouter } from "next/router";
import IssuesContext from "../../../contexts/IssuesContext";
import IndexIssueDetails from "../../../components/shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../../components/shared/Page";

export default function ProjectDetailsView() {
  const context = React.useContext(IssuesContext);
  const { issues, isLoaded, error } = context;
  const matches = useRouter();
  const issue_number = matches.query.issue_number;
  const issue = issues.find((issue) => issue.number === issue_number);
  return (
    <>
      <Page nav title={false}>
        <IndexIssueDetails
          indexType="project"
          issue={issue}
          isLoaded={isLoaded}
          error={error}
        />
      </Page>
    </>
  );
}
