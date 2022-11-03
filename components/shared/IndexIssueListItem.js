import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

function parseBody(body) {
  // extract content up to the first sentence or linebreak if no period to use as description
  const reDescriptionSentence = /^(.*?)[.?!]\s+/;
  const reDescriptionLinebreak = /.*/;
  const description =
    body.match(reDescriptionSentence)?.[0] ||
    body.match(reDescriptionLinebreak)?.[0];
  const reImg = /(?:!\[(.*?)\]\((.*?)\))/;
  // find the first img (if one exists)
  const imgMatch = body.match(reImg);
  let img = null;
  if (imgMatch && imgMatch.length > 0) {
    img = { alt: imgMatch[1], src: imgMatch[2] };
  }
  return [description, img];
}

export default function IndexIssueListItem({ issue }) {
  const [description, img] = parseBody(issue.body);

  const type = issue.labels.includes("Product Index") ? "product" : "project";

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
        <Card className="nav-tile" style={{ height: "275px" }}>
          {img && (
            <Card.Img
              variant="top"
              alt={img.alt}
              src={img.src}
              style={{ height: "150px" }}
            />
          )}
          <Card.Body className="lh-1">
            <Card.Title className="fw-bold fs-6 text-primary">
              {issue.title}
            </Card.Title>
            <Card.Text>
              <small className="text-muted">
                <ReactMarkdown skipHtml>{description}</ReactMarkdown>
              </small>
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
}
