import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import SalesChart from "./SalesChart";
import { useSalesContext } from "../../context/SalesContext";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { salesData, loading } = useSalesContext(); // Using Context
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar onToggle={setIsSidebarOpen} />
      <div className={`${styles.mainContent} ${isSidebarOpen ? "" : styles.collapsed}`}>
        <Navbar />
        <h1 className={styles.heading}>Dashboard</h1>

        {/* Dashboard Cards */}
        <div className={styles.cardsContainer}>
          <Card title="Total Products" value={products.length} className={styles.cards1} />
          <Card title="Total Sales" value={`Rs.${salesData?.totalSales || 0}`} className={styles.cards2} />
          <Card title="Active Orders" value={salesData?.activeOrders || 0} className={styles.cards3}/>
          <Card title="Low Stock Products" value={salesData?.lowStockProducts || 0} className={styles.cards4}/>
        </div>

        {!loading ? <SalesChart data={salesData} /> : <p>Loading chart...</p>}
      </div>
    </div>
  );
};

export default Dashboard;
