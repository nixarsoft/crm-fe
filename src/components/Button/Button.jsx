import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, styleType }) => {
  return (
    <button
      className={`${styles.button} ${styles[styleType]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
