import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); // Notify parent (Dashboard)
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? "" : styles.closed}`}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        {isOpen ? "◀" : "▶"}
      </button>
      <h2>{isOpen ? "Menu" : ""}</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
