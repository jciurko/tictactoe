import React from "react";
import "./square.css";

const Square = ({ value, onClick }) => {
  const square = value ? `squares ${value}` : `squares`;
  return (
    <button className={square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
