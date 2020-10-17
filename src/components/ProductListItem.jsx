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

export default function ProjectListItem(props) {
  let product = props.product;
  const [description, img] = parseBody(product.body);
  return (
    <Link
      className="text-primary text-decoration-none"
      to={{
        pathname: `products/${product.number}`,
        state: { showBackLink: true },
      }}
    >
      <Card className="h-100 shadow-sm">
        {img && <Card.Img variant="top" src={img.src} alt={img.alt} />}
        <Card.Body>
          <Card.Title className="text-primary">{product.title}</Card.Title>
          <Row>
            <Col className="text-muted">{description}</Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
}
