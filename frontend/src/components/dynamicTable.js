import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnManager from "./columnForm";
import RowManager from "./rowForm";
import DataTable from "./table";
import Filter from "./filterForm";
import Sort from "./sortForm";

const DynamicTable = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [newColumnName, setNewColumnName] = useState("");
  const [newColumnType, setNewColumnType] = useState("string");
  const [filter, setFilter] = useState({ column: "", value: "" });
  const [sortCriteria, setSortCriteria] = useState({ column: "", condition: "" });

  const addColumn = () => {
    if (newColumnName.trim()) {
      setColumns([...columns, { name: newColumnName, type: newColumnType }]);
      setNewColumnName("");
      setNewColumnType("string");
    }
  };

  const addRow = () => {
    const newRow = columns.reduce((row, col) => {
      row[col.name] = col.type === "string" ? [""] : [0];
      return row;
    }, {});
    setRows([...rows, newRow]);
  };

  const updateCell = (rowIndex, colName, value) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colName] = value.split(",");
    setRows(updatedRows);
  };

  const deleteRow = (rowIndex) => {
    const updatedRows = rows.filter((_, index) => index !== rowIndex);
    setRows(updatedRows);
  };

  const filteredRows = rows.filter((row) => {
    if (!filter.column) return true;
    return row[filter.column].includes(filter.value);
  });

  const sortedRows = [...filteredRows].sort((a, b) => {
    if (!sortCriteria.column || columns.find((col) => col.name === sortCriteria.column).type !== "number") {
      return 0;
    }

    const aValue = a[sortCriteria.column][0];
    const bValue = b[sortCriteria.column][0];

    if (sortCriteria.condition === "greaterThanOrEqual") {
      return aValue >= bValue ? -1 : 1;
    } else if (sortCriteria.condition === "lessThanOrEqual") {
      return aValue <= bValue ? -1 : 1;
    }
    return 0;
  });

  return (
    <div className="container mt-4">
      <ColumnManager
        newColumnName={newColumnName}
        setNewColumnName={setNewColumnName}
        newColumnType={newColumnType}
        setNewColumnType={setNewColumnType}
        addColumn={addColumn}
      />
      <RowManager addRow={addRow} />
      <DataTable columns={columns} rows={sortedRows} updateCell={updateCell} deleteRow={deleteRow} />
      <Filter columns={columns} filter={filter} setFilter={setFilter} />
      <Sort columns={columns} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
    </div>
  );
};

export default DynamicTable;
