import './App.css';
import Accordion from './component/Accordion';
import {Routes, Route} from 'react-router-dom'
import Index from './component/Index';
import AboutPage from './component/AboutPage'
import HomePage from './component/HomePage'
import Movies from './component/Movies';
import Movie from './component/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<Index />} />
          <Route path={'/accordion'} element={ <Accordion />}/>
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/movies'} element={<Movies />} />
          <Route path={'/movie/:id'} element={<Movie />} />
      </Routes>
     
    </div> 
  );
}

export default App;
