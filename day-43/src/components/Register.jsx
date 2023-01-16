export default function Register(){
    return (
        <div>
            <h1>Its is Register page</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input name="email" type="email"></input>
                <br/>
                <label htmlFor="firstname">Firstname: </label>
                <input name="firstname" type="text"></input>
                <br/> 
                <label htmlFor="lastname">Lastname: </label>
                <input name="lastname" type="text"></input>
                <br/>
                <label htmlFor="password">Password: </label>
                <input name="password" type="password"></input>
                <br/>
                <label htmlFor="password">Confirm Password: </label>
                <input name="password" type="password"></input>
                <br/>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}