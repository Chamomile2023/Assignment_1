import React from "react";
import "./Button.scss";
function Button({ children, className, onClick, type }) {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
