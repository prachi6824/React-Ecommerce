import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import ProductForm from "../../components/Form/Form";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";

const Products = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAdd = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleSubmit = (product) => {
    if (editingProduct) {
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? { ...product, id: p.id } : p))
      );
    } else {
      setProducts([...products, { ...product, id: products.length + 1 }]);
    }
    setShowForm(false);
  };

  return (
    <div className={styles.productsContainer}>
        <Sidebar onToggle={setIsSidebarOpen} />
        <div className={`${styles.mainContent} ${isSidebarOpen ? "" : styles.collapsed}`}>
            <Navbar />
            <h1 className={styles.heading}>Products</h1>
            <Button label="Add Product" onClick={handleAdd} />

            {showForm && (
            <Popup onClose={() => setShowForm(false)}>
                <ProductForm onSubmit={handleSubmit} initialData={editingProduct} />
            </Popup>
            )}

            <Table data={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    </div>
  );
};

export default Products;
