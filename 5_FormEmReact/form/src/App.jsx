import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from "./components/MyForm.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h2>Forms</h2>
          <MyForm user={{name: "Caio", email: "caio@gmail.com", bio: "Bio...", role: "admin"}}/>
      </>
  )
}

export default App
