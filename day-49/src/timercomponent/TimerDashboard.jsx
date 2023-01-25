import { useEffect, useState } from "react";
import timerData from "../data/data";
import EditableTimerList from "./EditableTimerList";
export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 1000);
  }, []);

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function startTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id !== timerId),
    });
  }

  return (
    <div>
      <h1>Timers</h1>

      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
          />
        </div>
      )}
    </div>
  );
}
