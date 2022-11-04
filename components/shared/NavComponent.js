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
  { label: "Products", route: "/products" },
  { label: "Projects", route: "/projects" },
  { label: "About", route: "/about" },
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
    <Navbar expand="lg" className={`py-1`}>
      <Container fluid key="nav-container">
        <Link href="/" passHref>
          <Navbar.Brand style={{ cursor: "pointer" }} className="ps-2 me-auto">
            <div className="d-flex align-items-center">
              <div className="me-1">
                <Image
                  height={50}
                  src="/assets/coa_seal_full_navy.svg"
                  alt="City of Austin seal"
                />
              </div>
              <Image
                height={20}
                src="/assets/transportation_din_navy.svg"
                alt="Austin transportation logo"
              />
            </div>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {PAGES.map((page, idx) => {
              const fontWeightClass =
                currentPageRoute === page.route ? "fw-bold" : "";
              const borderClass = idx === 0 ? "" : "navbar-menu-borders";

              return (
                <div key={page.route} className={`flex-grow-1 mx-0 my-auto`}>
                  <Link href={page.route} passHref>
                    <Nav.Link
                      className={`text-primary text-center px-3 py-0 navbar-menu-link ${fontWeightClass}`}
                    >
                      {page.label}
                    </Nav.Link>
                  </Link>
                </div>
              );
            })}
            <a
              href="https://atd.knack.com/dts#new-service-request"
              className="text-white text-center d-inline d-lg-none mt-2 mb-3"
            >
              <Button size="sm">
                <div>Get help</div>
              </Button>
            </a>
            <a
              href="https://atd.knack.com/dts#new-service-request"
              className="text-white text-center d-none d-md-none d-lg-inline me-3 ps-3 my-auto"
            >
              <Button size="sm">
                <div>Get help</div>
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
