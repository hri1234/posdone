import React from "react";
// npm
import { Spinner } from "react-bootstrap";

const CustomSpinner = () => {
  return (
    <div className="loading-overlay">
      <Spinner animation="border" role="status" variant="primary" size="xl">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default CustomSpinner;
