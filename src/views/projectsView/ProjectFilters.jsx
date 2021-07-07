import React from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import ProjectListToggle from "./ProjectListToggle";
import FiltersList from "./FiltersList";

const STATUS_FILTERS = [
  { label: "Needs Scoping", key: "Needs Scoping" },
  { label: "Backlog", key: "Backlog" },
  { label: "In Progress", key: "In Progress" },
  { label: "Completed", key: "Completed" },
];

const WORKGROUP_NAMES = {
  AMD: "Arterial Management",
  VZ: "Vision Zero",
  SMB: "Signs & Markings",
  CPO: "Capital Planning",
  DTS: "Data & Tech Services",
  Finance: "Finance",
  HR: "Human Resources",
  OOD: "Office of the Director",
  OSE: "Office of Special Events",
  PE: "Parking Enterprise",
  PIO: "Parking Information Office",
  PWD: "Public Works Dept",
  ROW: "Right of Way",
  SDD: "Systems Development",
  SM: "Smart Mobility",
  TDSD: "Transportation Development Services",
  TED: "Transportation Engineering",
  ATSD: "Active Transportation & Street Design",
};

function handleChange(value, currentFilters, setCurrentFilters, filterKey) {
  let mutableFilters = { ...currentFilters };
  mutableFilters[filterKey] = value || null;
  setCurrentFilters(mutableFilters);
}

function formatSearchPath(currentFilters) {
  // format the search path to match currently selected filters
  const searchKwargs = Object.keys(currentFilters)
    .filter((key) => currentFilters[key])
    .map((key) => {
      return `${key}=${currentFilters[key]}`;
    })
    .join("&");
  return `?${searchKwargs}`;
}

export default function ProjectFilters(props) {
  const history = useHistory();
  const {
    currentFilters,
    setCurrentFilters,
    showChartView,
    setShowChartView,
    workgroups,
  } = props;

  React.useEffect(() => {
    history.replace({
      pathname: history.location.pathname,
      search: formatSearchPath(currentFilters),
    });
  }, [currentFilters, history]);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });

  return (
    <Row className="text-center">
      {isTabletOrMobile ? (
        <Col key="projectStatusFilter">
          <Row className={`bg-light h-100 `}>
            <Col>
              <Form.Control
                className={
                  currentFilters.status
                    ? "workgroup-select-active"
                    : "workgroup-select-inactive"
                }
                key="status"
                as="select"
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
                    <option key={projectStatus.key} value={projectStatus.label}>
                      {projectStatus.label}
                    </option>
                  );
                })}
              </Form.Control>
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
      <Col key="workgroupFilter" md={6} lg="auto">
        <Row
          className={`bg-light h-100  ${
            currentFilters.workgroup
              ? "workgroup-select-row-active"
              : "workgroup-select-row-inactive"
          } `}
        >
          <Col>
            <Form.Control
              className={
                currentFilters.workgroup
                  ? "workgroup-select-active"
                  : "workgroup-select-inactive"
              }
              key="status"
              as="select"
              value={currentFilters.workgroup || "Any workgroup"}
              onChange={(e) =>
                handleChange(
                  e.target.value,
                  currentFilters,
                  setCurrentFilters,
                  "workgroup"
                )
              }
            >
              <option value="">Any workgroup</option>
              {workgroups.map((workgroup) => {
                return (
                  <option key={workgroup} value={workgroup}>
                    {WORKGROUP_NAMES[workgroup] || workgroup}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
        </Row>
      </Col>
      <Col key="projectListToggle" className="bg-light" md="auto">
        <Row className="h-100">
          <ProjectListToggle
            showChartView={showChartView}
            setShowChartView={setShowChartView}
          />
        </Row>
      </Col>
    </Row>
  );
}
