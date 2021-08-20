import React from "react";
import { useRouter } from "next/router";
import IssuesContext from "../../../components/contexts/IssuesContext";
import IndexIssueDetails from "../../../components/shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../../components/shared/Page";

export default function ProductDetailsView(props) {
  const context = React.useContext(IssuesContext);
  const { issues, isLoaded, error } = context;
  const matches = useRouter("/products/:issue_number");

  const issue_number = matches.query.issue_number;

  return (
    <>
      <Page nav={true} title={false}>
        <IndexIssueDetails
          indexType="product"
          issues={issues}
          isLoaded={isLoaded}
          error={error}
          issue_number={issue_number}
        />
      </Page>
    </>
  );
}
