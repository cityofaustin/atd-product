import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

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

export default function Nav(props) {
  const { currentPageRoute, hideSeparator } = props;

  return (
    <Container key="nav-container" fluid>
      <Row className="py-2">
        <Col sm={12} md="auto" key="logo-img">
          <Row>
            <Col>
              <Link to="/">
                <Image
                  width={400}
                  className="float-left d-none d-md-block"
                  src="/assets/new_10_1600.jpg"
                  alt="Generic placeholder"
                />
                <Image
                  fluid
                  className="float-left d-sm-block d-md-none"
                  src="/assets/new_10_1600.jpg"
                  alt="Generic placeholder"
                />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          md="auto"
          className="mt-3 my-md-auto ml-md-auto text-center"
        >
          <Row>
            {PAGES.map((page, idx) => {
              const fontWeightClass =
                currentPageRoute === page.route ? "font-weight-bold" : "";
              const borderClass =
                idx === 0 ? "" : "border-left border-secondary";

              return (
                <Col
                  key={page.route}
                  xs="auto"
                  className={`flex-grow-1 mx-0 my-auto ${borderClass}`}
                >
                  <Link
                    className={`m-0 p-0 text-primary ${fontWeightClass}`}
                    to={page.route}
                  >
                    {page.label}
                  </Link>
                </Col>
              );
            })}
            <Col xs="auto" key="help" className="flex-grow-1">
              <a
                href="https://atd.knack.com/dts#new-service-request"
                className="text-white"
              >
                <Button size="sm" className="my-auto btn-block">
                  Get help
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      {!hideSeparator && <IconSeparator />}
    </Container>
  );
}
