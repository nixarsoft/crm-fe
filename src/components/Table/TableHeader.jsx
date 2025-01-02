import React from "react";
import styles from "./Table.module.css";

const TableHeader = ({ headers }) => {
  return (
    <tr>
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
