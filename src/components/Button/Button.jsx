import React from "react";
import styles from './Button.module.css'; // Fix: Import styles

const Button = ({ label, type = "button", onClick, className, disabled = false }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className || ''}`} 
            onClick={onClick} // Fix: Corrected spelling
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
