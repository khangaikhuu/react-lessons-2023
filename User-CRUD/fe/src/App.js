import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const BE_URL = "http://localhost:8080/user";
  const [users, setUsers] = useState([]);
  const newUser = {
    id: "",
    username: "",
    age: "",
  }
  const [currentUser, setCurrentUser] = useState(newUser);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(BE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  function handleAgeChange(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }
  function handleNameChange(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const current = users.filter((user) => user.id === userId);
    setCurrentUser(current[0]);
  }

  async function update() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    setIsUpdate(false)
    setCurrentUser(newUser)
  }

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault(); // stop reloading during form submit
    if (isUpdate) {
      update();
    } else {
      const data = {
        username: e.target.username.value,
        age: e.target.age.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const FETCHED_DATA = await fetch(BE_URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
    }
  }
  return (
    <div className="App">
      <h1>User CRUD with FS Module</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            value={currentUser.age}
            onChange={handleAgeChange}
          />
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>
      <h1>USER LIST</h1>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              {user.username} {user.age}{" "}
              <button onClick={() => handleDelete(user.id)}>Delete</button>{" "}
              <button onClick={() => handleEdit(user.id)}>Edit</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
