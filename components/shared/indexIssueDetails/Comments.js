import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactMarkdown from "react-markdown";

import SpinnerWrapper from "../../wrappers/SpinnerWrapper";

const markdownComponents = {
  // This custom renderer changes how images are rendered
  // we use it to constrain the max width of an image to its container
  img: ({ node, ...props }) => (
    <Image className="img-fluid" alt="image from github" {...props} />
  ),
};

function Comment({ comment }) {
  const createdAt = new Date(comment.created_at).toLocaleDateString();
  return (
    <Card className="mt-2">
      <Card.Header>
        <b>{comment.user.login}</b>
        <span className="text-muted">commented on {createdAt}</span>
      </Card.Header>
      <Card.Body className="py-1">
        <Row className="mb-2 mt-0 pt-0">
          <Col xs="auto" className="text-muted">
            <i></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMarkdown skipHtml components={markdownComponents}>
              {comment.body}
            </ReactMarkdown>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default function Comments({ issueNumber }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = `https://api.github.com/repos/cityofaustin/atd-data-tech/issues/${issueNumber}/comments?per_page=100`;

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.error) {
            // on query error, socrata returns 200 with error message in body
            setError(result.message.toString());
          } else {
            // note issue comments sort oldest to newest. no sort param avail in API
            setData(result.reverse());
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error.toString());
        }
      );
  }, [issueNumber]);

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded && !error) {
    return <SpinnerWrapper />;
  } else if (!data || data.length === 0) {
    return <p>No comments.</p>;
  }

  return (
    <>
      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}
