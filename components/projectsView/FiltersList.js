import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FiltersList = ({
  statusFilters,
  currentFilters,
  handleChange,
  setCurrentFilters,
}) => {
  return statusFilters.map((statusFilter) => {
    const active =
      currentFilters.status && currentFilters.status.includes(statusFilter.key);

    const tabClass = active ? "status-filter-active" : "status-filter-inactive";
    return (
      <Col
        md={3}
        lg="auto"
        role="button"
        className={`align-items-stretch ${tabClass} mb-3 px-3 me-auto`}
        key={statusFilter.key}
        onClick={() => {
          handleChange(
            statusFilter.key,
            currentFilters,
            setCurrentFilters,
            "status"
          );
        }}
      >
        <Row className="h-100">
          <Col className="align-self-center">{statusFilter.label}</Col>
        </Row>
      </Col>
    );
  });
};

export default FiltersList;
