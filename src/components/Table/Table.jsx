import React from "react";
import styles from "./Table.module.css";
import Button from "../Button/Button";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Button label="Edit" onClick={() => onEdit(product)} />
                <Button label="Delete" onClick={() => onDelete(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
