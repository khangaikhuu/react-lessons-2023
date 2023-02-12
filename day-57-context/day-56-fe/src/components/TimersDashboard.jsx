import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import {useContext} from "react";
import {TimerContext} from "../context/TimerContext";

export default function TimersDashboard() {
    const URL = "http://localhost:8080/timers";

    const {handleCreateFormSubmit} = useContext(TimerContext);


    // useEffect(() => {
    //   fetchTimersData();
    // }, []);

    async function fetchTimersData() {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);
        // setTimers({ timers: FETCHED_JSON.data });
    }


    return (<div>
        <h1>Timers</h1>

        <div>
            <EditableTimerList
                // timers={timers.timers}
                // onFormSubmit={handleEditFormSubmit}
                // onTrashClick={handleTrashClick}
                // onStartClick={handleStartClick}
                // onStopClick={handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
        </div>

    </div>);
}
