import { createContext, useState, useEffect } from "react";
import timerData from "../data/data.js";



const TimerContext = createContext(null)


const TimerContextProvider = ({ children }) => {

    const [timers, setTimers] = useState({ timers: [] });


    useEffect(() => {
        setInterval(() => setTimers({ timers: timerData }), 1000);
    }, []);

    return (
        <TimerContext.Provider value={[timers, setTimers]}>
            {children}
        </TimerContext.Provider>
    )
}





export { TimerContext, TimerContextProvider }