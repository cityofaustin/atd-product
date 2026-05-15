import { useContext } from "react";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Page from "../../components/shared/Page";
import IssuesContext from "../../contexts/IssuesContext";
import ServicesList from "../../components/servicesView/ServicesList";

function FrontMatter() {
  return (
    <Col>
      <p className="text-black">
        Services are the ongoing data and technology support we provide through
        consultation, training, and technology management.
      </p>
      <hr className="mt-4" />
    </Col>
  );
}

export default function ProductsView() {
  const { issues, serviceIssues, isLoaded, error } = useContext(IssuesContext);

  return (
    <Page nav title="Services">
      <Row key="front-matter" className="mb-2">
        <FrontMatter />
      </Row>
      <ServicesList
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        serviceIssues={serviceIssues}
      />
    </Page>
  );
}
