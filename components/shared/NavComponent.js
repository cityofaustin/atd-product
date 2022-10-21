import React from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";

const PAGES = [
  { label: "Our work", route: "/projects" },
  { label: "What we deliver", route: "/products" },
  { label: "About us", route: "/about" },
];

function IconSeparator() {
  return (
    <Row>
      <Col className="flex-grow-1 ps-0">
        <hr className="w-100" />
      </Col>
      <Col xs="auto" className="pt-2 px-sm-0 mx-sm-0">
        <Image
          className="float-end"
          height={17}
          src="/assets/icos.jpg"
          alt="Generic placeholder"
        />
      </Col>
      <Col sm={1} className="d-none d-sm-block pe-0">
        <hr className="w-100" />
      </Col>
    </Row>
  );
}

export default function NavComponent(props) {
  const { currentPageRoute, hideSeparator } = props;

  return (
    <Container key="nav-container" className="px-0" fluid>
      <Navbar expand="md" className="py-1 ps-3">
        <div className="d-flex flex-nowrap">
          <Navbar.Brand href="/" className="ps-0" key="logo-img">
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggle"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {PAGES.map((page, idx) => {
              const fontWeightClass =
                currentPageRoute === page.route ? "fw-bold" : "";
              const borderClass = idx === 0 ? "" : "navbar-menu-borders";

              return (
                <div
                  key={page.route}
                  className={`flex-grow-1 mx-0 my-auto ${borderClass}`}
                >
                  <Link href={page.route} passHref>
                    <Nav.Link
                      className={`text-primary text-center px-3 navbar-menu-link ${fontWeightClass}`}
                    >
                      {page.label}
                    </Nav.Link>
                  </Link>
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
              className="text-white text-center d-none d-md-inline me-3 ps-3 my-auto"
            >
              <Button size="sm">Get help</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {!hideSeparator && (
        <div style={{ overflowX: "hidden" }}>
          <IconSeparator />
        </div>
      )}
    </Container>
  );
}
