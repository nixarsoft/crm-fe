import React from "react";
import Button from "../Button/Button";
import styles from "./Table.module.css";

const TableRow = ({ row, onOpen, onDelete }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.platform}</td>
      <td>{row.identifier}</td>
      <td className={styles.agent}>{row.agent}</td>
      <td>{row.status}</td>
      <td>{row.createdAt}</td>
      <td>
        <Button
          label="Open"
          styleType={"primary"}
          onClick={() => onOpen(row.id)}
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
