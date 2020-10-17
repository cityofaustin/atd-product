import React from "react";
import SpinnerWrapper from "./SpinnerWrapper";
import ProductListItem from "./ProductListItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function FrontMatter() {
  return (
        <Col className="ml-2 mb-2 border-left border-secondary">
          <p className="mb-0">
            <strong>Products</strong> are the solutions we build for our
            customers, including Knack apps, AMANDA apps, custom software, and
            data systems. We improve and extend our products over time so that
            they deliver continuous value to Austin Transportation as business
            needs evolve.
          </p>
        </Col>
  );
}
export default function Products(props) {
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
      <Row key="front-matter" className="mb-2">
        <FrontMatter />
      </Row>
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
