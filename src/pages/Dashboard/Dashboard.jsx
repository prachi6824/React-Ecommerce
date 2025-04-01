import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  
    setProductCount(storedProducts.length);
  
    
    const total = storedProducts.reduce((sum, product) => {
      const price = parseFloat(product.price.replace(/[^\d.]/g, "")); 
      return sum + (isNaN(price) ? 0 : price); 
    }, 0);
  
    setTotalSales(total.toFixed(2)); 
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar onToggle={setIsSidebarOpen} />
      <div className={`${styles.mainContent} ${isSidebarOpen ? "" : styles.collapsed}`}>
        <Navbar />
        <h1 className={styles.heading}>Dashboard</h1>

        {/* Dashboard Cards */}
        <div className={styles.cardsContainer}>
          <Card title="Total Products" value={productCount} className={styles.cards1} />
          <Card title="Total Sales" value={`$${totalSales}`} className={styles.cards2} />
          <Card title="Active Orders" value="320" className={styles.cards3} />
          <Card title="New Customers" value="87" className={styles.cards4} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
