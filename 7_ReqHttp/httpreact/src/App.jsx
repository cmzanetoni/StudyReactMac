import { useState, useEffect } from 'react'
import './App.css'

//4 - custom hook
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  // useEffect( () => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //
  //     setProducts(data);
  //   }
  //
  //   fetchData().then();
  // }, [])

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });
    //
    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();
    //
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" placeholder="Nome do produto"
                   name="name" value={name} onChange={e => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" placeholder="Valor"
                   name="price" value={price} onChange={e => setPrice(e.target.value)}/>
          </label>
          {/* 7 - State de loading no post */}
          {<input type="submit" disabled={loading} value={loading ? "Aguarde" : "Criar" } />}
          {/*{<input type="submit" value="Criar" disabled={loading} value="Aguarde" />}*/}
          {/*{!loading && <input type="submit" value="Criar" />}*/}
        </form>
      </div>
    </>
  )
}

export default App