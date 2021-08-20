import React from "react";
import { useRouter } from "next/router";
import IssuesContext from "../../../contexts/IssuesContext";
import IndexIssueDetails from "../../../components/shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../../components/shared/Page";

export default function ProjectDetailsView(props) {
  const context = React.useContext(IssuesContext);
  const { issues, isLoaded, error } = context;
  const matches = useRouter();
  const issue_number = matches.query.issue_number;

  return (
    <>
      <Page nav title={false}>
        <IndexIssueDetails
          indexType="project"
          issues={issues}
          isLoaded={isLoaded}
          error={error}
          issue_number={issue_number}
        />
      </Page>
    </>
  );
}
