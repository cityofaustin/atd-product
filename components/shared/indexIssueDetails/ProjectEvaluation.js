import { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpinnerWrapper from "../../wrappers/SpinnerWrapper";
import EvaluationsContext from "../../../contexts/EvaluationsContext";
import ProjectScoreChart from "../ProjectScoreChart";
import ProjectEvaluationTable from "./ProjectEvaluationTable";

export default function ProjectEvaluation({ project }) {
  const { scores, isLoaded, error } = useContext(EvaluationsContext);
  // Derive project score during render (not in an effect)
  // https://react.dev/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state
  const projectScore = project
    ? (scores.find((score) => score.number === parseInt(project.number)) ??
      null)
    : null;

  if (error) {
    return <p>{error}</p>;
  } else if ((!isLoaded && !error) || !scores || scores.length === 0) {
    return <SpinnerWrapper />;
  }
  if (project && !projectScore) {
    return (
      <Row>
        <Col>
          <p>This project has not been scored.</p>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row>
        <Col>
          <Row>
            <ProjectEvaluationTable
              project={project}
              projectScore={projectScore}
            />
          </Row>
        </Col>
        <Col md={8} lg={6}>
          <ProjectScoreChart
            project={project}
            scores={scores}
            projectScore={projectScore}
          />
        </Col>
      </Row>
    </>
  );
}
