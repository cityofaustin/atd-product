import React from "react";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  ScatterChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Scatter,
  ReferenceLine,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const CHART_STYLES = {
  referenceDot: {
    fill: "#e5e0e0",
    shape: "circle",
  },
  allProjects: {
    fill: "#00bfa5",
    shape: "circle",
  },
  thisProject: {
    fill: "#0D3E79",
    shape: "star",
  },
};

function getLegendPayload(projectScore) {
  let legendPayload = [
    {
      value: "This project",
      type: CHART_STYLES.thisProject.shape,
      color: CHART_STYLES.thisProject.fill,
    },
    {
      value: "All projects",
      type: "circle",
      color: CHART_STYLES.allProjects.fill,
    },
    {
      value: "Confidence",
      type: "circle",
      color: CHART_STYLES.referenceDot.fill,
    },
  ];
  return projectScore ? legendPayload : legendPayload.slice(1);
}

function handleConfidenceScore(score) {
  const SCALE = {
    // sets radius of confidence circles
    Low: 15,
    Medium: 10,
    High: 5,
  };
  return SCALE[score] ? SCALE[score] : SCALE["medium"];
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <Row>
        <Col
          className="border border-light rounded"
          style={{ backgroundColor: "rgba(255,255,255,.8)" }}
        >
          <p
            key="title"
            className="font-weight-bold small m-0 p-0"
          >{`${payload[0].payload.name}`}</p>
          <p key="value" className="small m-0 p-0">
            <span className="font-weight-bold">Value: </span>
            {`${payload[0].payload.value}`}
          </p>
          <p key="effort" className="small m-0 p-0">
            <span className="font-weight-bold">Effort: </span>
            {`${payload[0].payload.effort}`}
          </p>
          <p key="confidence" className="small m-0 p-0">
            <span className="font-weight-bold">Confidence: </span>
            {`${payload[0].payload.confidence}`}
          </p>
        </Col>
      </Row>
    );
  }
  return null;
};

const scatterClickHandler = (e, history) => {
  // Redirects user to project details on click
  history.push(`/projects/${e.number}`);
};

export default function ProjectScoreChart(props) {
  const { projectScore, scores } = props;
  const history = useRouter();
  return (
    <ResponsiveContainer width={"100%"} height="100%" minHeight={400}>
      <ScatterChart>
        <XAxis
          stroke="gray"
          type="number"
          tickCount={1}
          label="Effort"
          dataKey="effort"
          name="Effort"
          domain={[0, 20]}
        />
        <YAxis
          stroke="gray"
          type="number"
          tickCount={1}
          label="Value"
          dataKey="value"
          name="Value"
          domain={[0, 25]}
        />
        <ReferenceLine
          x={10}
          isFront
          stroke="gray"
          strokeDasharray="3 3"
        ></ReferenceLine>
        <ReferenceLine y={12.5} isFront stroke="gray" strokeDasharray="3 3" />
        {/* Uncomment to turn on fun quadrant labels */}
        {/* <ReferenceArea
          x1={0.5}
          x2={19}
          y1={1}
          y2={24}
          stroke="none"
          fill="none"
        >
          <Label
            key="bb"
            style={{ fill: "gray", fontStyle: "italic" }}
            value="Big bets"
            position="insideTopRight"
          />
          <Label
            key="doit"
            style={{ fill: "gray", fontStyle: "italic" }}
            value="Do it!"
            offset={0}
            position="insideTopLeft"
          />
          <Label
            key="incr"
            style={{ fill: "gray", fontStyle: "italic" }}
            value="Incremental improvement"
            offset={0}
            position="insideBottomLeft"
          />
          <Label
            key="mp"
            style={{ fill: "gray", fontStyle: "italic" }}
            value="Money pit"
            offset={0}
            position="insideBottomRight"
          />
        </ReferenceArea> */}
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ strokeDasharray: "3 3" }}
        />
        {scores.map((score) => {
          return (
            <ReferenceDot
              key={score.number}
              x={score.effort}
              y={score.value}
              r={handleConfidenceScore(score.confidence)}
              fill={CHART_STYLES.referenceDot.fill}
              stroke="none"
            />
          );
        })}
        <Scatter
          onClick={(e) => scatterClickHandler(e, history)}
          name="All projects"
          data={scores}
          fill={CHART_STYLES.allProjects.fill}
          style={{ cursor: "pointer" }}
        />
        {projectScore && (
          <Scatter
            name="This project"
            data={[projectScore]}
            fill={CHART_STYLES.thisProject.fill}
            shape={CHART_STYLES.thisProject.shape}
            legendType={CHART_STYLES.thisProject.shape}
          />
        )}
        <Legend
          align="center"
          verticalAlign="bottom"
          iconSize={12}
          payload={getLegendPayload(projectScore)}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
