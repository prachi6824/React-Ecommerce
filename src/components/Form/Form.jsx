import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";

const Form = ({ onSubmit, initialData }) => {
  const [product, setProduct] = useState(initialData || { name: "", price: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: "", price: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        required
      />

      <label>Price:</label>
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleChange}
        required
      />

      <Button label="Save" type="submit" />
    </form>
  );
};

export default Form;
