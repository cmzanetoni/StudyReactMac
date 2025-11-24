import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
