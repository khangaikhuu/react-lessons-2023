
import './App.css';
import Body from './components/Body';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';

export default function App() {
  return (
    <div>
      <h1>Day-61 - Custom Hook</h1>
      <Login />
      {/* <ChangeTheme />
      <Header />
      <Body />
      <Footer/> */}

      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}
