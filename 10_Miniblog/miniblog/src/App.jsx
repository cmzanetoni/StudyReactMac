import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth" // Mapeia se a autenticação foi feita com sucesso

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication} from "./hooks/useAuthentication.jsx"; // Vai pegar a autenticação que já existem na const auth

// Contexts
import { AuthProvider } from './context/AuthContext';

// Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {

  // Está colocando aqui pq está na função global, onde é mais indicado.
  // Também poderia ser colocado em um hook para ficar mais segmentado.
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication() // Já invoca aqui para não ter que fazer isso de novo

  const loadingUser = user === undefined // Vamos saber se está autenticado comparano se ele é undefined ou não

  // Sempre que mudar a autenticação, ele será executados
  // Assim verifica se ele está autenticado ou não conforme, login, cadastro...
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  // Se o retorno do firebase de usuário não for um login deve retornar null,
  // que é diferente de undefined, logo uma ação foi executada e não está mais carregando
  if (loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} /> {/* se não estiver logado deixa ir para tela de Login, se não vai para a home */}
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
