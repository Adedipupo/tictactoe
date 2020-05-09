import React, { useState } from "react";

function Game() {
  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            <Square value={0} onClick={null} />
            <Square value={1} onClick={null} />
            <Square value={2} onClick={null} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  return (
    <div>
      <Square />
    </div>
  );
}

export default App;
