import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

// pages
import Home from './pages/Home';
import About from './pages/About';

// components
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
