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


}