import { useEffect } from "react";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import ProjectListToggle from "./ProjectListToggle";
import FiltersList from "./FiltersList";

const STATUS_FILTERS = [
  { label: "Needs Scoping", key: "needs_scoping" },
  { label: "Backlog", key: "backlog" },
  { label: "In Progress", key: "in_progress" },
  { label: "Completed", key: "completed" },
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

export default function ProjectFilters({
  currentFilters,
  setCurrentFilters,
  showChartView,
  setShowChartView,
  workgroups,
}) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  const router = useRouter();

  useEffect(() => {
    router.replace(`/projects/${formatSearchPath(currentFilters)}`, undefined, {
      shallow: true,
    });
    // we can't put the router in the dep array: https://github.com/vercel/next.js/issues/18127
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilters]);

  return (
    <Row className="text-center">
      {isTabletOrMobile ? (
        <Col key="projectStatusFilter">
          <Row className="h-100 bg-light">
            <Col>
              <Form.Select
                className={
                  currentFilters.status
                    ? "workgroup-select-active form-select"
                    : "workgroup-select-inactive form-select"
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
                    <option key={projectStatus.key} value={projectStatus.label}>
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
      <Col key="workgroupFilter" md={6} lg="auto">
        <Row className="bg-light h-100">
          <Col>
            <Form.Select
              className={
                currentFilters.workgroup
                  ? "workgroup-select-active"
                  : "workgroup-select-inactive"
              }
              key="status"
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
            </Form.Select>
          </Col>
        </Row>
      </Col>
      <Col key="projectListToggle" md="auto">
        <Row className="h-100 bg-light">
          <ProjectListToggle
            showChartView={showChartView}
            setShowChartView={setShowChartView}
          />
        </Row>
      </Col>
    </Row>
  );
}
