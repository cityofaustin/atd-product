import React from "react";
import { useRouteMatch } from "react-router-dom";
import IssuesContext from "../../shared/IssuesContext";
import IndexIssueDetails from "../../shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../shared/Page";

export default function ProjectDetailsView(props) {
  const context = React.useContext(IssuesContext);
  const matches = useRouteMatch("/projects/:issue_number");
  const issue_number = matches.params.issue_number;
  return (
    <>
      <Page nav title={false}>
        <IndexIssueDetails
          indexType="project"
          issues={context.issues}
          isLoaded={context.isLoaded}
          error={context.error}
          issue_number={issue_number}
        />
      </Page>
    </>
  );
}
