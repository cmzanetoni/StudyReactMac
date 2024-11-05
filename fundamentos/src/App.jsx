import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from "./components/FirstComponent.jsx";
import TemplateExpressions from "./components/TemplateExpressions.jsx";
import MyComponent from "./components/MyComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
    </>
  )
}

export default App
