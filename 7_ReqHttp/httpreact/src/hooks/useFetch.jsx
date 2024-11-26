import { useState, useEffect } from 'react'

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 5 - refatorando post
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  // 6 - loading
  const [loading, setLoading] = useState(false)

  // 7 - tratando erros
  const [error, setError] = useState(null)

  // 8 - Desafio 6
  const [itemId, setitemId] = useState("")

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        Headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })

      setMethod(method);
    }
    else if (method === "DELETE") {
      setConfig({
        method,
        Headers: {"Content-Type": "application/json"}
      })

      setMethod(method);
      setitemId(data)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      // 6 - loading
      setLoading(true)

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      }
      catch (e) {
        console.error(e.message);
        setError("Houve algum erro ao carregar os dados!")
      }
      finally {
        setLoading(false)
      }
    }

    fetchData().then();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    let json

    const httpRequest = async () => {
      if(method === "POST") {
        let fetchOptions  = [url, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();
      }
      else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);
        json = await res.json();
      }

      setCallFetch(json);
    }

    httpRequest().then();
  }, [config, method, url]);

  return {data, httpConfig, loading, error};
}