import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import SpinnerWrapper from "../../components/wrappers/SpinnerWrapper";
import IndexIssueListItem from "../shared/IndexIssueListItem";

export default function ProductsView(props) {
  const { isLoaded, error, productIssues } = props;

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded && !error) {
    return <SpinnerWrapper />;
  } else if (productIssues.length === 0) {
    return <Alert variant="dark">No data found.</Alert>;
  }

  return (
    <>
      <Row key="issues-row">
        {productIssues.map((product) => (
          <Col key={product.number} sm={12} md={6} lg={3} className="m-0 py-3">
            <IndexIssueListItem issue={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
