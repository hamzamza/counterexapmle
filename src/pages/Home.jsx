import { useContext } from "react";
import { counterContext } from "../counterContext";

function Home() {
  const { state } = useContext(counterContext);
  return <div>home the currnent counter is {state.count}</div>;
}

export default Home;
