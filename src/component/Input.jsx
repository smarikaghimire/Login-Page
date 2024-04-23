import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleClick = () => {
    form.email === "" || form.password === ""
      ? alert("Fields cannot be empty")
      : alert("Signing you up! <3");
  };
  const handleClick2 = () => {
    form.email === "" || form.password === ""
      ? alert("Fields cannot be empty")
      : alert("Logging you in! <3");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="whole">
      <p className="paragraph">Welcome to Smi's Website!</p>
      <div className="input">
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <br></br>
        <br />

        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <br />
      <br />
      <div className="btn">
        <button onClick={handleClick}>Sign Up</button>
        <button onClick={handleClick2}>Login</button>
      </div>
    </div>
  );
};

export default Input;
