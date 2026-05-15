import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import SpinnerWrapper from "../../components/wrappers/SpinnerWrapper";
import IndexIssueListItem from "../shared/IndexIssueListItem";

export default function ServicesList(props) {
  const { isLoaded, error, serviceIssues } = props;

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded && !error) {
    return <SpinnerWrapper />;
  } else if (serviceIssues.length === 0) {
    return <Alert variant="dark">No data found.</Alert>;
  }

  return (
    <Row key="issues-row">
      {serviceIssues.map((service) => (
        <Col key={service.number} sm={12} md={6} lg={3} className="m-0 py-3">
          <IndexIssueListItem issue={service} />
        </Col>
      ))}
    </Row>
  );
}
