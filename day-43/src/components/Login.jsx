export default function Login(){
    return (
        <div>
            <h1>Its is Login page</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input name="email" type="email"></input>
                <br/>
                <label htmlFor="password">Password: </label>
                <input name="password" type="password"></input>
                <br/>
                <button>
                    Sign In
                </button>
            </form>
        </div>
    )
}