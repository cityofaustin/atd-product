import { useContext } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FaGlobe, FaUsersCog, FaBusinessTime } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import IssuesContext from "../contexts/IssuesContext";
import Page from "../components/shared/Page";
import IndexIsssueListItem from "../components/shared/IndexIssueListItem";

function ServiceItem(props) {
  const { icon, content } = props;
  return (
    <Col md={3} className="pb-4">
      <Row>
        <Col xs="auto" className="pe-0">
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

export default function HomeView() {
  const { projectIssues: projects } = useContext(IssuesContext);

  return (
    <>
      <Page fluid nav hideSeparator>
        <Row>
          <Card className="p-0">
            <Card.Img src="/assets/skyline.png" alt="Card Image" />
            <Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="pt-5 text-center text-white fw-bold">
                  <h1 className="fw-bold">Tech Support for ATX Mobility</h1>
                </Card.Title>
                <Card.Text className="text-center text-white">
                  <h3>
                    We build and buy technology to help city staff <br></br>
                    tackle Austin&apos;s mobility challenges.
                  </h3>
                </Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row
          className="py-3 text-primary"
          style={{
            backgroundColor: "#f8f9fa",
          }}
        >
          <Col md={2}></Col>
          <Col>
            <h2>
              <strong>We&apos;re here to help</strong>
            </h2>
          </Col>
        </Row>
        <Row
          className="text-primary"
          style={{
            backgroundColor: "#f8f9fa",
          }}
        >
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
        <Row
          className="pb-4 text-primary"
          style={{
            backgroundColor: "#f8f9fa",
          }}
        >
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
                <IndexIsssueListItem type="project" issue={project} />
              </Col>
            ) : null;
          })}
        </Row>
      </Page>
    </>
  );
}
