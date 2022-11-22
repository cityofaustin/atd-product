import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import NavComponent from "./NavComponent";
import Footer from "./Footer";

function Title(props) {
  return (
    <Row>
      <Col className="text-primary">
        <h1>{props.title}</h1>
      </Col>
    </Row>
  );
}

export default function Page({ children, fluid, nav, title, isHome }) {
  let location = useRouter();
  const [currentPageRoute] = useState(location.pathname);

  return (
    <>
      {nav && (
        <NavComponent currentPageRoute={currentPageRoute} isHome={isHome} />
      )}
      <Container fluid={fluid} className={`${!isHome && "mt-3"}`}>
        {title && <Title title={title} />}
        {children}
      </Container>
      <Footer />
    </>
  );
}
