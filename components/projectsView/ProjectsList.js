import { useContext, useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import SpinnerWrapper from "../wrappers/SpinnerWrapper";
import EvaluationsContext from "../../contexts/EvaluationsContext";
import IndexIssueListItem from "../shared/IndexIssueListItem";
import ProjectFilters from "./ProjectFilters";
import ProjectScoreChart from "../shared/ProjectScoreChart";

function includedInArray(issue, field, arr) {
  return issue[field] ? arr.includes(issue[field]) : false;
}

function arrayIncludesValue(issue, field, value) {
  return issue[field] ? issue[field].includes(value) : false;
}

const FILTER_DEFS = [
  {
    key: "status",
    name: "Status",
    field: "status",
    matchFunc: includedInArray,
    default: "in_progress",
  },
  {
    key: "workgroup",
    name: "Workgroup",
    field: "workgroups",
    matchFunc: arrayIncludesValue,
    default: "",
  },
];

function applyCurrentFilters(issues, currentFilters, filterDefs) {
  const activeFilterDefs = filterDefs.filter(
    (filterDef) => currentFilters[filterDef.key]
  );
  return issues.filter((issue) => {
    // test each issue against all active filters
    return activeFilterDefs.every((filterDef) => {
      return filterDef.matchFunc(
        issue,
        filterDef.field,
        currentFilters[filterDef.key]
      );
    });
  });
}

const useDisplayIssues = ({ currentFilters, projectIssues }) =>
  useMemo(() => {
    return applyCurrentFilters(projectIssues, currentFilters, FILTER_DEFS);
  }, [currentFilters, projectIssues]);

const useDisplayScores = ({ displayIssues, scores }) =>
  useMemo(() => {
    return scores.filter((score) => {
      const number = score.number;
      // exclude issues that do not have a score
      const matchesIssues = displayIssues.filter(
        (issue) => parseInt(issue.number) === number
      );
      return matchesIssues.length > 0;
    });
  }, [displayIssues, scores]);

export default function ProjectsList(props) {
  const issues = props.issues;
  const projectIssues = props.projectIssues;
  const error = props.error;
  const isLoaded = props.isLoaded;
  const { scores } = useContext(EvaluationsContext);
  const location = useRouter();
  const [search] = useState(new URLSearchParams(location.query));
  const [currentFilters, setCurrentFilters] = useState({});
  const [showChartView, setShowChartView] = useState(false);

  useEffect(() => {
    /*
    check current url for filter params after issues are loaded. set them if present, 
    otherwise set default filter values
    */
    let paramFilters = {};
    FILTER_DEFS.forEach((filterDef) => {
      const value = search.get(filterDef.key);
      paramFilters[filterDef.key] = value ? value : filterDef.default;
    });
    setCurrentFilters(paramFilters);
  }, [issues, search]);

  const displayIssues = useDisplayIssues({ currentFilters, projectIssues });

  const displayScores = useDisplayScores({ displayIssues, scores });

  if (error) {
    return <p>{error}</p>;
  } else if (!isLoaded && !error) {
    return <SpinnerWrapper />;
  } else if (projectIssues.length === 0) {
    return <Alert variant="dark">No project data found.</Alert>;
  }

  return (
    <>
      <Row key="filter-row">
        <Col>
          <ProjectFilters
            filterDefs={FILTER_DEFS}
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
            showChartView={showChartView}
            setShowChartView={setShowChartView}
            statuses={props.statuses}
            workgroups={props.workgroups}
          />
        </Col>
      </Row>
      {!showChartView && (
        <Row>
          <Col className="text-end text-muted mt-2">
            <small>Showing {displayIssues.length} projects</small>
          </Col>
        </Row>
      )}
      <Row>
        <hr className="mt-3" />
      </Row>
      {!showChartView && (
        <Row key="issues-row">
          {displayIssues.map((project) => (
            <Col
              key={project.number}
              sm={12}
              md={6}
              lg={3}
              className="m-0 py-3"
            >
              <IndexIssueListItem issue={project} />
            </Col>
          ))}
        </Row>
      )}
      {showChartView && <ProjectScoreChart scores={displayScores} />}
      {displayIssues && displayIssues.length === 0 && (
        <Row>
          <Col>
            <Alert variant="dark">No projects found.</Alert>
          </Col>
        </Row>
      )}
    </>
  );
}
