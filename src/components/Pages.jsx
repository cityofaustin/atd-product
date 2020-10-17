import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import IssuesContext from "./IssuesContext";
import Projects from "./Projects";
import Products from "./Products";
import Home from "./Home";
import IndexIssueDetails from "./IndexIssueDetails";
import About from "./About";
import Footer from "./Footer";

function Nav(props) {
  const pages = [
    { label: "Our work", route: "/projects" },
    { label: "What we deliver", route: "/products" },
    { label: "About us", route: "/about" },
  ];
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
            {pages.map((page, idx) => {
              const fontWeightClass =
                props.currentPageRoute === page.route ? "font-weight-bold" : "";
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
      {!props.hideSeparator && <IconSeparator />}
    </Container>
  );
}

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

function Title(props) {
  return (
    <Row className="m-0 p-0">
      <Col className="text-primary">
        <h1>{props.title}</h1>
      </Col>
    </Row>
  );
}

export function Page(props) {
  let location = useLocation();
  const [currentPageRoute] = React.useState(location.pathname);
  return (
    <>
      {props.nav && <Nav currentPageRoute={currentPageRoute} />}
      <Container>
        {props.title && <Title title={props.title} />}
        {props.children}
      </Container>
    </>
  );
}

export function ProjectsPage(props) {
  const context = React.useContext(IssuesContext);
  const issues = context.issues;
  const isLoaded = context.isLoaded;
  const error = context.error;

  return (
    <Page nav={true} title="Our work">
      <Projects
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        projectIssues={context.projectIssues}
        statuses={context.statuses}
        workgroups={context.workgroups}
      />
    </Page>
  );
}

export function HomePage(props) {
  return (
    <>
      <Nav hideSeparator />
      <Home />
      <Footer />
    </>
  );
}

export function AboutPage(props) {
  return (
    <Page nav={true} title="About Us">
      <About />
    </Page>
  );
}

export function Help(props) {
  return (
    <Page nav={true} title="Help">
      <Row>
        <Col>
          <p>
            Welcome to the help page. Maybe the service request form is here?
          </p>
        </Col>
      </Row>
    </Page>
  );
}

export function ProductsPage(props) {
  const context = React.useContext(IssuesContext);
  const issues = context.issues;
  const isLoaded = context.isLoaded;
  const error = context.error;
  return (
    <Page nav={true} title="What we deliver">
      <Products
        issues={issues}
        isLoaded={isLoaded}
        error={error}
        productIssues={context.productIssues}
      />
    </Page>
  );
}

export function ProjectDetailsPage(props) {
  const context = React.useContext(IssuesContext);
  const matches = useRouteMatch("/projects/:issue_number");
  const issue_number = matches.params.issue_number;
  return (
    <>
      <Page nav={true} title={false}>
        <IndexIssueDetails
          indexType="project"
          issues={context.issues}
          isLoaded={context.isLoaded}
          error={context.error}
          issue_number={issue_number}
        />
      </Page>
    </>
  );
}

export function ProductDetailsPage(props) {
  const context = React.useContext(IssuesContext);
  const matches = useRouteMatch("/products/:issue_number");
  const issue_number = matches.params.issue_number;
  return (
    <>
      <Page nav={true} title={false}>
        <IndexIssueDetails
          indexType="product"
          issues={context.issues}
          isLoaded={context.isLoaded}
          error={context.error}
          issue_number={issue_number}
        />
      </Page>
    </>
  );
}
