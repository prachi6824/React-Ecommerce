import React from "react";
import styles from "./TableBody.module.css";
import Button from "../../components/Button/Button";

const TableBody = ({ data, onEdit, onDelete }) => {
  return (
    <tbody className={styles.tableBody}>
      {data.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
          <td>
            <Button label="Edit" onClick={() => onEdit(item)} className={styles.editButton} />
            <Button label="Delete" onClick={() => onDelete(item.id)} className={styles.deleteButton} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
