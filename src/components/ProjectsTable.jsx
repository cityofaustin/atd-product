import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectsTable(props) {
  return (
    <>
      <Table size="sm" responsive="md">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Title</th>
            <th>Workgroup(s)</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.projects.map((project) => {
            return (
              <tr>
                {/* <td>{project.number}</td> */}
                <td>
                  <>
                    <Row>
                      <Col>
                        <h5 className="text-primary">{project.title}</h5>
                      </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                          <h6 className="mb-0 text-muted">Type</h6>
                          {project.type}
                        </Col>
                        <Col>
                          <h6 className="mb-0 text-muted">Workgroup(s)</h6>
                          {project.workgroups && project.workgroups.join(", ")}
                        </Col>
                        <Col>
                          <h6 className="mb-0 text-muted">Status</h6>
                          {project.pipeline}
                        </Col>
                      </Row> */}
                  </>
                </td>
                <td>{project.workgroups && project.workgroups.join(", ")}</td>
                <td>{project.type}</td>
                <td>{project.pipeline}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
