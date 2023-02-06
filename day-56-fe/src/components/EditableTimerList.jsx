import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext.js";
import EditableTimer from "./EditableTimer.jsx";

export default function EditableTimerList({
  onFormSubmit,
  onTrashClick,
  onStartClick,
  onStopClick,
}) {
  const [timers] = useContext(TimerContext);

  const timerList = timers.timers.map((timer, index) => (
    <EditableTimer
      key={index}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      onFormSubmit={onFormSubmit}
      onStartClick={onStartClick}
      onStopClick={onStopClick}
      onTrashClick={onTrashClick}
    />
  ));

  return <div>{timerList}</div>;
}
