import { useContext } from "react";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import {
  IoIosPeople,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";
import { FaGlobe, FaBriefcase } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import IssuesContext from "../contexts/IssuesContext";
import Page from "../components/shared/Page";
import IndexIsssueListItem from "../components/shared/IndexIssueListItem";

function ServiceItem(props) {
  const { icon, content } = props;
  return (
    <Col className="px-3">
      <Row>
        <h1>{icon}</h1>
      </Row>
      <Row>
        <p style={{ fontSize: "1.1rem" }}>{content}</p>
      </Row>
    </Col>
  );
}

export default function HomeView() {
  const { issues } = useContext(IssuesContext);

  const featuredIssues = [];

  issues.map((issue) => {
    if (issue.isFeatured) {
      featuredIssues.push(issue);
    }
  });

  return (
    <>
      <Page fluid nav hideSeparator>
        <Row>
          <Card className="herosection p-0 h-100">
            <Card.Body className="pt-5">
              <Card.Title className="pt-4 text-center text-white fw-bold">
                <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
                  Tech Support for ATX Mobility
                </h1>
              </Card.Title>
              <Card.Text className="pt-3 text-center text-white">
                <p style={{ fontSize: "1.75rem", fontWeight: 500 }}>
                  We build and buy technology to help city staff <br></br>
                  tackle Austin&apos;s mobility challenges.
                </p>
              </Card.Text>
            </Card.Body>
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
            icon={
              <IoIosPeople style={{ verticalAlign: "top", fontSize: "3rem" }} />
            }
          />
          <ServiceItem
            content="Improve public-facing services like websites or applications"
            icon={<MdWeb style={{ verticalAlign: "top", fontSize: "3rem" }} />}
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
            <h4 className="fw-bold">Featured</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              variant="dark"
              indicators={false}
              nextIcon={<IoIosArrowDropright className="fs-1 text-primary" />}
              prevIcon={<IoIosArrowDropleft className="fs-1 text-primary" />}
              interval={null}
            >
              <Carousel.Item>
                <Row>
                  <Col sm={1}></Col>
                  {featuredIssues.slice(0, 4).map((issue) => {
                    const type = issue.labels.includes("Product Index")
                      ? "product"
                      : "project";
                    return (
                      <Col>
                        <IndexIsssueListItem issue={issue} type={type} />
                      </Col>
                    );
                  })}
                  <Col sm={1}></Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col sm={1}></Col>
                  {featuredIssues.slice(4, 9).map((issue) => {
                    const type = issue.labels.includes("Product Index")
                      ? "product"
                      : "project";
                    return (
                      <Col>
                        <IndexIsssueListItem issue={issue} type={type} />
                      </Col>
                    );
                  })}
                  <Col sm={1}></Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Page>
    </>
  );
}
