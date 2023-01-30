import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const URL = 'http://localhost:8080/users'

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchAllData()
  }, [])

  async function fetchAllData() {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL) // Response
    const FETCHED_JSON = await FETCHED_DATA.json() // {status: 'success', data: [{id: ....}]}
    console.log(FETCHED_JSON)
    setUsers(FETCHED_JSON.data)
  }

  async function handleDelete(userId) {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        userId: userId
      })
    }
    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }

    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log(FETCHED_JSON)
    setUsers(FETCHED_JSON.data)
  }

  return (
    <div className="App">
      <h1>Day-52 - NodeJS FS Module</h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input name="username" />
        </label>
        <br />
        <label>
          Age:
          <input name="age" />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.username} : {user.age} {" "} <button onClick={() => handleDelete(user.id)}>Delete</button></p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
