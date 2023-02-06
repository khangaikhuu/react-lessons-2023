import { useEffect, useState } from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";

export default function TimersDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  const URL = "http://localhost:8080/timers";

  useEffect(() => {
    fetchTimersData();
  }, []);

  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);

  async function fetchTimersData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setTimers({ timers: FETCHED_JSON.data });
  }

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  function handleEditFormSubmit(attrs) {
    updateTimer(attrs);
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({ timers: timers.timers.concat(t) });
  }

  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
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

  function updateTimer(attrs) {
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === attrs.id) {
          timer.title = attrs.title;
          timer.project = attrs.project;
        }
        return timer;
      }),
    });
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
            onFormSubmit={handleEditFormSubmit}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
