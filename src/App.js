import React, { useState } from "react";



function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function renderSquare(i) {
  return (
    <Square
      value={i}
      onClick={null}
    />
  );
}

function Game() {
  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            
            
          </div>
          <div className="board-row">
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
}



function App() {
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
