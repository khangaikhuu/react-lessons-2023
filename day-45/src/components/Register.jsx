import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <div>
      <Header />
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input name="email" type="email"></input>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
