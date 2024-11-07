import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Imagens
import City from './assets/city.jpg';
import ManageData from "./components/ManageData.jsx";
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
            <img src="/img1.jpg" alt="Paisagem"/>
        </div>
        {/* Imagem em asset */}
        <div>
            <img src={City} alt="Cidade"/>
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
    </>
  )
}

export default App
