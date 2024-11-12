import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Imagens
import City from './assets/city.jpg';
import ManageData from "./components/ManageData.jsx";
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";
import ShowUserName from "./components/ShowUserName.jsx";
import CarDetails from "./components/CarDetails.jsx";
import Fragment from "./components/Fragment.jsx";
import Container from "./components/Container.jsx";
import ExecuteFunction from "./components/ExecuteFunction.jsx";
import Message from "./components/Message.jsx";
import ChangeMessagemState from "./components/ChangeMessagemState.jsx";
import UserDetails from "./components/UserDetails.jsx";

function App() {
  const [count, setCount] = useState(0);
  const userName = useState("Marcos");
  const cars = [
    {id: 1, brand: "Ferrari", color: "Fermelha", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Amarelo", newCar: false, km: 1000 },
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 5000}]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
      setMessage(msg);
  }

  /* Desafio 4 */
  const peoples = [
      {id: 1, name: "Caio", age: 36, profession: "Dev"},
      {id: 2, name: "Antonio", age: 27, profession: "Vendedor"},
      {id: 3, name: "Luan", age: 13, profession: "Estudante"}
  ]

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
          <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* Imagem em asset */}
      <div>
          <img src={City} alt="Cidade"/>
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* structuring */}
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={2500} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
          <CarDetails
              key={car.id}
              brand={car.brand}
              color={car.color}
              km={car.km}
              newCar={car.newCar}/>
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* Children */}
      <Container myValue="testing">
          <p>E este é o conteúdo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessagemState handleMessage={handleMessage} />
      {/* Desafio 4 */}
        {peoples.map((people) => (
            <UserDetails
                id={people.id}
                name={people.name}
                age={people.age}
                profession={people.profession}
            />
        ))}
    </>
  )
}

export default App
