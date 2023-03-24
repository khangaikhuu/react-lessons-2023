import { useEffect, useState } from "react";
export default function Register() {
  const ROLE_URL = "http://localhost:8080/admin/role/list";
  const REGISTER_URL = "http://localhost:8080/admin/register";

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const dataForm = new FormData(e.currentTarget);

    const options = {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: JSON.stringify(dataForm),
    };

    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstname"> First Name:</label>
        <input name="firstname" type="text" />
        <label htmlFor="lastname">
          {" "}
          Last Name:
          <input name="lastname" type="text" />
        </label>
        <label htmlFor="email">
          Email:
          <input name="email" type="email" />
        </label>
        <label htmlFor="password">
          {" "}
          Password:
          <input name="password" type="password" />
        </label>
        <label htmlFor="phone">
          {" "}
          Phone:
          <input name="phone" type="number" />
        </label>
        <label>
          Roles:
          <select name="roles">
            {roles &&
              roles.map((role) => <option id={role._id}>{role.name}</option>)}
          </select>
        </label>
        <label htmlFor="address">
          Address:
          <textarea name="address" />
        </label>
        <button type="submit">Submit Register</button>
      </form>
    </div>
  );
}
