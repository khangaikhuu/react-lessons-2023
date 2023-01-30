import './App.css';

function App() {

  const URL = 'http://localhost:8080/users'
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
    </div>
  );
}

export default App;
