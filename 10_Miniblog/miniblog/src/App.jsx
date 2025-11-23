import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
