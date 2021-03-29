import { useEffect, useReducer } from "react";
import { reducer } from "./components/reducer.js";
import "./App.css";

function App() {
  const [trafficLight, setTrafficLight] = useReducer(reducer, {
    color: "Green",
    timer: 10,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrafficLight();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <h3>Moore State Machine</h3>
      <p className={trafficLight.color.toLowerCase()}>
        Traffic Light: {trafficLight.color}
      </p>
      <p>Time left: {trafficLight.timer}</p>
    </div>
  );
}

export default App;
