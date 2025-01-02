import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./Table.module.css";

const Table = ({ headers, data, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <TableHeader headers={headers} />
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
