import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const color = "Green";
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft < 1 ? 10 : timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <p>Traffic Light: {color}</p>
      <p>Time left: {timeLeft}</p>
    </div>
  );
}

export default App;
