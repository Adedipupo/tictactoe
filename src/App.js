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
          <div className="board-row">
            <Square value={3} onClick={null} />
            <Square value={4} onClick={null} />
            <Square value={5} onClick={null} />
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
