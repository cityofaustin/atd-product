import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";
import SpinnerWrapper from "../SpinnerWrapper";

function Comment(props) {
  const createdAt = new Date(props.comment.created_at).toLocaleDateString();
  return (
    <Card className="mt-2">
      <Card.Header>
        <b>{props.comment.user.login}</b>{" "}
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
            <ReactMarkdown source={props.comment.body} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default function Comments(props) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const issueNumber = props.issueNumber;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
