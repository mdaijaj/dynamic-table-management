import React from "react";

const Filter = ({ columns, filter, setFilter }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-3">
        <h5>Filter Rows</h5>
        <select className="form-select" onChange={(e) => setFilter({ ...filter, column: e.target.value })}>
          <option value="">Select Column</option>
          {columns.map((col) => (
            <option key={col.name} value={col.name}>
              {col.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter Value"
          onChange={(e) => setFilter({ ...filter, value: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Filter;
