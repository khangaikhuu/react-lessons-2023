import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const configuration = {
    method: "post",
    url: "http://localhost:8080/register",
    data: {
      email,
      password,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const result = await axios(configuration);
    if (result) {
      setRegister(true);
    }
    console.log(result);
  };
  return (
    <div style={{ margin: "auto ", maxWidth: "500px" }}>
      <h1>Register</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          margin: "5px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          <Input
            type="email"
            name="email"
            sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <Input
            type="password"
            name="password"
            sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button type="submit">Submit</Button>
      </form>
      {register ? (
        <p className="text-success">You Are Registered Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Registered</p>
      )}
    </div>
  );
}
