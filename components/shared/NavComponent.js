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
  { label: "Services", route: "/services" },
  { label: "About", route: "/about" },
];

export default function NavComponent(props) {
  const { currentPageRoute, isHome } = props;

  return (
    <Navbar expand="lg" className={`py-1 ${!isHome ? "nav-shadow" : ""}`}>
      <Container fluid key="nav-container">
        <Navbar.Brand as={Link} href="/" className="ps-2 me-auto">
          <div className="d-flex align-items-center">
            <div className="me-1 py-3">
              <Image
                height={36}
                src="/assets/COA-Logo-Horizontal-Official-RGB.svg"
                alt="Austin Transportation and Public Works wordmark including the Austin logo"
              />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {PAGES.map((page, idx) => {
              const fontWeightClass =
                currentPageRoute === page.route ? "fw-bold" : "";

              return (
                <div key={page.route} className={`flex-grow-1 mx-0 my-auto`}>
                  <Link
                    href={page.route}
                    passHref
                    className={`text-primary text-center px-3 py-1 navbar-menu-link nav-link ${fontWeightClass}`}
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
              className="text-white text-center d-none d-md-none d-lg-inline ps-3 my-auto"
            >
              <Button size="sm" className="me-4">
                <div>Get help</div>
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
