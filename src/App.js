import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(25);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    let interval = setInterval(handleTimer, 1000);
    setIntervalId(interval);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, [timer, intervalId]);

  const handleTimer = () => {
    setTimer((preState) => preState - 1);
  };

  const handleBackground = () => {
    let result = { backgroundColor: "white" };
    if (timer <= 20) {
      result = { backgroundColor: "black", color: "white" };
    }
    if (timer <= 10) {
      result = { backgroundColor: "yellow" };
    }
    if (timer <= 5) {
      result = { backgroundColor: "white" };
    }

    return result;
  };

  return (
    <div className="App" style={handleBackground()}>
      <h1>{timer}</h1>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
}
