import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
const UserLogin = () => {
  //user role and password
  const [role, setSelectRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //user role and password Error
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //navigate to home page of parent
  const navigate = useNavigate();

  // User Login
  const handleUserLogin = (e) => {
    setSelectRole(e.target.value);
    const user = { role, email, password };
    if (role) {
      if (role == "Admin") {
        axios.post("http://localhost:8085/userLogin", user).then((res) => {
          if (res.data == true) {
            localStorage.setItem("userDetails", JSON.stringify(user));
            navigate("/SchoolAdmin", { replace: true });
          } else {
            alert(res.data.message);
          }
        });
      }

      if (role == "Teacher") {
        axios.post("http://localhost:8085/userLogin", user).then((res) => {
          if (res.data == true) {
            localStorage.setItem("teacherDetails", JSON.stringify(user));
            navigate("/TeacherDashBoard");
          } else {
            alert(res.data.message);
          }
        });
      }

      if (role == "Parent") {
        axios.post("http://localhost:8085/userLogin", user).then((res) => {
          if (res.data == true) {
            localStorage.setItem("parentDetails", JSON.stringify(user));
            navigate("/ParentDashboard");
          } else {
            alert(res.data.message);
          }
        });
      }
    }
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    //regular expression for validate email
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (regEx.test(value)) {
      setEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setEmailError(true);
    }
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <>
      <div className="userLogin">
        <h1 className="introLoginUser">User Login </h1>

        <div className="loginInput">
          <div onChange={handleUserLogin}>
            <input
              type="radio"
              value="Admin"
              name="Admin"
              checked={role === "Admin"}
            />
            <b className="userType">Admin</b>
            <input
              type="radio"
              value="Teacher"
              name="Teacher"
              checked={role === "Teacher"}
            />
            <b className="userType">Teacher</b>
            <input
              type="radio"
              value="Parent"
              name="Parent"
              checked={role === "Parent"}
            />
            <b className="userType">Parent</b>
          </div>

          <div>
            <input
              name="email"
              type="email"
              className="inputLogin"
              placeholder="Enter Email"
              onChange={handleEmail}
            />
          </div>
          {emailError ? (
            <span className="loginError">Email not valid</span>
          ) : (
            <span></span>
          )}
          <div>
            <input
              name="text"
              type="text"
              placeholder="Enter Password"
              className="inputLogin"
              onChange={handlePassword}
            />
          </div>
          <button type="submit" className="loginBtn" onClick={handleUserLogin}>
            Login
          </button>
        </div>
        <div className="userRegister">
          <Link to="/Registration" className="loginLink">
            Registration for School Admin
          </Link>
        </div>
      </div>
    </>
  );
};
export default UserLogin;
