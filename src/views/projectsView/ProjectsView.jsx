import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IssuesContext from "../../shared/IssuesContext";
import Page from "../../shared/Page";
import ProjectsList from "./ProjectsList";

function FrontMatter() {
  return (
    <Col className="ml-2 mb-2 border-left border-secondary">
      <p className="mb-0">
        <strong>Projects</strong> are temporary endeavors — whether{" "}
        <a
          alt="link BI issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/65"
        >
          identifying a vendor solution
        </a>
        ,{" "}
        <a
          alt="link to 311 module issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/533"
        >
          building a major feature for an existing Product
        </a>
        ,{" "}
        <a
          alt="parking data overhaul issue"
          href="https://github.com/cityofaustin/atd-data-tech/issues/254"
        >
          overhauling a dataset
        </a>
        , or{" "}
        <a
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

export default function ProjectsView(props) {
  const context = React.useContext(IssuesContext);
  const issues = context.issues;
  const isLoaded = context.isLoaded;
  const error = context.error;

  return (
    <Page nav title="Our work">
      <Row key="front-matter" className="mb-2">
        <FrontMatter />
      </Row>
      <ProjectsList
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        projectIssues={context.projectIssues}
        statuses={context.statuses}
        workgroups={context.workgroups}
      />
    </Page>
  );
}
