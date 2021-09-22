import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import NavComponent from "./NavComponent";
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
  let location = useRouter();
  const [currentPageRoute] = React.useState(location.pathname);
  return (
    <>
      {nav && (
        <NavComponent
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
