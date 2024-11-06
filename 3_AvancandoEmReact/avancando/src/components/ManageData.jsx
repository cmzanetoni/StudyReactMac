import {useState} from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(20); //Iniciar com o valor de 20

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Maudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(number+1)}>Maudar state</button>
            </div>
        </div>
    )
}

export default ManageData;