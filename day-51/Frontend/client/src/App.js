import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import InputForm from './component/InputForm';
import UpdateForm from './component/UpdateForm';

const GET_DATA_URL = 'http://localhost:8080/data'
const DELETE_DATA_URL = 'http://localhost:8080/data'

function App() {
  /**
   * name
   * major
   * 
   */
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [currentData, setCurrentData] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setData(FETCHED_JSON)
    console.log()
  }
  async function deleteData(data) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setData(FETCHED_JSON)
  }

  function handleDelete(id) {
    const data = {
      id: id
    }
    deleteData(data)
  }
  function handleEdit(data) {
    setCurrentData(data)
    setIsOpenForm(true)
  }

  return (
    <div className="App">
      <h1>Day-51 - React/Express FullStack APP - without Database</h1>
      <InputForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setData={setData} />
      {isOpenForm ?
        <UpdateForm
          setCurrentData={setCurrentData}
          currentData={currentData}
          setData={setData}
        /> : <div></div>}
      {
        isLoading ? '...Loading' : (data && data.map((d, index) => {
          return (
            <div key={index}>
              <p >{d.name} -- {d.major}</p>
              <button onClick={() => handleDelete(d.id)}>Delete</button>
              <button onClick={() => handleEdit(d)}>Edit</button>
            </div>
          )
        }))
      }
    </div>
  );
}

export default App;
