import {useEffect, useState} from "react";
import projects from "../data/data.js";
import Timer from "./Timer.jsx";

export default function TimersDashboard() {

    const [timers, setTimers] = useState([])
    console.log(timers)
    let times = []
    useEffect(() => {
        setTimers(projects)
    }, [timers])

    return (<div>
        <h1>Timers</h1>
        {timers && timers.map(t => {
            return <Timer project={t.project} title={t.title} elapsed={t.elapsed} runningSince={t.runningSince}/>
        })}
    </div>)
}