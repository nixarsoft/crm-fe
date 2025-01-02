import React from "react";
import Button from "../Button/Button";

const TableRow = ({ row, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.platform}</td>
      <td>{row.identifier}</td>
      <td>{row.status}</td>
      <td>{row.createdAt}</td>
      <td>
        <Button
          label="Edit"
          styleType={"primary"}
          onClick={() => onEdit(row.id)}
        />
        <Button
          label="Del"
          styleType="danger"
          onClick={() => onDelete(row.id)}
        />
      </td>
    </tr>
  );
};

export default TableRow;
