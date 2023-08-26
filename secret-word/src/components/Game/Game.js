import React from "react";
import "./Game.css";
import { useState, useRef } from "react";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    //função responsável por manter o foco no input ao realizar cada submissão
    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {/* lógica que conforme acerto gera o quadrado com a letra ou quadrado em branco */}
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            required
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainers">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Game;
