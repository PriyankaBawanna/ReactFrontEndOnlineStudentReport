import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
const UserLogin = () => {
  //user role and password
  const [role, setSelectRole] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //user role and password Error
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //navigate to home page of parent
  const navigate = useNavigate();

  console.log("User role ", role);

  // User Login
  const handleUserLogin = () => {
    const user = { role, email, password };
    if (user) {
      console.log("user details", user);
      axios.post("http://localhost:8085/userLogin", user).then((res) => {
        switch (role) {
          case "Admin":
            localStorage.setItem("userDetails", JSON.stringify(user));
            navigate("/SchoolAdmin", { replace: true });
            break;
          case "Teacher":
            console.log("Teacher execute ");
            localStorage.setItem("teacherDetails", JSON.stringify(user));
            navigate("/TeacherDashBoard");
            break;
          case "Parent":
            localStorage.setItem("parentDetails", JSON.stringify(user));
            navigate("/ParentDashboard");
            break;
          default:
            console.log("No User Match ");
        }
      });
    }
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);

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
          <div onChange={(e) => setSelectRole(e.target.value)}>
            <input type="radio" value="Admin" name="gender" /> Admin
            <input type="radio" value="Teacher" name="gender" /> Teacher
            <input type="radio" value="Parent" name="gender" /> parent
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
