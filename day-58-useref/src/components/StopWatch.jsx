import { useRef, useState } from "react";

export default function StopWatch() {
  const [now, setNow] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const timeRef = useRef(0);

  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    setStartTime(Date.now());
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
  };

  const timer = now - startTime < 0 ? 0 : Math.floor((now - startTime) / 1000);

  return (
    <>
      <h1>{timer}</h1>
      <button onClick={() => handleStart()}>start</button>
      <button onClick={() => handleStop()}> stop</button>
    </>
  );
}
