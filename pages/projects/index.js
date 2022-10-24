import { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IssuesContext from "../../contexts/IssuesContext";
import Page from "../../components/shared/Page";
import ProjectsList from "../../components/projectsView/ProjectsList";

function FrontMatter() {
  return (
    <Col className="ms-2 mb-2 border-start border-secondary">
      <p className="mb-0 ms-1">
        <strong>Projects</strong> are temporary endeavors — whether{" "}
        <a
          alt="link BI issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/65"
          className="text-primary text-decoration-none"
        >
          identifying a vendor solution
        </a>
        ,{" "}
        <a
          alt="link to 311 module issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/533"
          className="text-primary text-decoration-none"
        >
          building a major feature for an existing Product
        </a>
        ,{" "}
        <a
          alt="parking data overhaul issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/254"
          className="text-primary text-decoration-none"
        >
          overhauling a dataset
        </a>
        , or{" "}
        <a
          alt="link to print bike map issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/1911"
          className="text-primary text-decoration-none"
        >
          delivering a complex map
        </a>
        . They accomplish a singular goal and have a defined completion date.
      </p>
    </Col>
  );
}

export default function ProjectsView() {
  // todo: why not useContext inside of <ProjectList> ?
  const { issues, isLoaded, error, projectIssues, statuses, workgroups } =
    useContext(IssuesContext);
  return (
    <Page nav title="Our work">
      <Row key="front-matter" className="mb-2">
        <FrontMatter />
      </Row>
      <ProjectsList
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        projectIssues={projectIssues}
        statuses={statuses}
        workgroups={workgroups}
      />
    </Page>
  );
}
