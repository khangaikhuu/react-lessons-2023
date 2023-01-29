import './App.css';

function App() {
  const BE_URL = 'http://localhost:8080/user'
  
  async function handleSubmit(e) {
    e.preventDefault() // stop reloading during form submit
    const data = {
      username: e.target.username.value,
      age: e.target.age.value
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
    }

    const FETCHED_DATA = await fetch (BE_URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log(FETCHED_JSON) 
  }
  return (
    <div className="App">
      <h1>User CRUD with FS Module</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input name='username' />
        </label>
        <br/>
        <label>
          Age: 
          <input name='age' />
        </label>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
