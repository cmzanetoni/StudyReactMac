import styles from "./Login.module.css";

import {useState, useEffect} from "react";

import {useAuthentication} from "../../hooks/useAuthentication.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Passar o usuário que o cliente usa, importando na const que vem de useAuthentication
  // Está renomeando o error pq já tem uma variável error de front, então está renomeando o do backend
  const {createUser, error: authError, loading} = useAuthentication();

  // Como o createUser é async, tb é necessário colocar no handle
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password
    }

    const res = await createUser(user);
    console.log(user);
  }

  // useEffect para monitorar se o authError mudou
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]); // authError é quem está sendo monitorado (executar toda vez que for alterado)

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="E-mail do usuário" value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Insira sua senha" value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Login;