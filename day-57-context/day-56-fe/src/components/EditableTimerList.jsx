import EditableTimer from "./EditableTimer.jsx";

export default function EditableTimerList({timers, onFormSubmit, onTrashClick, onStartClick, onStopClick}){

    const timerList = timers.map((timer, index) =>
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
    />)

    return(
        <div>
            {timerList}
        </div>
    )
}