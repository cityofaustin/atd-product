import { useCallback, useMemo, useContext } from "react";
import IssuesContext from "../../contexts/IssuesContext";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import SpinnerWrapper from "../wrappers/SpinnerWrapper";
import IndexIssueListItem from "../shared/IndexIssueListItem";
import ProjectFilters from "./ProjectFilters";

function includedInStringOrArray(issue, field, value) {
  return issue[field] ? value.includes(issue[field]) : false;
}

function arrayIncludesValue(issue, field, value) {
  return issue[field] ? issue[field].includes(value) : false;
}

const FILTER_DEFS = [
  {
    key: "status",
    name: "Status",
    field: "status",
    matchFunc: includedInStringOrArray,
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

export default function ProjectsList(props) {
  const { isLoaded, error, projectIssues } = useContext(IssuesContext);
  const router = useRouter();

  const currentFilters = useMemo(() => {
    const filters = {};
    if (router.isReady) {
      FILTER_DEFS.forEach((filterDef) => {
        const queryValue = router.query[filterDef.key];
        console.log(queryValue);
        filters[filterDef.key] = queryValue ? queryValue : filterDef.default;
      });
    }
    return filters;
  }, [router.isReady, router.query]);


  const setCurrentFilters = useCallback(
    (nextFilters) => {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, ...nextFilters },
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const displayIssues = useDisplayIssues({ currentFilters, projectIssues });

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
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
            workgroups={props.workgroups}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-end text-muted">
          <small>Showing {displayIssues.length} projects</small>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="mt-3" />
        </Col>
      </Row>
      <Row key="issues-row">
        {displayIssues.map((project) => (
          <Col key={project.number} sm={12} md={6} lg={3} className="m-0 py-3">
            <IndexIssueListItem issue={project} />
          </Col>
        ))}
      </Row>
      {displayIssues && displayIssues.length === 0 && (
        <Row>
          <Col>
            <Alert variant="dark">No projects found.</Alert>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <div className="mt-4 text-center mb-2 text-black">
            Visit{" "}
            <a
              className="link"
              href="https://github.com/cityofaustin/atd-data-tech/issues?q=is%3Aissue+label%3A%22Project+Index%22+is%3Aclosed"
            >
              GitHub
            </a>{" "}
            for a full list of our completed projects.
          </div>
        </Col>
      </Row>
    </>
  );
}
