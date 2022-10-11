import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Footer(props) {
  return (
    <Container fluid>
      <Row className="mt-5 py-4 bg-primary text-white">
        <Col md={2}></Col>
        <Col xs={1}>
          <Image src="assets/coa_seal_transparent_white.png" alt="City of Austin seal" fluid />
        </Col>
        <Col xs="auto d-flex align-items-center">
          <h5>City of Austin Transportation Department</h5>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}
