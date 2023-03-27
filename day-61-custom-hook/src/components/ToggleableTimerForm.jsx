import {useContext, useState} from "react";
import { TimerContext } from "../context/TimerContext.js";
import TimerForm from "./TimerForm.jsx";

export default function ToggleableTimerForm() {
    const [isOpen, setIsOpen] = useState(false)
    const {handleCreateFormSubmit} = useContext(TimerContext)

    function handleFormSubmit(timer) {
        handleCreateFormSubmit(timer)
        setIsOpen(false)
    }

    function handleFormOpen() {
        setIsOpen(true)
    }

    function handleFormClose() {
        setIsOpen(false)
    }

    return (<div>
        {isOpen ? <TimerForm onFormSubmit={handleFormSubmit} onFormClose={handleFormClose}/> :
            <div className='ui basic content center aligned segment'>
                <button
                    className='ui basic button icon'
                    onClick={handleFormOpen}
                >
                    <i className='plus icon'/>Click me
                </button>
            </div>}
    </div>)
}