import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, type, name, value, onChange, required, options }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={styles.input}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default InputField;
