import React from "react";
import SpinnerWrapper from "../../shared/SpinnerWrapper";
import ProductListItem from "./ProductListItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

export default function ProductsView(props) {
  const isLoaded = props.isLoaded;
  const error = props.error;
  const productIssues = props.productIssues;

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
          <Col key={product.number} md={4} className="m-0 p-2">
            <ProductListItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
