import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

function parseImage(body) {
  // find the first img (if one exists)
  const reImg = /(?:!\[(.*?)\]\((.*?)\))/;
  const imgMatch = body.match(reImg);
  let img = null;
  if (imgMatch && imgMatch.length > 0) {
    img = { alt: imgMatch[1], src: imgMatch[2] };
  }
  return img;
}

function getIndexType(issue) {
  if (issue.type === "Product") return "product";
  if (issue.type === "Project") return "project";
  return "service";
}

export default function IndexIssueListItem({ issue }) {
  const img = parseImage(issue.body);

  return (
    <Link
      className="text-decoration-none"
      href={{
        pathname: `${getIndexType(issue)}s/[issue_number]`,
        query: { issue_number: issue.number },
      }}
      passHref
    >
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
          <Card.Text className={img ? "card-text-img" : "card-text-no-image"}>
            <small className="text-muted">
              <ReactMarkdown
                components={{
                  // <Card.Text is a <p> tag, and ReactMarkdown defaults to wrapping its content in a <p> tag
                  // this throws a nested p tag warning, so changing the p component to fragment get rids of the warning
                  p: React.Fragment,
                }}
                skipHtml
              >
                {issue.description}
              </ReactMarkdown>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
