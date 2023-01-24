import {useState} from "react";
import TimerForm from "./TimerForm.jsx";

export default function ToggleableTimerForm({handleFormSubmit, handleFormClose, handleFormOpen}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {isOpen ? <TimerForm onFormSubmit={handleFormSubmit} onFormClose={handleFormClose}/> :
                <div className='ui basic content center aligned segment'>
                    <button
                        className='ui basic button icon'
                        onClick={handleFormOpen}
                    >
                        <i className='plus icon'/>
                    </button>
                </div>}
        </div>
    )
}