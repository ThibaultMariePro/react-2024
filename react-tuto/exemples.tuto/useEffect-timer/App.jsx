import { useEffect, useState } from "react";
import { Input } from "./components/form/Input";
import "./App.css";

function App() {
  return (
    <div className="flex items-center flex-col m-8">
      <Timer />
    </div>
  );
}

function Timer() {
  const [duration, setDuration] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const handleChange = (t) => {
    setDuration(t);
    setSecondsLeft(t);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <>
      <Input
        id="durationinput"
        type="number"
        value={duration}
        onChange={handleChange}
        placeholder="time"
      />

      <span className="rounded-full shadow p-4 bg-slate-200 m-2 font-bold border hover:border-cyan-200">
        : {secondsLeft}
      </span>
    </>
  );
}

export default App;
