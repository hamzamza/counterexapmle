import { useContext } from "react";
import { counterContext } from "../counterContext";

function About() {
  const { state } = useContext(counterContext);
  return <div>About the currnent counter is {state.count}</div>;
}

export default About;
