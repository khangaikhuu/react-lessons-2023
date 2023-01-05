import './App.css';
import { Button } from 'react-bootstrap';
import MainMenu from './components/MainMenu';


function App() {
  return (
    <div className="App">
      <div className="menu-container">
        <MainMenu />
      </div>

      <h1>React Bootstrap Component </h1>
      
      <Button variant="primary" >Hello Bootstrap Button</Button>

    </div>
  );
}

export default App;
