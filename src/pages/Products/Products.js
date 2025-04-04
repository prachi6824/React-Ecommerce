import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DynamicTable from "../../components/Table/DynamicTable";
import DynamicForm from "../../components/Form/DynamicForm";
import Popup from "../../components/Popup/Popup";
import { fetchProducts } from "../../api/products";
import styles from "./Products.module.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
    }
  }, [products]);
    const handleAddProduct = () => {
      setShowForm(true);
    };

    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts();
        setProducts(response.data);
    
        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error loading products:", error);
      }
      setLoading(false);
    };

    const filtersConfig = [
      { name: "title", label: "Search Title" },
      {
        name: "category",
        label: "Search Category",
        type: "select",
        options: categories, 
      }
    ];
  const columns = [
    { key: "id", title: "ID" },
    { key: "title", title: "Title" },
    { key: "category", title: "Category" },
    { key: "price", title: "Price" },
    { key: "stock", title: "Stock" },
    { key: "rating", title: "Rating" }
  ];
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
    loadProducts();
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setSelectedProduct(null);
    loadProducts(); 
  };


  return (
    <div className={styles.container}>
      <Sidebar onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`${styles.mainContent} ${isSidebarOpen ? styles.open : styles.collapsed}`}>
        <Navbar />
        <div className={styles.content}>
          <h1>Products Management</h1>
          {showForm && (
            <Popup onClose={() => setShowForm(false)}>
              <DynamicForm selectedProduct={selectedProduct} onFormSubmit={handleFormSubmit} />
            </Popup>
          )}
      {loading ? ( 
        <p className={styles.loading}>Loading...</p>
      ) : (
          <DynamicTable 
            products={products} 
            onEdit={handleEdit} 
            filtersConfig={filtersConfig} 
            columns={columns}  
            buttonLabel="Add Product" 
            buttonClass={styles.addProductButton} 
            onButtonClick={handleAddProduct}
          />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
