import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar'

import About from './pages/About'
import Home from './pages/Home'
import Info from './pages/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
