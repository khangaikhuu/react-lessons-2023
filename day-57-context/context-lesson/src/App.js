import './App.css';
import Layout from './components/Layout';
import UserInfo from './components/UserInfo';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <h1>Day-57 - React Context</h1>
      <UserInfo />
      <UserProvider>
        <Layout />
      </UserProvider>
    </div>
  );
}

export default App;
