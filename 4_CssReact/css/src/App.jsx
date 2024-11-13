import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from "./Components/MyComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", color: "blue", padding: "25 px", borderTop: "2px solid red": "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
    </>
  )
}

export default App
