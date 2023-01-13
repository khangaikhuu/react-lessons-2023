import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  function handleRegister(event) {
    event.preventDefault()
    console.log(event.target.firstname.value)
    console.log(event.target.lastname.value)
    console.log(users)

    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value
    }

    setUsers([...users, user])
  }

  return (
    <div className="App">
      <h1>Day-42 Exercise</h1>
      <form onSubmit={handleRegister}>
        <label>First Name: </label>
        <input name="firstname" />
        <label>Last Name: </label>
        <input name="lastname" />
        <label>Password: </label>
        <input name="password" />
        <label>Confirm Password: </label>
        <input name="confirm" />
        <button>Register</button>
      </form>

      <h2> User Preview</h2>
      {users.map(u => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
