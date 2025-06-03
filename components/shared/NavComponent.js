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
  const { currentPageRoute, isHome } = props;

  return (
    <Navbar expand="lg" className={`py-1 ${!isHome ? "nav-shadow" : ""}`}>
      <Container fluid key="nav-container">
        <Link href="/" passHref>
          <Navbar.Brand style={{ cursor: "pointer" }} className="ps-2 me-auto">
            <div className="d-flex align-items-center">
              <div className="me-1">
                <Image
                  height={60}
                  src="/assets/2023_austin_transportation_public_works_branding_guide_royal.png"
                  alt="Transportation and Public Works wordmark including the City of Austin seal"
                />
              </div>
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
                  <Link
                    href={page.route}
                    passHref
                    className={`text-primary text-center px-3 py-1 navbar-menu-link ${fontWeightClass}`}
                  >
                    {page.label}
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
