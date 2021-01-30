import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function parseBody(body) {
  // extract content up to the first linebreak to use as description
  const reDescription = /.*/;
  const description = body.match(reDescription)[0];
  const reImg = /(?:!\[(.*?)\]\((.*?)\))/;
  // find the first img (if one exists)
  const imgMatch = body.match(reImg);
  let img = null;
  if (imgMatch && imgMatch.length > 0) {
    img = { alt: imgMatch[1], src: imgMatch[2] };
  }
  return [description, img];
}

export default function IndexIsssueListItem(props) {
  let { type, issue } = props;
  const [description, img] = parseBody(issue.body);
  return (
    <Link
      className="text-primary text-decoration-none"
      to={{
        pathname: `${type}s/${issue.number}`,
        state: { showBackLink: true },
      }}
    >
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Title className="text-primary">{issue.title}</Card.Title>
          {img && (
            <Row className="pb-2">
              <Col>
                <Card.Img variant="top" src={img.src} alt={img.alt} />
              </Col>
            </Row>
          )}
          <Row>
            <Col className="text-muted">{description}</Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
}
