import { useEffect, useState } from "react";

export default function Register() {
  const ROLE_URL = "http://localhost:8080/admin/role/list";
  const REGISTER_URL = "http://localhost:8080/admin/register";

  const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    userrole: 0,
    address: "",
  });

  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetchRoles();
  }, [formData]);

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
        <input name="firstname" type="text" onChange={handleChange} />
        <label htmlFor="lastname">
          {" "}
          Last Name:
          <input name="lastname" type="text" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input name="email" type="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          {" "}
          Password:
          <input name="password" type="password" onChange={handleChange} />
        </label>
        <label htmlFor="phone">
          {" "}
          Phone:
          <input name="phone" type="number" onChange={handleChange} />
        </label>
        <label>
          Roles:
          <select name="userrole" onChange={handleChange}>
            {roles &&
              roles.map((role, idx) => (
                <option key={idx} id={role._id} value={role._id}>
                  {role.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="address">
          Address:
          <textarea name="address" onChange={handleChange} />
        </label>
        <button type="submit">Submit Register</button>
      </form>
    </div>
  );
}
