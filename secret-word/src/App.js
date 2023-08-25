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

    let wordletters = word.split();

    wordletters = wordletters.map((l) => l.toLowerCase());

    //set states of game
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordletters);
    setGameStage(stages[1].name);
  };

  //process letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //restarts the game
  const retryGame = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage == "start" && <StartScreen StartGame={StartGame} />}
      {gameStage == "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage == "end" && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;
