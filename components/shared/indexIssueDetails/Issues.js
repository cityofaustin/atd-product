import { useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import SpinnerWrapper from "../../wrappers/SpinnerWrapper";
import { useSocrata, handleIssueData, getTypeIcon } from "../../utils";
import { ISSUES_ENDPOINT } from "../../settings";

const BASE_URL = "https://github.com/cityofaustin/atd-data-tech/issues";

function getParentLabel(labels, type) {
  // identify the "project" or "product" label for this parent issue. assumes only one
  // "project" or "product" label exists and ignores any but the first found
  const searchTerm = `${type}:`;
  const matchedLabels = labels.filter((label) =>
    label.toLowerCase().startsWith(searchTerm)
  );
  return matchedLabels[0];
}

export default function Issues({ indexType, parent }) {
  const parentLabel = getParentLabel(parent.labels, indexType);

  // query for issues that share the same parentLabel, excluding this issue
  const url = encodeURI(
    `${ISSUES_ENDPOINT}?$limit=100000&$where=labels like '%${parentLabel}%' and number != ${parent.number}`
  );

  // if there is no parent label configured in github, we pass `null` to SWR to prevent it from fetching
  const { error, isLoaded, data } = useSocrata({
    url: parentLabel ? url : null,
  });

  const issues = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }
    const handledData = handleIssueData(data);
    handledData.forEach((issue) => {
      issue.icon = getTypeIcon(issue.type);
    });
    return handledData;
  }, [data]);

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded) {
    return <SpinnerWrapper />;
  } else if (issues.length === 0) {
    return <p>No issues found.</p>;
  }

  return (
    <Row>
      <Col>
        <Table striped size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Size</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => {
              const updatedAt = new Date(issue.updated_at).toLocaleDateString();
              return (
                <tr key={issue.number}>
                  <td>
                    <a href={`${BASE_URL}/${issue.number}`}>{issue.number}</a>
                  </td>
                  <td>{issue.title}</td>
                  <td>
                    {issue.icon} {issue.type}
                  </td>
                  <td>{issue.pipeline}</td>
                  <td>{issue.estimate}</td>
                  <td>{updatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
