import React from "react";
import Table from "react-bootstrap/Table";

export default function ProjectEvaluationTable(props) {
  const score = props.projectScore;
  return (
    <>
      <Table size="sm">
        <tbody>
          <tr className="text-muted">
            <td>Builder Hours</td>
            <td>{score.dts_builder_hours}</td>
          </tr>
          <tr className="text-muted">
            <td>Product Hours</td>
            <td>{score.dts_product_hours}</td>
          </tr>
          <tr className="text-muted">
            <td>Customer Effort</td>
            <td>{score.customer_effort_to_implement}</td>
          </tr>
          <tr className="text-muted">
            <td>Cost</td>
            <td>{score.monetary_costs}</td>
          </tr>
          <tr className="bg-primary text-white">
            <td>Effort</td>
            <td>{score.effort}</td>
          </tr>
        </tbody>
      </Table>
      <Table size="sm">
        <tbody>
          <tr>
            <td>Multiple Workgroups</td>
            <td>{score.solves_multiple_workgroups_needs}</td>
          </tr>
          <tr>
            <td>Users Impacted</td>
            <td>{score.of_users_impacted}</td>
          </tr>
          <tr>
            <td>Efficiency Gains</td>
            <td>{score.efficiency_gains}</td>
          </tr>
          <tr>
            <td>SD23 Alignment</td>
            <td>{score.sd_23_alignment}</td>
          </tr>
          <tr>
            <td>ASMP Alignment</td>
            <td>{score.asmp_alignment}</td>
          </tr>
          <tr className="bg-primary text-white">
            <td>Value</td>
            <td>{score.value}</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <tr className="bg-primary text-white">
            <td>Confidence</td>
            <td></td>
            <td>{score.confidence}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
