import React, { useState } from "react";

function Game() {
  return (
  <div>

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
