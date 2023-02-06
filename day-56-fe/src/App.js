
import './App.css';

import TimersDashboard from "./components/TimersDashboard";
import { TimerContextProvider } from './contexts/TimerContext';

export default function App() {
  return (
    <div>
      <h1>Timer App</h1>
      <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider>
    </div>
  );
}
