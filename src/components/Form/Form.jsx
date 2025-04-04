import React, { useState } from "react";
import styles from "./DynamicForm.module.css";
import Field from "../Field/Field";
import Button from "../Button/Button";

const Form = ({ fields, onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = initialData[field.name] || (field.type === "checkbox" ? false : "");
      return acc;
    }, {})
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Field key={field.name} {...field} value={formData[field.name]} onChange={handleChange} />
      ))}
      <Button label="Save" type="submit" />
    </form>
  );
};

export default Form;
