import React from "react";

const RowManager = ({ addRow }) => {
  return (
    <div className="mb-3">
      <button className="btn btn-success" onClick={addRow}>
        Add Row
      </button>
    </div>
  );
};

export default RowManager;
