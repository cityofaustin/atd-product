import { useContext } from "react";
import { useRouter } from "next/router";
import IssuesContext from "../../../contexts/IssuesContext";
import IndexIssueDetails from "../../../components/shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../../components/shared/Page";

export default function ProductDetailsView() {
  const { issues, isLoaded, error } = useContext(IssuesContext);
  console.log(issues, isLoaded, error)
  const matches = useRouter("/products/:issue_number");
  console.log(matches)
  const issue_number = matches.query.issue_number;
  console.log(issue_number)
  const issue = issues.find((issue) => issue.number === issue_number);
  return (
    <>
      <Page nav={true} title={false}>
        <IndexIssueDetails
          indexType="product"
          issue={issue}
          isLoaded={isLoaded}
          error={error}
        />
      </Page>
    </>
  );
}
