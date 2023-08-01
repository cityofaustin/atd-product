import React from "react";
import Col from "react-bootstrap/Col";
import { FaChartArea } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { useRouter } from "next/router";

export default function ProjectListToggle(props) {
  const { showChartView, setShowChartView } = props;
  const router = useRouter();

  const switchToChartView = () => {
    if (!showChartView) {
      setShowChartView(true);
      // Add the view=chart parameter to the URL
      router.push(
        { query: { ...router.query, view: "chart" } },
        undefined,
        { shallow: true }
      );
    }
  };

  const switchToListView = () => {
    if (showChartView) {
      setShowChartView(false);
      // Remove the view=chart parameter from the URL
      const { view, ...queryWithoutView } = router.query;
      router.push({ query: queryWithoutView }, undefined, { shallow: true });
    }
  };

  return (
    <>
      <Col
        role="button"
        className={
          showChartView
            ? "rounded-start border-end-0 chart-toggle-inactive"
            : "rounded-start chart-toggle-active"
        }
        onClick={switchToListView}
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
            : "rounded-end border-start-0 chart-toggle-inactive"
        }
        onClick={switchToChartView}
      >
        <p className="text-center my-auto p-2">
          <FaChartArea style={{ verticalAlign: "middle" }} /> Chart
        </p>
      </Col>
    </>
  );
}


