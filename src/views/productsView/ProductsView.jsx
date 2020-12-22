import React from "react";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Page from "../../shared/Page";
import IssuesContext from "../../shared/IssuesContext";
import ProductsList from "./ProductsList";

function FrontMatter() {
  return (
    <Col className="ml-2 mb-2 border-left border-secondary">
      <p className="mb-0">
        <strong>Products</strong> are the solutions we build for our customers,
        including Knack apps, AMANDA apps, custom software, and data systems. We
        improve and extend our products over time so that they deliver
        continuous value to Austin Transportation as business needs evolve.
      </p>
    </Col>
  );
}

export default function ProductsView(props) {
  const context = React.useContext(IssuesContext);
  const issues = context.issues;
  const isLoaded = context.isLoaded;
  const error = context.error;
  return (
    <Page nav title="What we deliver">
      <Row key="front-matter" className="mb-2">
        <FrontMatter />
      </Row>
      <ProductsList
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        productIssues={context.productIssues}
      />
    </Page>
  );
}
