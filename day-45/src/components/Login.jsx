import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    loginName: "khangaikhuu@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("User is permitted");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    } else {
      toast("User is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login Name: </label>
        <input name="username" type="email" /> <br />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" /> <br />
        <button>Sign In</button>
        <ToastContainer />
      </form>
    </div>
  );
}
