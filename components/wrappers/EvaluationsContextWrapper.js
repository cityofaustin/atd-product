import React from "react";
import EvaluationsContext from "../../contexts/EvaluationsContext";
import IssuesContext from "../../contexts/IssuesContext";

function getKnackHeaders(appId) {
  return {
    "X-Knack-Application-Id": appId,
    "X-Knack-REST-API-KEY": "knack",
  };
}

function handleScores(scores) {
  return scores.map((score) => {
    return {
      name: score.field_538,
      number: score.field_492,
      effort: score.field_536,
      value: score.field_537,
      dts_builder_hours: score.field_493,
      dts_product_hours: score.field_494,
      customer_effort_to_implement: score.field_495,
      monetary_costs: score.field_496,
      solves_multiple_workgroups_needs: score.field_497,
      of_users_impacted: score.field_498,
      efficiency_gains: score.field_499,
      sd_23_alignment: score.field_500,
      asmp_alignment: score.field_501,
      confidence: score.field_512,
    };
  });
}

export function EvaluationsContextWrapper(props) {
  const context = React.useContext(IssuesContext);
  const issues = context.issues;
  const [data, setData] = React.useState([]);
  const [scores, setScores] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { url, appId, children } = props;

  React.useEffect(() => {
    fetch(url, { headers: getKnackHeaders(appId) })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.records);
        },
        (error) => {
          setIsLoaded(true);
          setError(error.toString());
        }
      );
  }, [url, appId]);

  React.useEffect(() => {
    const allScores = handleScores(data);
    const scoresWithIssues = allScores.filter((score) => {
      const number = score.number;
      // exclude issues that do not have a score
      const matchesIssues = issues.filter(
        (issue) => parseInt(issue.number) === number
      );
      return matchesIssues.length > 0;
    });
    setScores(scoresWithIssues);
  }, [issues, data]);

  return (
    <EvaluationsContext.Provider
      value={{ scores: scores, error: error, isLoaded: isLoaded }}
    >
      {children}
    </EvaluationsContext.Provider>
  );
}
