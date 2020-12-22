import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Title(props) {
  return (
    <Row className="m-0 p-0">
      <Col className="text-primary">
        <h1>{props.title}</h1>
      </Col>
    </Row>
  );
}

export default function Page(props) {
  let location = useLocation();
  const [currentPageRoute] = React.useState(location.pathname);
  return (
    <>
      {props.nav && (
        <Nav
          hideSeparator={props.hideSeparator}
          currentPageRoute={currentPageRoute}
        />
      )}
      <Container fluid={props.fluid}>
        {props.title && <Title title={props.title} />}
        {props.children}
      </Container>
      {props.footer && <Footer />}
    </>
  );
}
