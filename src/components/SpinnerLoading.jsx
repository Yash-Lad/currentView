import React from "react";
import Spinner from "react-bootstrap/Spinner";

// SpinnerLoading - Loading indicator component
export default function SpinnerLoading() {
  return (
    <div className="spinner-container">
      <Spinner
        animation="border"
        variant="primary"
        role="status"
        className="spinner-large"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
