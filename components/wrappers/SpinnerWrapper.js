import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function SpinnerWrapper(props) {
  return (
    <>
      <Spinner
        variant="secondary"
        as="span"
        animation="border"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </>
  );
}
