import React from "react";
import styles from "./TableHeader.module.css";

const TableHeader = ({ columns }) => {
  return (
    <thead className={styles.tableHeader}> 
      <tr>
        {columns.map((col) => (
          <th key={col.key}>{col.title}</th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
