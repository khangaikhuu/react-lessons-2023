import {useEffect, useState} from "react";
import projects from "../data/data.js";
import Timer from "./Timer.jsx";
import {newTimer} from "../timercomponent/Helpers";

export default function TimersDashboard() {
    const [timers, setTimers] = useState({timers: []})

    function handleCreateFormSubmit(timer) {
        createTimer(timer)
    }

    function handleEditFormSubmit(attrs) {
        updateTimer(attrs)
    }

    function handleTrashClick(timerId) {
        deleteTimer(timerId)
    }

    function createTimer(timer) {
        const t = newTimer(timer)
        setTimers({
            timers: timers.timers.concat(t)
        })
    }

    function startTimer(timerId) {
        const now = Date.now();
        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === timerId) {
                    console.log(timer)
                    timer.runningSince = now
                    return timer
                } else {
                    return timer;
                }
            }),
        })
    }

    function stopTimer(timerId) {
        const now = Date.now();

        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    timer.elapsed = timer.elapsed + lastElapsed
                    timer.runningSince = null
                }
                return timer
            }),
        });
    }

    function updateTimer(attrs) {
        setTimers({
            timers: timers.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    timer.title = attrs.title
                    timer.project = attrs.project
                }
                return timer
            }),
        });
    }

    function deleteTimer(timerId) {
        setTimers({
            timers: timers.timers.filter(t => t.id !== timerId),
        });
    }

    useEffect(() => {
        setInterval(() => setTimers({timers: projects}), 1000)
    }, [])

    return (<div>
        <h1>Timers</h1>
        {timers.timers && timers.timers.map(t => {
            return <Timer project={t.project} title={t.title} id={t.id} elapsed={t.elapsed}
                          runningSince={t.runningSince} onStartClick={startTimer} onStopClick={stopTimer}
                          onEditClick={handleEditFormSubmit} onTrashClick={handleTrashClick}/>
        })}
    </div>)
}