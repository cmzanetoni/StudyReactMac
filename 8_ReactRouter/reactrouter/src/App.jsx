import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

// components
import Navbar from './components/Navbar';
import Product from "./pages/Product.jsx";

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*  4 - roda dinâmica*/}
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
