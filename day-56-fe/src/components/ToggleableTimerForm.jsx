import {useState} from "react";
import TimerForm from "./TimerForm.jsx";

export default function ToggleableTimerForm({onFormSubmit}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleFormSubmit(timer) {
        onFormSubmit(timer)
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