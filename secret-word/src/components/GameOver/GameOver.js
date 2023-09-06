import React from "react";

const GameOver = ({ retryGame,score }) => {
  return (
    <div>
      <h1>Fim de Jogo !</h1>
      <h2>
        A sua pontuação foi : <span>{score}</span>
      </h2>
      <button onClick={retryGame}>Reiniciar Jogo</button>
    </div>
  );
};

export default GameOver;
