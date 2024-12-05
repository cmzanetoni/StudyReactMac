// 2 - links com react router
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      {/* Menu antigo
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      */}
      {/* se quiser definir classe com o isActive, mas teria que fazer isso em todos e atualmente tem nativo
      <NavLink to="/" className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}>Home</NavLink>*/}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar