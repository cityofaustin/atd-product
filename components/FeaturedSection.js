import { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import IssuesContext from "../contexts/IssuesContext";
import IndexIssueListItem from "./shared/IndexIssueListItem";
import { LARGE_BREAKPOINT } from "./settings";

export default function FeaturedSection() {
  // Set state for next/previous arrows so they disappear on slide
  const [showArrows, setShowArrows] = useState(true);

  const { issues } = useContext(IssuesContext);
  const featuredIssues = issues.filter((issue) => issue.isFeatured);

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${LARGE_BREAKPOINT})`,
  });

  return (
    <Row>
      {/* Render rows with featured cards if tablet or mobile else render carousel */}
      {isTabletOrMobile ? (
        <Col>
          <Row>
            {/* This slice is incase there are more than 8 issues with the featured label */}
            {featuredIssues.slice(0, 8).map((issue) => {
              return (
                <Col xs={12} md={6} key={issue.number} className="px-4 pb-5">
                  <IndexIssueListItem issue={issue} />
                </Col>
              );
            })}
          </Row>
        </Col>
      ) : (
        <Col>
          <Carousel
            variant="dark"
            indicators={false}
            nextIcon={<IoIosArrowDropright className="fs-1 text-primary" />}
            prevIcon={<IoIosArrowDropleft className="fs-1 text-primary" />}
            interval={null}
            controls={showArrows}
            onSlide={() => setShowArrows(false)}
            onSlid={() => setShowArrows(true)}
          >
            <Carousel.Item>
              <Row className="mb-3">
                <Col xs={1}></Col>
                {/* We have decided that at most 8 featured projects will ever be displayed */}
                {featuredIssues.slice(0, 4).map((issue) => {
                  return (
                    <Col key={issue.number}>
                      <IndexIssueListItem issue={issue} />
                    </Col>
                  );
                })}
                <Col xs={1}></Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="mb-3">
                <Col xs={1}></Col>
                {featuredIssues.slice(4, 8).map((issue) => {
                  return (
                    <Col key={issue.number}>
                      <IndexIssueListItem issue={issue} />
                    </Col>
                  );
                })}
                <Col xs={1}></Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      )}
    </Row>
  );
}
