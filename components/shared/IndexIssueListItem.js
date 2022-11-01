import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

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

export default function IndexIsssueListItem({ type, issue }) {
  const [description, img] = parseBody(issue.body);

  return (
    <Link
      className="text-decoration-none"
      href={{
        pathname: `${type}s/[issue_number]`,
        query: { issue_number: issue.number },
      }}
      passHref
    >
      <a className="text-decoration-none">
        <Card className="h-100 nav-tile">
          {img && <Card.Img variant="top" alt={img.alt} src={img.src} />}
          <Card.Body className="lh-1 pb-0">
            <Card.Title className="fw-bold fs-6 text-primary">
              {issue.title}
            </Card.Title>
            <Row>
              <Col className="text-muted">
                <small>
                  <ReactMarkdown skipHtml>{description}</ReactMarkdown>
                </small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
}
