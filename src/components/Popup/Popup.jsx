import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ children, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;