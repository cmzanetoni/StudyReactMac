import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from "./Components/MyComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  const n = 15;
  const [name] = useState("Caio");

  return (
      <>
          {/* CSS global */}
          <h1>React com CSS</h1>
          {/* CSS de componente */}
          <MyComponent/>
          <p>Este parágrafo é do App.js</p>
          {/* Inline CSS */}
          <p style={{color: "blue", padding: "25px", color: "blue", padding: "25 px", borderTop: "2px solid red"}}>Este
              elemento foi estilizado de forma inline</p>
          {/* CSS Inline dinâmico */}
          <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS Dinâmico</h2>
          <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS Dinâmico</h2>
          <h2 style={name === "Caio" ? {color: "green", backgroundColor: "#000"} : null}>Teste Nome</h2>
      </>
  )
}

export default App
