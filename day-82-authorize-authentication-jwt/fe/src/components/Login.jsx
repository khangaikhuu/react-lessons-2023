import Cookies from "universal-cookie";

// Login component for the login page
import React, { useState } from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function Login() {
  const cookies = new Cookies();

  cookies.set("TOKEN", "hello", { path: "/" });

  window.location.href = "/auth";
  return (
    <div style={{ margin: "auto ", maxWidth: "500px" }}>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          margin: "5px",
        }}
      >
        <label htmlFor="email">
          <Input
            type="email"
            name="email"
            sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
          />
        </label>
        <label htmlFor="password">
          <Input
            type="password"
            name="password"
            sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
          />
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
