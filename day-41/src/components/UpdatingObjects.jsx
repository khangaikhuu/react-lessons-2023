import { useState } from "react"

export default function UpdatingObjects(){

    // const user = {age: 18, name: 'Dorj'};
    // console.log(user)
    // user.age = 20;
    // console.log(user)

    const [user, setUser] = useState({age: 18, name: 'Dorj'})

    const check = () => {
        // user.age += 20;
        // setUser({age: user.age + 20, name: 'Dorj'})
        const newUser = {...user}
        newUser.age += 20;
        setUser(newUser)
    }

    return (
        <div>
            Updating objects
            <button onClick={check}>
                User age is {user.age}
            </button>
        </div>
    )
}