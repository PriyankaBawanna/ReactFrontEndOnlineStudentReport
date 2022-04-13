import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeLink from "../../../../Components/Home/js/HomeLink";
import axios from "axios";
const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    ReEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, ReEnterPassword } = user;
    if (name && email && password) {
      if (password === ReEnterPassword) {
        axios
          .post("http://localhost:8085/register", user)
          .then((res) => alert(res.data.message));
      } else {
        alert("password are not match");
      }
    } else {
      alert("Invalid");
    }
  };

  return (
    <>
      <HomeLink />
      <h1>Admin Registration Page</h1>
      {console.log("user", user)}
      <div>
        <div>
          <input
            name="name"
            value={user.name}
            type="text"
            placeholder="user name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="email"
            value={user.email}
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="password"
            value={user.password}
            type="password"
            placeholder="enter the password "
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="ReEnterPassword"
            value={user.ReEnterPassword}
            type="password"
            placeholder="Re enter the password "
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={register}>
          Register
        </button>
      </div>
    </>
  );
};
export default Registration;
