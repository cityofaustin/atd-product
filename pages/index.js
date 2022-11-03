import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosPeople } from "react-icons/io";
import { FaGlobe, FaBriefcase } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import Page from "../components/shared/Page";
import FeaturedCarousel from "../components/FeaturedCarousel";

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
  return (
    <>
      <Page fluid nav hideSeparator>
        <Row className="hero-section d-flex align-items-center">
          <Col>
            <h1 className="text-white display-3 fw-bold text-center pb-4">
              Tech Support for ATX Mobility
            </h1>
            <h3 className="text-white text-center">
              We build and buy technology to help city staff <br></br>
              tackle Austin&apos;s mobility challenges.
            </h3>
          </Col>
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
            <FeaturedCarousel />
          </Col>
        </Row>
      </Page>
    </>
  );
}
