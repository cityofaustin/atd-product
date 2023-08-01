import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";

import Comments from "./Comments";
import ProjectEvaluation from "./ProjectEvaluation";
import SpinnerWrapper from "../../wrappers/SpinnerWrapper";
import Issues from "./Issues";

const markdownComponents = {
  // This custom renderer changes how images are rendered
  // we use it to constrain the max width of an image to its container
  img: ({ node, ...props }) => (
    <Image {...props} className="img-fluid" alt="image from github"/>
  ),
  a: ({ node, ...props }) => (
    <a {...props} className="markdown-link"/>
  ),
};

function Description(props) {
  return (
    <Row className="mt-2">
      <Col>
        <ReactMarkdown
          skipHtml
          components={markdownComponents}
          remarkPlugins={[remarkGfm]}
        >
          {props.issue.body}
        </ReactMarkdown>
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

function IssueTabs({ indexType, issue }) {
  const history = useRouter();
  const search = new URLSearchParams(useRouter().query);
  const [activeTab, setActiveTab] = useState(
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
          indexType
        )
      }
    >
      <Tab eventKey="description" title="Description">
        <Description issue={issue} />
      </Tab>
      {indexType === "project" && (
        <Tab eventKey="evaluation" title="Evaluation">
          <ProjectEvaluation project={issue} />
        </Tab>
      )}
      <Tab eventKey="activity" title="Activity">
        <Comments issueNumber={issue.number} />
      </Tab>
      <Tab eventKey="issues" title="Issues">
        <Issues indexType={indexType} parent={issue} />
      </Tab>
    </Tabs>
  );
}

function InfoRow({ issue }) {
  return (
    <Row className="mb-4">
      {issue.type && (
        <Col sm={3} md="auto">
          <h6 className="mb-0 mt-2 text-muted">Type</h6> {issue.type}
        </Col>
      )}
      <Col sm={3} md="auto">
        <h6 className="mb-0 mt-2 text-muted">Status</h6> {issue.pipeline}
      </Col>
      {issue.workgroups.length > 0 && (
        <Col sm={3} md="auto">
          <h6 className="mb-0 mt-2 text-muted">Workgroup(s)</h6>
          {issue.workgroups.join(", ")}
        </Col>
      )}
      <Col sm={3} md="auto">
        <h6 className="mb-0 mt-2 text-muted">Issue</h6>
        <a
          href={`https://github.com/cityofaustin/atd-data-tech/issues/${issue.number}`}
        >{`#${issue.number}`}</a>
      </Col>
    </Row>
  );
}

export default function IndexIssueDetails({
  issue_number,
  issue,
  indexType,
  error,
  isLoaded,
}) {
  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded && !error) {
    return <SpinnerWrapper />;
  }

  if (!issue) {
    // this would suggest the user provided an invalid issue ID in the URL
    return (
      <Alert variant="danger">
        No project data found for project ID #{issue_number}
      </Alert>
    );
  }

  return (
    <>
      <Link href={`/${indexType}s`}>
        <span
          className="text-muted"
          role="button"
        >{`< Back to ${indexType}s`}</span>
      </Link>
      <h4 className="text-black mb-0">
        {indexType === "project" ? "Project Details" : "Product Details"}
      </h4>
      <h1 className="text-primary">{issue.title}</h1>
      <InfoRow indexType={indexType} issue={issue} />
      <IssueTabs indexType={indexType} issue={issue} />
    </>
  );
}
