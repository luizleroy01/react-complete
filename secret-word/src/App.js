import logo from "./logo.svg";

//Css
import "./App.css";

//Components
import StartScreen from "./components/StartScreen/StartScreen";

//React
import { useCallback, useEffect, useState } from "react";

//data
import { WordList } from "./data/words";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(WordList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickAndCategory = () => {
    //pick a random category of words
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word in category
    const word =
      words[category][Math.floor(Math.random() * Object.keys(category).length)];

    return { word, category };
  };
  console.log(words);

  //start secret word game
  const StartGame = () => {
    const { word, category } = pickAndCategory();

    let wordletters = "";
    if (typeof word === "string") {
      wordletters = word.split("");
    }

    wordletters = wordletters.map((l) => l.toLowerCase());

    //set states of game
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordletters);
    setGameStage(stages[1].name);
  };

  //process letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    //check if the letter is already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //push guessed letters or remove a chance
    if (letters.includes(normalizedLetter)) {
      //right letter
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      //wrong letter
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
    console.log(guessedLetters);
    console.log(wrongLetters);
  };
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //restarts the game
  const retryGame = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage == "start" && <StartScreen StartGame={StartGame} />}
      {gameStage == "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage == "end" && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;
