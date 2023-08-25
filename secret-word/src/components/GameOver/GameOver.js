import React from "react";

const GameOver = ({ retryGame }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retryGame}>Reiniciar Jogo</button>
    </div>
  );
};

export default GameOver;
