import React, { useEffect, useReducer } from "react";
import { reducer } from "./elevatorReducer.js";

export default function Elevator() {
  const [elevator, setElevator] = useReducer(reducer, {
    state: "Idle",
    floor: 1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setElevator(elevator.floor);
    }, 1000);

    return () => clearTimeout(timer);
  }, [elevator.floor]);

  return (
    <>
      <p>Elevator State: {elevator.state}</p>
      <p>Current Floor: {elevator.floor}</p>
      <button type="button" onClick={() => setElevator(1)}>
        Floor 1
      </button>
      <button type="button" onClick={() => setElevator(2)}>
        Floor 2
      </button>
      <button type="button" onClick={() => setElevator(3)}>
        Floor 3
      </button>
      <button type="button" onClick={() => setElevator(4)}>
        Floor 4
      </button>
      <button type="button" onClick={() => setElevator(5)}>
        Floor 5
      </button>
    </>
  );
}
