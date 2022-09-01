import { useContext } from "react";
import { counterContext } from "../counterContext";
const INC = "increment";
const DEC = "decremtn";
function Counter() {
  const { state, dispach } = useContext(counterContext);
  return (
    <div>
      <div>
        increment <button onClick={() => dispach({ type: INC })}>+</button>
      </div>
      <div>{state.count}</div>
      <div>
        decrement<button onClick={() => dispach({ type: DEC })}>-</button>
      </div>
    </div>
  );
}

export default Counter;
