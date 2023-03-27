import { createContext, useState, useEffect } from "react";
import timerData from "../data/data.js";
import { newTimer } from "../components/Helpers.js";

const TimerContext = createContext(null)


const TimerContextProvider = ({ children }) => {

    const [timers, setTimers] = useState({ timers: [] });

    function createTimer(timer) {
        const t = newTimer(timer);
        setTimers({ timers: timers.timers.concat(t) });
    }
    function handleCreateFormSubmit(timer) {
        createTimer(timer);
      }
    
      function handleEditFormSubmit(attrs) {
        updateTimer(attrs);
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

    function handleTrashClick(timerId) {
        deleteTimer(timerId);
    }

    function handleStartClick(timerId) {
        startTimer(timerId);
    }

    function handleStopClick(timerId) {
        stopTimer(timerId);
    }

    useEffect(() => {
        setInterval(() => setTimers({ timers: timerData }), 1000);
    }, []);

    return (
        <TimerContext.Provider value={{
            timers,
            setTimers,
            handleStartClick,
            handleStopClick,
            handleTrashClick,
            handleCreateFormSubmit,
            handleEditFormSubmit
        }}>
            {children}
        </TimerContext.Provider>
    )
}





export { TimerContext, TimerContextProvider }