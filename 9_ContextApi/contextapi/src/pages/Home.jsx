// import {useContext} from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - Rfatorando com hook
import { useCounterContext} from "../hooks/useCounterContext.jsx";

// 5 - Context mais complexo
import {useTitleColorContext} from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - Context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home