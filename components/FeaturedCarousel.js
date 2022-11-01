import { useContext } from "react";
import IssuesContext from "../contexts/IssuesContext";
import IndexIsssueListItem from "../components/shared/IndexIssueListItem";
import { Row, Col, Carousel } from "react-bootstrap";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function FeaturedCarousel() {
  const { issues } = useContext(IssuesContext);

  const featuredIssues = issues.filter((issue) => issue.isFeatured);

  return (
    <Carousel
      variant="dark"
      indicators={false}
      nextIcon={<IoIosArrowDropright className="fs-1 text-primary" />}
      prevIcon={<IoIosArrowDropleft className="fs-1 text-primary" />}
      interval={null}
    >
      <Carousel.Item>
        <Row className="mb-3">
          <Col sm={1}></Col>
          {featuredIssues.slice(0, 4).map((issue) => {
            const type = issue.labels.includes("Product Index")
              ? "product"
              : "project";
            return (
              <Col key={issue.number}>
                <IndexIsssueListItem issue={issue} type={type} />
              </Col>
            );
          })}
          <Col sm={1}></Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="mb-3">
          <Col sm={1}></Col>
          {featuredIssues.slice(4, 8).map((issue) => {
            const type = issue.labels.includes("Product Index")
              ? "product"
              : "project";
            return (
              <Col key={issue.number}>
                <IndexIsssueListItem issue={issue} type={type} />
              </Col>
            );
          })}
          <Col sm={1}></Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
