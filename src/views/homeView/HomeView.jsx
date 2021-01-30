import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import IssuesContext from "../../shared/IssuesContext";
import Page from "../../shared/Page";
import { FaGlobe, FaUsersCog, FaBusinessTime } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import IndexIsssueListItem from "../../shared/IndexIssueListItem";

function ServiceItem(props) {
  const { icon, content } = props;
  return (
    <Col md={3} className="pb-4">
      <Row>
        <Col xs="auto" className="pr-0">
          <span style={{ color: "#00bfa5" }}>
            <h1>{icon}</h1>
          </span>
        </Col>
        <Col>
          <h5>{content}</h5>
        </Col>
      </Row>
    </Col>
  );
}

export default function HomeView(props) {
  const context = React.useContext(IssuesContext);
  const projects = context.projectIssues;

  return (
    <>
      <Page fluid nav hideSeparator footer>
        <Row>
          <Col xs={1} md={2}></Col>
          <Col sm={12} md={9} lg={4} className="py-5 px-4 text-primary">
            <h1 className="homepage-header">
              <strong>Tech support for ATX mobility</strong>
            </h1>
            <p className="text-muted">
              We build and buy technology to help city staff tackle Austin's
              mobility challenges. We're obsessed with efficiencies, open data,
              and delivering human-centered tech to government services.
            </p>
          </Col>
          <Col lg={4} className="my-auto d-none d-lg-block">
            {/* hidden on xs and sm */}
            <Image fluid src="/assets/sports.jpg" />
          </Col>
        </Row>
        <Row className="py-3 text-primary bg-light">
          <Col md={2}></Col>
          <Col>
            <h2>
              <strong>We're here to help</strong>
            </h2>
          </Col>
        </Row>
        <Row className="text-primary bg-light">
          <Col md={2}></Col>
          <ServiceItem
            content="Modernize software development processes while introducing good agile and human-centered design practices"
            icon={<FaUsersCog style={{ verticalAlign: "top" }} />}
          />
          <Col md={2}></Col>
          <ServiceItem
            content="Digitize and streamline internal systems to save time and unlock insights from data"
            icon={<FaBusinessTime style={{ verticalAlign: "top" }} />}
          />
          <Col md={2}></Col>
        </Row>
        <Row className="pb-4 text-primary bg-light">
          <Col md={2}></Col>
          <ServiceItem
            content="Improve public-facing services like websites or applications"
            icon={<MdWeb style={{ verticalAlign: "top" }} />}
          />
          <Col md={2}></Col>
          <ServiceItem
            content="Manage geospatial data and publish it on the web"
            icon={<FaGlobe style={{ verticalAlign: "top" }} />}
          />
          <Col md={2}></Col>
        </Row>
        <Row className="pt-3 pb-4 text-primary">
          <Col md={2}></Col>
          <Col>
            <h2>
              <strong>Featured projects</strong>
            </h2>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => {
            return project.isFeatured ? (
              <Col key={project.number} md={3} className="m-0 p-2">
                <IndexIsssueListItem
                  type="project"
                  issue={project}
                />
              </Col>
            ) : null;
          })}
        </Row>
      </Page>
    </>
  );
}
