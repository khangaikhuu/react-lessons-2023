import {useState} from 'react'
import './style.css'
import Counter from "./components/Counter.jsx";

function App() {
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <Counter isFancy={true}/>
            ) : (
                <Counter isFancy={false}/>
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

export default App
