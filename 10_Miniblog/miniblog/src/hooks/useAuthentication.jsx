import {db} from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //Como tem muita mudanças de componentes entre páginas, não pode deixar requíssios de funções em execução. Daí o cleanup para não ter leak de memória
  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false); //entra como não cancelado, e é cancelado após os processos derem certo

  const auth = getAuth(); //autenticação no fire base

  function checkIfIsCancelled() {
    if(cancelled){
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true);
    setError(null);

    try {
      // Criando usuário no fire base:
      // Primeiro se cria ele em branco, apenas com email e senha...
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      // .. depois atualiza-se as outras informações
      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false); // Setar o fim do loading caso dê certo e for retornar o user
      return user;

    } catch (error) {
      console.log(error.message); // depois será tratado os erros
      console.log(typeof  error.message);

      let systemErrorMessage;

      if(error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if(error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      }
      else
      {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setLoading(false); // Setar o fim do loading em caso de erro
      setError(systemErrorMessage);
    }
  }

  // useEffect que vai colocar apenas uma vez o cancelado como true assim que sair dessa página
  // para não ter memory leak no react
  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  return {
    auth,
    createUser,
    error,
    loading
  }
}