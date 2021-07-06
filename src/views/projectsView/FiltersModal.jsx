import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import FiltersList from "./FiltersList";

const FiltersModal = ({
  show,
  handleClose,
  currentFilters,
  handleChange,
  setCurrentFilters,
  statusFilters,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Project Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FiltersList
          currentFilters={currentFilters}
          handleChange={handleChange}
          setCurrentFilters={setCurrentFilters}
          statusFilters={statusFilters}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FiltersModal;
