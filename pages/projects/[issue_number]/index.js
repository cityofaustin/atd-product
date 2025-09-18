import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import IssuesContext from "../../../contexts/IssuesContext";
import IndexIssueDetails from "../../../components/shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../../components/shared/Page";

export default function ProjectDetailsView() {
  const { issues, isLoaded, error } = useContext(IssuesContext);
  const matches = useRouter();
  const issue_number = matches.query.issue_number;
  const issue = issues.find((issue) => issue.number === issue_number);
  useEffect(() => {
    console.log("Router debug:", {
      isReady: matches.isReady,
      asPath: matches.asPath,
      pathname: matches.pathname,
      query: matches.query,
      windowLocation: window.location.pathname,
    });
  }, [matches.isReady, matches.asPath, matches.query]);
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
