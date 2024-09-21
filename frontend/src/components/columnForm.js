import React from "react";

const ColumnManager = ({ newColumnName, setNewColumnName, newColumnType, setNewColumnType, addColumn }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Column Name"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <select className="form-select" value={newColumnType} onChange={(e) => setNewColumnType(e.target.value)}>
          <option value="string">String</option>
          <option value="number">Number</option>
        </select>
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary" onClick={addColumn}>
          Add Column
        </button>
      </div>
    </div>
  );
};

export default ColumnManager;
