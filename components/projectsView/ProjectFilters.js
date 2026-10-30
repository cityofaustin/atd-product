import { useEffect } from "react";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import FiltersList from "./FiltersList";
import { MEDIUM_BREAKPOINT } from "../settings";

const STATUS_FILTERS = [
  { label: "Needs Scoping", key: "needs_scoping" },
  { label: "Backlog", key: "backlog" },
  { label: "In Progress", key: "in_progress" },
  { label: "Complete", key: "completed" },
];

const DIVISION_NAMES = {
  AMD: "Arterial Management",
  ATSD: "Active Transportation & Street Design",
  CCG: "Construction Coordination Group",
  CSD: "Community Services",
  DM: "District Maintenance",
  DTS: "Data & Tech Services",
  EM: "Emergency Management",
  Finance: "Finance",
  HR: "Human Resources",
  LDE: "Land Development Engineering",
  OCE: "Office of the City Engineer",
  OPM: "Office of Performance Management",
  OSE: "Office of Special Events",
  PD: "Project Delivery",
  PE: "Parking Enterprise",
  PIO: "Public Information Office",
  PO: "Pavement Operations",
  ROW: "Right of Way",
  SBO: "Infrastructure Operations",
  SDD: "Systems Development",
  SMD: "Signs & Markings",
  SP: "Strategic Projects",
  SUTD: "Sidewalks & Urban Trails",
  TDS: "Transportation Development Services",
  TED: "Transportation Engineering",
  TPW: "Transportation & Public Works",
  UF: "Urban Forestry",
  US: "Utilities & Structures",
  VZ: "Vision Zero",
};

function handleChange(value, currentFilters, setCurrentFilters, filterKey) {
  let mutableFilters = { ...currentFilters };
  mutableFilters[filterKey] = value || null;
  setCurrentFilters(mutableFilters);
}

export default function ProjectFilters({
  currentFilters,
  setCurrentFilters,
  divisions,
}) {
  const isMobile = useMediaQuery({
    query: `(max-width: ${MEDIUM_BREAKPOINT})`,
  });
  const router = useRouter();

  useEffect(() => {
    // Format the search path to match currently selected filters
    const searchKwargs = Object.keys(currentFilters)
      .filter((key) => currentFilters[key])
      .map((key) => {
        return `${key}=${currentFilters[key]}`;
      })
      .join("&");

    // Build the new query string
    let queryString = `?${searchKwargs}`;

    // Update the URL
    router.replace(`/projects/${queryString}`, undefined, { shallow: true });

    // we can't put the router in the dep array: https://github.com/vercel/next.js/issues/18127
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilters]);

  return (
    <Row className="text-center">
      {isMobile ? (
        <Col key="projectStatusFilter">
          <Row className="h-100 mb-3">
            <Col>
              <Form.Select
                className={
                  currentFilters.status
                    ? "division-select-active"
                    : "division-select-inactive"
                }
                key="status"
                value={currentFilters.status || "In Progress"}
                onChange={(e) =>
                  handleChange(
                    e.target.value,
                    currentFilters,
                    setCurrentFilters,
                    "status"
                  )
                }
              >
                <option value="">Project Status</option>
                {STATUS_FILTERS.map((projectStatus) => {
                  return (
                    <option
                      className="text-black"
                      key={projectStatus.key}
                      value={projectStatus.key}
                    >
                      {projectStatus.label}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Row>
        </Col>
      ) : (
        <FiltersList
          currentFilters={currentFilters}
          handleChange={handleChange}
          setCurrentFilters={setCurrentFilters}
          statusFilters={STATUS_FILTERS}
        />
      )}
      <Col xs={12} lg={3} className="mb-3" key="divisionFilter">
        <Row className="h-100">
          <Col>
            <Form.Select
              aria-label="Division filter"
              className={
                currentFilters.division
                  ? "h-100 division-select-active"
                  : "h-100 division-select-inactive"
              }
              key="division"
              value={currentFilters.division || "All divisions"}
              onChange={(e) =>
                handleChange(
                  e.target.value,
                  currentFilters,
                  setCurrentFilters,
                  "division"
                )
              }
            >
              <option value="">All divisions</option>
              {divisions.map((division) => {
                return (
                  <option
                    className="text-black"
                    key={division}
                    value={division}
                  >
                    {DIVISION_NAMES[division] || division}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
