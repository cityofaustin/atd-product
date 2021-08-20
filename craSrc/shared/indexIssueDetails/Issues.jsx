import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import IssuesContext from "../IssuesContext";
import SpinnerWrapper from "../SpinnerWrapper";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsFilePlus } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";

function getTypeIcon(type) {
  // TODO: move to issues context wrapper
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

function getRelatedIssues(label, parentIssueNumber, issues) {
  // identify all issues (exculding this project's issue) that share the same project
  // label
  if (!label) {
    return [];
  }
  return issues.filter(
    (issue) =>
      issue.labels.includes(label) && issue.number !== parentIssueNumber
  );
}

export default function Issues(props) {
  const context = React.useContext(IssuesContext);
  const indexType = props.indexType;

  const [parentLabel] = React.useState(
    getParentLabel(props.parent.labels, indexType)
  );
  const [issues, setIssues] = React.useState([]);
  React.useEffect(() => {
    let relatedIssues = getRelatedIssues(
      parentLabel,
      props.parent.number,
      context.issues
    );
    relatedIssues.forEach((issue) => {
      issue.icon = getTypeIcon(issue.type);
    });
    setIssues(relatedIssues);
  }, [context.issues, parentLabel, props.parent.number]);

  if (context.error) {
    return <p>{context.error}</p>;
  } else if (!context.isLoaded && !context.error) {
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
