import {Link} from 'react-router-dom'
import {useFetch} from "../hooks/useFetch.jsx";
import './Home.css'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'

  const {data: items, loading, error} = useFetch(url)

  return (
    <>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="product">
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            {/*  4 - roda dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home