import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cars from "./Components/Cars.jsx";

function App() {
  const [count, setCount] = useState(0)
  const cars = [
      {id: 1, band: "VW", model: "Gol"},
      {id: 2, band: "Nissan", model: "Sentra"},
      {id: 3, band: "Honda", model: "Fit"}
  ]

  return (
      <>
          <h1>Lista de venda</h1>
          {cars.map((car) => (
              <Cars key={car.id} brand={car.band} model={car.model}/>
          ))}
      </>
  )
}

export default App
