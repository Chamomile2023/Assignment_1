import React from "react";
import "./ButtonCircle.scss";

function ButtonCircle({ children, className, onClick }) {
  return (
    <button className={`buttonCircle ${className}`} onClick={onClick}>
      {" "}
      {children}
    </button>
  );
}

export default ButtonCircle;
