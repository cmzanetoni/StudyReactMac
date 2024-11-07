import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 55, name: "Pedro", age: 44},
    ]);

    console.log("users:");
    console.log(users);
    console.log("setUsers:");
    console.log(setUsers);

    const deleteRandom = () => {
        // Gerar inteiro random entre os que estão no array users
        // Math.random(): gera um número aleatório (float)
        // Math.floor(x): arredonda o número para inteiro
        // * maxValue: limita o valor máximo
        // * (maxValue - minValue) + minValue: limita o valor máximo e mínimo
        const randomNumber = Math.floor(Math.random() * (users.length - 1) + 1);

        console.log("randomNumber: " + randomNumber);

        setUsers((prevUsers) => {
            console.log("prevUsers:");
            console.log(prevUsers);
            return prevUsers.filter(user => user.id !== randomNumber);
        })
    }

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;