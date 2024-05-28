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
                {description}
              </ReactMarkdown>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
