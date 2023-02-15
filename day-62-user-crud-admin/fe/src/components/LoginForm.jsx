import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const URL = "http://localhost:8080/login";

  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    if (FETCHED_JSON.status === "success") {
      toast("You are approved to Login");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }

    console.log(FETCHED_JSON);
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLoginSubmit}>
        <input name="email" type="email" />
        <br />
        <input name="password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
