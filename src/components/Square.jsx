import React from "react";
import "./style.css";

const Square = ({ value, onClick }) => {
  return (
    
    <div className="btn_click" onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
