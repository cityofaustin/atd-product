import React from "react";
import { Container, Row, Col, Button, Image, Nav, Navbar } from "react-bootstrap";
import "../scss/custom.scss";

const PAGES = [
  { label: "Our work", route: "/projects" },
  { label: "What we deliver", route: "/products" },
  { label: "About us", route: "/about" },
];

function IconSeparator(props) {
  return (
    <Row>
      <Col className="flex-grow-1 pl-0">
        <hr className="w-100" />
      </Col>
      <Col xs="auto" className="pt-2 px-sm-0 mx-sm-0">
        <img
          className="float-right"
          height={17}
          src="/assets/icos.jpg"
          alt="Generic placeholder"
        />
      </Col>
      <Col sm={1} className="d-none d-sm-block pr-0">
        <hr className="w-100" />
      </Col>
    </Row>
  );
}

export default function NavComponent(props) {
  const { currentPageRoute, hideSeparator } = props;

  return (
    <Container key="nav-container" className="px-0" fluid>
      <Navbar expand="md" className="py-1">
        <div className="d-flex flex-nowrap">
          <Navbar.Brand href="/" className="pl-0" key="logo-img">
            <Image
              width={400}
              className="d-none d-md-inline"
              src="/assets/new_10_1600.jpg"
              alt="Generic placeholder"
            />
            <Image
              fluid
              className="d-inline d-md-none"
              src="/assets/new_10_1600.jpg"
              alt="Generic placeholder"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {PAGES.map((page, idx) => {
              const fontWeightClass =
                currentPageRoute === page.route ? "font-weight-bold" : "";
              const borderClass = idx === 0 ? "" : "navbar-menu-borders";

              return (
                <div
                  key={page.route}
                  className={`flex-grow-1 mx-0 my-auto ${borderClass}`}
                >
                  <Nav.Link
                    className={`text-primary text-center px-3 navbar-menu-link ${fontWeightClass}`}
                    href={page.route}
                  >
                    {page.label}
                  </Nav.Link>
                </div>
              );
            })}
            <a
              href="https://atd.knack.com/dts#new-service-request"
              className="text-white text-center d-inline d-md-none mt-2"
            >
              <Button size="sm">Get help</Button>
            </a>
            <a
              href="https://atd.knack.com/dts#new-service-request"
              className="text-white text-center d-none d-md-inline mr-0 pl-3 my-auto"
            >
              <Button size="sm">Get help</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {!hideSeparator && <IconSeparator />}
    </Container>
  );
}
