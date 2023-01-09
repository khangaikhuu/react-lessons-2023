import './App.css';
import Button from './components/Button';
import ParentToolbar from './components/ParentToolbar';
import SignUp from './components/SignUp';
import Toolbar from './components/Toolbar';
import ToolbarNext from './components/ToolbarNext';

function App() {
  return (
    <div className="App">
      <h1>Day-38 - React Events</h1> 
      <Button />
      <Toolbar />
      <ToolbarNext />
      <ParentToolbar />
      <SignUp />
    </div>
  );
}

export default App;
