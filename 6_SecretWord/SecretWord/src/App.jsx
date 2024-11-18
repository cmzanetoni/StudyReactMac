import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// CSS
import './App.css'
// React
import { useCallback, useEffect, useState} from "react";
// Data
import { wordsList } from "./data/words.jsx"
// Components
import StartScreen from "./components/StartScreen.jsx";
import GameOver from "./components/GameOver.jsx";
import Game from "./components/Game.jsx";

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);

  // starts the scret word game
  const startGame = () => {
      setGameStage(stages[1].name)
  }

  // process the letter input
  const verityLetter = () => {
      setGameStage(stages[2].name)
  }

  // restarts the game
  const retry = () => {
      setGameStage(stages[0].name)
  }

  return (
    <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verityLetter={verityLetter} />}
        {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  )
}

export default App
