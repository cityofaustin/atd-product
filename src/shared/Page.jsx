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
  const { children, fluid, footer, hideSeparator, nav, title } = props;
  let location = useLocation();
  const [currentPageRoute] = React.useState(location.pathname);
  return (
    <>
      {nav && (
        <Nav
          hideSeparator={hideSeparator}
          currentPageRoute={currentPageRoute}
        />
      )}
      <Container fluid={fluid}>
        {title && <Title title={title} />}
        {children}
      </Container>
      {footer && <Footer />}
    </>
  );
}
