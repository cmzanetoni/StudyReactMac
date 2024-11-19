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
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
      // pick a random category
      const categories = Object.keys(words)
      //console.log(categories.length)
      //console.log(Object.keys(categories).length)
      //console.log(Math.floor(Math.random() * categories.length))
      //console.log(Math.floor(Math.random() * Object.keys(categories).length))
      const category = categories[Math.floor(Math.random() * categories.length)]
      console.log(category)

      // pick a random word
      const word = words[category][Math.floor(Math.random() * words[category].length)]
      console.log(word)

      return { word, category }
  }

  // starts the scret word game
  const startGame = () => {
      // pick word and pick category
      const { word, category } = pickWordAndCategory();

      // create an array of letters
      let wordLetters = word.toLowerCase().split("");

      console.log(word, category);
      console.log(wordLetters);

      // fill state
      setPickedWord(word);
      setPickedCategory(category);
      setLetters(wordLetters);

      setGameStage(stages[1].name);
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
        {gameStage === "game" && <Game verityLetter={verityLetter}
                                       pickedWord={pickedWord}
                                       pickedCategory={pickedCategory}
                                       letters={letters}
                                       guessedLetters={guessedLetters}
                                       wrongLetters={wrongLetters}
                                       guesses={guesses}
                                       score={score}
        />}
        {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  )
}

export default App
