import { useEffect, useReducer } from "react";
import { reducer } from "./reducer.js";

export default function TrafficLights() {
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
    <>
      <p className={trafficLight.color.toLowerCase()}>
        Traffic Light: {trafficLight.color}
      </p>
      <p>Time left: {trafficLight.timer}</p>
    </>
  );
}
