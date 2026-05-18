import { useContext } from "react";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Page from "../../components/shared/Page";
import IssuesContext from "../../contexts/IssuesContext";
import ServicesList from "../../components/servicesView/ServicesList";

function ServicesDescription() {
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

export default function ServicesView() {
  const { issues, serviceIssues, isLoaded, error } = useContext(IssuesContext);

  return (
    <Page nav title="Services">
      <Row key="front-matter" className="mb-2">
        <ServicesDescription />
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
