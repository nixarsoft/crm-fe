import React from "react";

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
