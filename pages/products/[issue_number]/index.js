import { useContext } from "react";
import { useRouter } from "next/router";
import IssuesContext from "../../../contexts/IssuesContext";
import IndexIssueDetails from "../../../components/shared/indexIssueDetails/IndexIssueDetails";
import Page from "../../../components/shared/Page";

export default function ProductDetailsView() {
  console.log("product details view")
  const { issues, isLoaded, error } = useContext(IssuesContext);
  const matches = useRouter("/products/:issue_number");
  const issue_number = matches.query.issue_number;
  const issue = issues.find((issue) => issue.number === issue_number);
  return (
    <Page nav={true} title={false}>
      <IndexIssueDetails
        indexType="product"
        issue={issue}
        isLoaded={isLoaded}
        error={error}
      />
    </Page>
  );
}
