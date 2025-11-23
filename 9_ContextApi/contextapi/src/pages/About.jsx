import { useContext} from "react";
import { CounterContext} from "../context/CounterContext";
import { useTitleColorContext} from "../hooks/useTitleColorContext.jsx";

const About = () => {
  const {counter} = useContext(CounterContext);

  // 5 - Context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About