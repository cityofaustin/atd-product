import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpinnerWrapper from "../../wrappers/SpinnerWrapper";
import EvaluationsContext from "../../../contexts/EvaluationsContext";
import ProjectScoreChart from "../ProjectScoreChart";
import ProjectEvaluationTable from "./ProjectEvaluationTable";

export default function ProjectEvaluation({ project }) {
  const context = React.useContext(EvaluationsContext);
  const scores = context.scores;
  const [projectScore, setProjectScore] = React.useState(null);
  const isLoaded = context.isLoaded;
  const error = context.error;

  React.useEffect(() => {
    if (project) {
      const matchesThisProjectScores = scores.filter(
        (score) => score.number === parseInt(project.number)
      );
      const thisProjectScore =
        matchesThisProjectScores.length > 0
          ? matchesThisProjectScores[0]
          : null;
      setProjectScore(thisProjectScore);
    }
  }, [scores, project]);

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
