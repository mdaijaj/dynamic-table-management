import React from "react";

const DataTable = ({ columns, rows, updateCell, deleteRow }) => {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          {columns.map((col) => (
            <th key={col.name}>{col.name}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col.name}>
                <input
                  type={col.type === "number" ? "number" : "text"}
                  className="form-control"
                  value={row[col.name]}
                  onChange={(e) => updateCell(rowIndex, col.name, e.target.value)}
                />
              </td>
            ))}
            <td>
              <i
                className="bi bi-trash text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => deleteRow(rowIndex)}
                title="Delete Row"
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
