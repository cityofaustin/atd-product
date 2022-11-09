import React from "react";
import Col from "react-bootstrap/Col";
import { FaChartArea } from "react-icons/fa";
import { FaList } from "react-icons/fa";

export default function ProjectListToggle(props) {
  const { showChartView, setShowChartView } = props;
  return (
    <>
      <Col
        role="button"
        className={
          showChartView
            ? "rounded-start border-end-0 chart-toggle-disabled"
            : "rounded-start chart-toggle-active"
        }
        onClick={() => setShowChartView(false)}
      >
        <p className="text-center my-auto p-2">
          <FaList style={{ verticalAlign: "middle" }} /> List
        </p>
      </Col>
      <Col
        role="button"
        className={
          showChartView
            ? "rounded-end chart-toggle-active"
            : "rounded-end border-start-0 chart-toggle-disabled"
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
