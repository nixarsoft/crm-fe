import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./Table.module.css";

const Table = ({ headers, data, onOpen, onDelete }) => {
  return (
    <table className={styles.table}>
      <thead>
        <TableHeader headers={headers} />
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            onOpen={onOpen}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
