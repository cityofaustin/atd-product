import React from "react";
import Col from "react-bootstrap/Col";
import { FaChartArea } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

export default function ProjectListToggle(props) {
  const { showChartView, setShowChartView } = props;
  return (
    <>
      <Col
        md="auto"
        role="button"
        className={
          showChartView ? "chart-toggle-disabled" : "chart-toggle-active"
        }
        onClick={() => setShowChartView(false)}
      >
        <p className="text-center my-auto p-2">
          <FaRegListAlt style={{ verticalAlign: "middle" }} /> List
        </p>
      </Col>
      <Col
        md="auto"
        role="button"
        className={
          showChartView ? "chart-toggle-active" : "chart-toggle-disabled"
        }
        onClick={() => setShowChartView(true)}
      >
        <p className="text-center my-auto p-2">
          <FaChartArea style={{ verticalAlign: "middle" }} /> Chart
        </p>
      </Col>
    </>
  );
}
