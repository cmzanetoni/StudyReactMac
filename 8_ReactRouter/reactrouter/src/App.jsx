import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
