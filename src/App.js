import TrafficLights from "./components/TrafficLights";
import Elevator from "./components/Elevator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Moore State Machine</h3>
      <TrafficLights />
      <h3>Mealy State Machine</h3>
      <Elevator />
    </div>
  );
}

export default App;
