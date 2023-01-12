import './App.css';
import {useState}  from 'react'
import Counter from './components/Counter';
import UpdateArrays from './components/UpdateArrays';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObjects';
 
function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('')
  
  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleInput = function(event){
    setInputText(event.target.value)
  }

  return (
    <div className="App">
      <h1>Day-41 - React States</h1>

      <UpdatingObjects />
      <List />
      <UpdateArrays />



      <Counter />

      {/* Exercises 1 */}
      <div id="ex1">
          <p>{counter}</p>
          <button onClick={handleClick}>Click</button>
      </div>
      {/* Exercises 2 */}
      <div id="ex2">
        <p>{inputText}</p>
        <input value={inputText} onChange={(e) => {
          handleInput(e)
        }} />
      </div>
    </div>
  );
}

export default App;
