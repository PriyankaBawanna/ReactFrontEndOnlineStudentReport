import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeLink from "../../../../Home/js/homeLink";
import axios from "axios";
import "../../../../userLogin/css/login.css";
// Registration from for the School Admin
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

  //POST School Admin name , email , password and reenter Password
  const register = () => {
    const user = { name, email, password, reEnterPassword };
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

  //School Admin Input Check
  //check Name Input
  const handleInputName = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  //checking the Email of School Admin
  const handleInputEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setEmailError(true);
    }
  };
  //check PassWord
  const handleInputPAssword = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (value.length < 5) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  //check ReEnter Password
  const handleInputCheckReEnterPassword = (e) => {
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
  };
  return (
    <>
      <div className="userLogin">
        <h1 className="introLoginUser">Admin Registration Page</h1>
        <form onSubmit={handleChange}>
          <div className="registerUser">
            <div>
              <input
                name="name"
                value={name}
                type="text"
                placeholder="user name"
                className="inputRegistration"
                onChange={handleInputName}
              />
              {nameError ? (
                <span className="loginError">user not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <input
                name="email"
                value={email}
                type="email"
                placeholder="email"
                className="inputRegistration"
                onChange={handleInputEmail}
              />
              {emailError ? (
                <span className="loginError">Email not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <input
                name="password"
                value={password}
                type="password"
                placeholder="enter the password "
                className="inputRegistration"
                onChange={handleInputPAssword}
              />
              {passwordError ? (
                <span className="loginError">
                  Length must be greater than 5
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <input
                name="ReEnterPassword"
                value={reEnterPassword}
                type="password"
                className="inputRegistration"
                placeholder="Re enter the password "
                onChange={handleInputCheckReEnterPassword}
              />
              {reEnterPasswordError ? (
                <span className="loginError">password not match </span>
              ) : (
                <span></span>
              )}
            </div>

            <button type="submit" className="registerBtn" onClick={register}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Registration;
