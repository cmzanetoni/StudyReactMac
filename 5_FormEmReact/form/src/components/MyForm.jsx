import './MyForm.css'
import {useState} from "react";

const MyForm = ({user}) => {
    // 6 - Controlled do input

    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value);
    }

    //console.log(name);
    //console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email);
    }

    return (
        <div>
            {/* 5 - envio de formulário*/}
            {/* 1 - criacao de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
                </div>
                {/* 2 - lavel envolvendo input */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - simplificação de manipulação de state */}
                    <input type="email" name="email" placeholder="Digite o seu e-mail"
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm;