import EditableTimer from "./EditableTimer";

export default function EditableTimerList({
  timers,
  onTrashClick,
  onStartClick,
  onStopClick,
}) {
  const timerList = timers.map((timer, index) => (
    <EditableTimer
      key={index}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      onTrashClick={onTrashClick}
      onStartClick={onStartClick}
      onStopClick={onStopClick}
    />
  ));

  return <div>{timerList}</div>;
}
