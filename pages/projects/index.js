import { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IssuesContext from "../../contexts/IssuesContext";
import Page from "../../components/shared/Page";
import ProjectsList from "../../components/projectsView/ProjectsList";

function FrontMatter() {
  return (
    <Col className="mb-2">
      <p className="mb-2 text-black">
      Projects are timeboxed endeavors — whether{" "}
        <a
          className="link"
          alt="link BI issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/65"
        >
          identifying a vendor solution
        </a>
        ,{" "}
        <a
          className="link"
          alt="link to 311 module issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/533"
        >
          building a major feature for an existing Product
        </a>
        ,{" "}
        <a
          className="link"
          alt="parking data overhaul issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/254"
        >
          overhauling a dataset
        </a>
        , or{" "}
        <a
          className="link"
          alt="link to print bike map issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/1911"
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
    <Page nav title="Projects">
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
