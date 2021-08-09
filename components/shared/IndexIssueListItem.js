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

const markdownRenderers = {
  /*
  This custom renderer suppresses default link handling by returning the plain link 
  text. I believe we're working a round a ReactMarkdown bug here. The link arg should
  include a `text` prop that we can return, but only `href` is available when
  destructring the function args. We cannot render a normal <a> tag here because it will
  result in nested <a> tags because of the wrapping Card <Link/>. To quote the warning
  message: <a> cannot appear as a descendant of <a>.

  Bug issue: https://github.com/remarkjs/react-markdown/issues/539
  */
  link: ({ children }) => {
    return children[0].props.value;
  },
};

export default function IndexIsssueListItem(props) {
  let { type, issue } = props;
  const [description, img] = parseBody(issue.body);
  return (
    <Link
      className="text-primary text-decoration-none"
      href={{
        pathname: `${type}s/${issue.number}`,
        query: { showBackLink: true },
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
            <Col className="text-muted">
              <ReactMarkdown
                renderers={markdownRenderers}
                escapeHtml={false}
                children={description}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
}
