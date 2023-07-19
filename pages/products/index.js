import { useContext } from "react";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Page from "../../components/shared/Page";
import IssuesContext from "../../contexts/IssuesContext";
import ProductsList from "../../components/productsView/ProductsList";

function FrontMatter() {
  return (
    <Col>
      <p className="text-black">
      Products are the solutions we build and support for our customers. We improve and extend 
      our products over time so that they deliver continuous value to staff as business needs evolve.
      </p>
      <hr className="mt-4" />
    </Col>
  );
}

export default function ProductsView() {
  const { issues, productIssues, isLoaded, error } = useContext(IssuesContext);

  return (
    <Page nav title="Products">
      <Row key="front-matter" className="mb-2">
        <FrontMatter />
      </Row>
      <ProductsList
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        productIssues={productIssues}
      />
    </Page>
  );
}
