import React from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";

import Comments from "./Comments";
import ProjectEvaluation from "./ProjectEvaluation";
import SpinnerWrapper from "../../wrappers/SpinnerWrapper";
import Issues from "./Issues";

const markdownRenderers = {
  //This custom renderer changes how images are rendered
  //we use it to constrain the max width of an image to its container
  image: ({ alt, src, title }) => (
    <Image className="img-fluid" alt={alt} src={src} title={title} />
  ),
};

function Description(props) {
  return (
    <Row className="mt-2">
      <Col>
        <ReactMarkdown
          escapeHtml={false}
          renderers={markdownRenderers}
          children={props.issue.body}
        />
      </Col>
    </Row>
  );
}

function handleTabChange(
  eventKey,
  history,
  setActiveTab,
  issueNumber,
  indexType
) {
  history.replace(`/${indexType}s/${issueNumber}?tab=${eventKey}`, undefined, {
    shallow: true,
  });
  setActiveTab(eventKey);
}

function IssueTabs(props) {
  const history = useRouter();
  const search = new URLSearchParams(useRouter().query);
  const [activeTab, setActiveTab] = React.useState(
    search.get("tab") || "description"
  );

  return (
    <Tabs
      activeKey={activeTab}
      defaultActiveKey="description"
      id="uncontrolled-tab-example"
      onSelect={(eventKey) =>
        handleTabChange(
          eventKey,
          history,
          setActiveTab,
          history.query.issue_number,
          props.indexType
        )
      }
    >
      <Tab eventKey="description" title="Description">
        <Description issue={props.issue} />
      </Tab>
      {props.indexType === "project" && (
        <Tab eventKey="evaluation" title="Evaluation">
          <ProjectEvaluation project={props.issue} issues={props.issues} />
        </Tab>
      )}
      <Tab eventKey="activity" title="Activity">
        <Comments issueNumber={props.issue.number} />
      </Tab>
      <Tab eventKey="issues" title="Issues">
        <Issues indexType={props.indexType} parent={props.issue} />
      </Tab>
    </Tabs>
  );
}

function BackLink(props) {
  return (
    <Row>
      <Col>
        <Button
          size="sm"
          type="button"
          className="btn-link bg-white border-white"
          onClick={(e) => {
            e.preventDefault();
            props.history.back();
          }}
        >
          <span className="text-muted">{`< Back to ${props.indexType}s`}</span>
        </Button>
      </Col>
    </Row>
  );
}

function InfoRow(props) {
  return (
    <Row className="mb-4">
      {props.issue.type && (
        <Col sm={3} md="auto">
          <h6 className="mb-0 mt-2 text-muted">Type</h6> {props.issue.type}
        </Col>
      )}
      <Col sm={3} md="auto">
        <h6 className="mb-0 mt-2 text-muted">Status</h6> {props.issue.pipeline}
      </Col>
      {props.issue.workgroups.length > 0 && (
        <Col sm={3} md="auto">
          <h6 className="mb-0 mt-2 text-muted">Workgroup(s)</h6>
          {props.issue.workgroups.join(", ")}
        </Col>
      )}
      <Col sm={3} md="auto">
        <h6 className="mb-0 mt-2 text-muted">Issue</h6>
        <a
          href={`https://github.com/cityofaustin/atd-data-tech/issues/${props.issue.number}`}
        >{`#${props.issue.number}`}</a>
      </Col>
    </Row>
  );
}

export default function IndexIssueDetails({
  issue_number,
  issues,
  indexType,
  error,
  isLoaded,
}) {
  const router = useRouter();

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded && !error) {
    return <SpinnerWrapper />;
  } else if (issues.length === 0) {
    // this would suggest we failed to fetch issues. e.g. Socrata is down
    return (
      <Alert variant="danger">
        We're unable to load project data at this time.
      </Alert>
    );
  }

  const issue = issues.filter((issue) => issue.number === issue_number)[0];

  if (!issue) {
    // this would suggest the user provided an invalid issue ID in the URL
    return (
      <Alert variant="danger">
        No project data found for project ID #{issue.number}
      </Alert>
    );
  }

  return (
    <>
      <BackLink indexType={indexType} history={router} />
      <h4 className="text-secondary mb-0">
        {indexType === "project" ? "Project details" : "Product Details"}
      </h4>
      <h1 className="text-primary">{issue.title}</h1>
      <InfoRow indexType={indexType} issue={issue} />
      <IssueTabs indexType={indexType} issue={issue} issues={issue} />
    </>
  );
}
