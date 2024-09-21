import React from "react";

const Sort = ({ columns, sortCriteria, setSortCriteria }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-3">
        <h5>Sort Rows</h5>
        <select className="form-select" onChange={(e) => setSortCriteria({ ...sortCriteria, column: e.target.value })}>
          <option value="">Select Column</option>
          {columns
            .filter((col) => col.type === "number")
            .map((col) => (
              <option key={col.name} value={col.name}>
                {col.name}
              </option>
            ))}
        </select>
      </div>
      <div className="col-md-3">
        <select className="form-select" onChange={(e) => setSortCriteria({ ...sortCriteria, condition: e.target.value })}>
          <option value="">Select Condition</option>
          <option value="greaterThanOrEqual">Greater than or Equal</option>
          <option value="lessThanOrEqual">Less than or Equal</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
