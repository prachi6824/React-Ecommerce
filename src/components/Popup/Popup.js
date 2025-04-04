import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ children, onClose }) => (
  <div className={styles.overlay} onClick={onClose}>
    <div 
      className={styles.popup} 
      onClick={(e) => e.stopPropagation()} 
    >
      <button onClick={onClose} className={styles.closeBtn}>X</button>
      {children}
    </div>
  </div>
);

export default Popup;
