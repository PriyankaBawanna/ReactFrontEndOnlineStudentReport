import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeLink from "../../../../Components/Home/js/HomeLink";
import axios from "axios";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reEnterPasswordError, setReEnterPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
  };
  console.log("Input filed User Name", name.length);

  const register = () => {
    const user = { name, email, password, reEnterPassword };
    console.log("user Name ", name.l);
    if (name && email && password) {
      if (password === reEnterPassword) {
        axios
          .post("http://localhost:8085/register", user)
          .then((res) => alert(res.data.message));
      } else {
        alert("password are not match");
      }
    } else {
      alert("Invalid");
    }
    setEmail("");
    setName("");
    setPassword("");
    setReEnterPassword("");
  };

  return (
    <>
      <HomeLink />
      <h1>Admin Registration Page</h1>
      <form onSubmit={handleChange}>
        <div>
          <div>
            <input
              name="name"
              value={name}
              type="text"
              placeholder="user name"
              onChange={(e) => {
                setName(e.target.value);
                let nameLength = e.target.value.length;
                console.log("user Name ", nameLength);
                if (nameLength < 3) {
                  setNameError(true);
                } else {
                  setNameError(false);
                }
              }}
            />
            {nameError ? <span>user not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="email"
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
                let emailValidation = e.target.value;
                console.log("email Validation ", emailValidation);
                const regEx =
                  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
                if (regEx.test(emailValidation)) {
                  console.log("emailValidation is Valid");
                  setEmailError(false);
                } else if (
                  !regEx.test(emailValidation) &&
                  emailValidation !== ""
                ) {
                  console.log("emailValidation is Not Valid");
                  setEmailError(true);
                }
              }}
            />
            {emailError ? <span>Email not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="password"
              value={password}
              type="password"
              placeholder="enter the password "
              onChange={(e) => {
                setPassword(e.target.value);
                let passwordError = e.target.value;
                if (passwordError.length < 5) {
                  setPasswordError(true);
                } else {
                  setPasswordError(false);
                }
                setPassword(passwordError);
              }}
            />
            {passwordError ? (
              <span>Length must be greater than 5</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <input
              name="ReEnterPassword"
              value={reEnterPassword}
              type="password"
              placeholder="Re enter the password "
              onChange={(e) => {
                setReEnterPassword(e.target.value);
                let reenterPasswordValidation = e.target.value;
                console.log("first pass word filed", password);
                console.log("ReEnter PAss Word ", reenterPasswordValidation);
                if (password === reEnterPassword) {
                  console.log("true password match ");
                  setReEnterPasswordError(true);
                } else {
                  console.log("password is not match ");
                  setReEnterPasswordError(false);
                }
              }}
            />
            {reEnterPasswordError ? (
              <span>password not match </span>
            ) : (
              <span></span>
            )}
          </div>

          <button type="submit" onClick={register}>
            Register
          </button>
        </div>
      </form>
    </>
  );
};
export default Registration;
