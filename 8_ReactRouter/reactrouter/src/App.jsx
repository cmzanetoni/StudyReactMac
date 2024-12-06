import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Router, Route, Navigate} from "react-router-dom";

// components
import Navbar from './components/Navbar';
import SearchForm from "./components/SearchForm.jsx";

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from "./pages/Product.jsx";
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - roda dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
