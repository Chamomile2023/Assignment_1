import React from "react";
import "./Button.scss";
function Button({ children, className, onClick }) {
    return <button className={`button ${className}`} onClick={onClick}>{children}</button>;
}
export default Button;
