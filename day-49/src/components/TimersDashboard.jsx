import {useEffect, useState} from "react";
import projects from "../data/data.js";
import Timer from "./Timer.jsx";

export default function TimersDashboard() {
    const [timers, setTimers] = useState({timers: []})

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

    useEffect(() => {
        setInterval(() => setTimers({timers: projects}),1000)
    }, [])

    return (<div>
        <h1>Timers</h1>
        {timers.timers && timers.timers.map(t => {
            return <Timer project={t.project} title={t.title} id={t.id} elapsed={t.elapsed}
                          runningSince={t.runningSince} onStartClick={startTimer} onStopClick={stopTimer}/>
        })}
    </div>)
}