import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import { counterContext } from "./counterContext";
import "./pages/style.css";
function UsRed() {
  const INC = "increment";
  const DEC = "decremtn";
  const reducer = (state, action) => {
    switch (action.type) {
      case INC:
        return { count: state.count + 1 };
      // we can pass more options for the action object like the pyload to uppdate a value for example
      case DEC:
        return { count: state.count - 1 };

      default:
        break;
    }
  };
  const [state, dispach] = useReducer(reducer, { count: 0 });
  return (
    <Router>
      <nav>
        <ul>
          <Link to="/" className="il">
            <li>Home</li>
          </Link>

          <Link to="/About" className="il">
            <li>About</li>
          </Link>
          <Link to="/Counter" className="il">
            <li>Counter</li>
          </Link>
        </ul>
      </nav>
      <div className="container">
        <counterContext.Provider value={{ state, dispach }}>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/About"} element={<About />}></Route>
            <Route path={"/Counter"} element={<Counter />}></Route>
          </Routes>
        </counterContext.Provider>
      </div>
    </Router>
  );
}

export default UsRed;
