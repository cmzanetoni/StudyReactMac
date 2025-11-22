import ChangeCounter from "../components/ChangeCounter";
import {useCounterContext} from "../hooks/useCounterContext";

const Info = () => {
  const {counter} = useCounterContext();

  return (
    <div>
      <h1>Info</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Info