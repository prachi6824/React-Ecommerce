import React, { useState } from "react";
import { addProduct, updateProduct } from "../../api/products";
import InputField from "./InputField";
import Button from "../Button/Button"; // Use reusable button
import styles from "./DynamicForm.module.css";

const DynamicForm = ({ selectedProduct, onFormSubmit }) => {
    const [formData, setFormData] = useState(
        selectedProduct || { title: "", category: "", price: "", stock: "", rating: "" }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        if (selectedProduct) {
            await updateProduct(selectedProduct.id, formData);
        } else {
            await addProduct(formData);
        }
        onFormSubmit(); // Notify parent (Products.js) to reload the table
        } catch (error) {
        console.error("Error saving product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
        <InputField label="Title" type="text" name="title" value={formData.title} onChange={handleChange} required />
        <InputField label="Category" type="text" name="category" value={formData.category} onChange={handleChange} required />
        <InputField label="Price" type="number" name="price" value={formData.price} onChange={handleChange} required />
        <InputField label="Stock" type="number" name="stock" value={formData.stock} onChange={handleChange} required />
        <InputField label="Rating" type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} required />
        
        <Button 
            type="submit" 
            label={selectedProduct ? "Update Product" : "Add Product"} 
        />
        </form>
    );
};

export default DynamicForm;
