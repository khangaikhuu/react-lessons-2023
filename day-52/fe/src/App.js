import './App.css';
import {useEffect, useState} from 'react'
import {createUser, deleteUser, fetchAllData, updateUser} from './services/usersServices';

function App() {

    const URL = 'http://localhost:8080/users'
    const newUser = {
        id: "", username: "", age: ""
    }

    const [users, setUsers] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [currentUser, setCurrentUser] = useState(newUser)

    useEffect(() => {
        fetchAllData(URL, setUsers).then(r => console.log(r))
    }, [])


    async function handleDelete(userId) {
        await deleteUser(userId, URL, setUsers)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!isUpdate) {
            await updateUser(e, URL, setUsers)
        } else {
            await createUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUser, newUser)
        }
    }

    async function handleEdit(userId) {
        setIsUpdate(true)
        const filteredUser = users.filter(user => user.id === userId)[0]

        if (filteredUser) {
            setCurrentUser({
                id: filteredUser.id, age: filteredUser.age, username: filteredUser.username
            })
        }
    }

    function handleUserName(e) {
        setCurrentUser({
            ...currentUser, username: e.target.value
        })
    }

    function handleUserAge(e) {
        setCurrentUser({
            ...currentUser, age: e.target.value
        })
    }

    return (<div className="App">
        <h1>Day-52 - NodeJS FS Module</h1>
        <h3>Create User FORM</h3>
        <form onSubmit={handleSubmit}>
            <label>
                User Name:
                <input name="username" value={currentUser.username} onChange={handleUserName}/>
            </label>
            <br/>
            <label>
                Age:
                <input name="age" value={currentUser.age} onChange={handleUserAge}/>
            </label>
            <br/>
            <button>{isUpdate ? 'Update' : 'Submit'}</button>
        </form>
        <h3>Users List</h3>
        {users && users.map((user, index) => {
            return (<div key={index}>
                <p>{user.username} : {user.age} {" "}
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                </p>
            </div>)
        })}
    </div>);
}

export default App;
