import React from "react";
import styles from "./StartScreen.css";

const StartScreen = ({ StartGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={StartGame}>Começar jogo</button>
    </div>
  );
};

export default StartScreen;
