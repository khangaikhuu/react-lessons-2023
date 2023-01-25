import { useEffect, useState } from "react";
import timerData from "../data/data";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "./Helpers";
export default function TimerDashboard() {
  const [timers, setTimers] = useState({ data: [] });

  useEffect(() => {
    setInterval(() => setTimers({ data: timerData }), 10000);
  }, []);

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({
      timers: timers.data.concat(t),
    });
  }

  function handleEditFormSubmit(timer) {
    updateTimer(timer);
  }

  function updateTimer(attributes) {
    setTimers({
      data: timers.data.map((timer) => {
        if (timer.id === attributes.id) {
          timer.title = attributes.title;
          timer.project = attributes.project;
        }
        return timer;
      }),
    });
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  function stopTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function startTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.data.map((timer) => {
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
      timers: timers.data.filter((t) => t.id !== timerId),
    });
  }

  return (
    <div>
      <h1>Timers</h1>

      {timers.data && (
        <div>
          <EditableTimerList
            timers={timers.data}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
            onFormSubmit={handleEditFormSubmit}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
