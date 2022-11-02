import { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import IssuesContext from "../contexts/IssuesContext";
import IndexIssueListItem from "../components/shared/IndexIssueListItem";

export default function FeaturedCarousel() {
  // Set state for next/previous arrows so they disappear on slide
  const [showArrows, setShowArrows] = useState(true);

  const { issues } = useContext(IssuesContext);
  const featuredIssues = issues.filter((issue) => issue.isFeatured);

  return (
    <Carousel
      variant="dark"
      indicators={false}
      nextIcon={<IoIosArrowDropright className="fs-1 text-primary" />}
      prevIcon={<IoIosArrowDropleft className="fs-1 text-primary" />}
      interval={null}
      controls={showArrows}
      onSlide={(e) => setShowArrows(false)}
      onSlid={(e) => setShowArrows(true)}
    >
      <Carousel.Item>
        <Row className="mb-3">
          <Col sm={1}></Col>
          {/* We have decided that at most 8 featured projects will ever be
          displayed */}
          {featuredIssues.slice(0, 4).map((issue) => {
            const type = issue.labels.includes("Product Index")
              ? "product"
              : "project";
            return (
              <Col key={issue.number}>
                <IndexIssueListItem issue={issue} type={type} />
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
                <IndexIssueListItem issue={issue} type={type} />
              </Col>
            );
          })}
          <Col sm={1}></Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
