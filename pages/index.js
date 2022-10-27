import { useContext } from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import { IoIosPeople } from "react-icons/io";
import { FaGlobe, FaBriefcase } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import IssuesContext from "../contexts/IssuesContext";
import Page from "../components/shared/Page";
import IndexIsssueListItem from "../components/shared/IndexIssueListItem";

function ServiceItem(props) {
  const { icon, content } = props;
  return (
    <Col>
      <Row>
        <h1>{icon}</h1>
      </Row>
      <Row>
        <h5 className="fw-normal">{content}</h5>
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
                  <h1 className="pt-4 fw-bold" style={{ fontSize: "3.5rem" }}>
                    Tech Support for ATX Mobility
                  </h1>
                </Card.Title>
                <Card.Text className="pt-4 text-center text-white">
                  <p style={{ fontSize: "1.75rem", fontWeight: 500 }}>
                    We build and buy technology to help city staff <br></br>
                    tackle Austin&apos;s mobility challenges.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row className="py-5 text-primary text-center">
          <h2>
            <strong>We&apos;re here to help</strong>
          </h2>
        </Row>
        <Row className="text-primary text-center">
          <Col sm={1}></Col>
          <ServiceItem
            content="Modernize software development processes while introducing good agile and human-centered design practices"
            icon={<IoIosPeople style={{ verticalAlign: "top" }} />}
          />
          <ServiceItem
            content="Improve public-facing services like websites or applications"
            icon={<MdWeb style={{ verticalAlign: "top" }} />}
          />
          <ServiceItem
            content="Digitize and streamline internal systems to save time and unlock insights from data"
            icon={<FaBriefcase style={{ verticalAlign: "top" }} />}
          />
          <ServiceItem
            content="Manage geospatial data and publish it on the web"
            icon={<FaGlobe style={{ verticalAlign: "top" }} />}
          />
          <Col sm={1}></Col>
        </Row>
        <hr className="my-3 mx-4"></hr>
        <Row className="pt-3 pb-4 text-primary">
          <Col sm={1}></Col>
          <Col>
            <h4 className="fw-bold">Featured projects</h4>
          </Col>
        </Row>
        <Carousel>
          <Carousel.Item>
            <Row>
              {projects.map((project) => {
                return project.isFeatured ? (
                  <Col key={project.number} md={3} className="m-0 p-2">
                    <IndexIsssueListItem type="project" issue={project} />
                  </Col>
                ) : null;
              })}
            </Row>
          </Carousel.Item>
          <Row>
            {projects.map((project) => {
              return project.isFeatured ? (
                <Col key={project.number} md={3} className="m-0 p-2">
                  <IndexIsssueListItem type="project" issue={project} />
                </Col>
              ) : null;
            })}
          </Row>
          <Carousel.Item></Carousel.Item>
        </Carousel>
      </Page>
    </>
  );
}
