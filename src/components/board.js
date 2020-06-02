import React from "react";
import Square from "./square";

const Board = ({ squares, onClick }) => (
  <div>
    <h1>React Tic Tac Toe - With Hooks</h1>
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;
