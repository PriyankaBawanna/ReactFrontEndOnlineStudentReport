import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
const UserLogin = () => {
  //for parent Email and Student Roll no
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //if parent email is not correct than show error
  const [emailError, setEmailError] = useState(false);

  const [parentEmail, setParentEmail] = useState("");
  const [parentPassword, setParentPassword] = useState("");

  const [teacherEmailId, setTeacherEmailId] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  //navigate to home page of parent
  const navigate = useNavigate();
  //post Login Details of Parent According to Student Roll Number and Parent Email Id
  const handleUserLogin = () => {
    const user = { email, password };
    if (user) {
      console.log("Inside the School Admin Login ");
      axios.post("http://localhost:8085/loginUsers", user).then((res) => {
        let LoginStatus = res.data.message;
        console.log("user data", res.data.user);

        if (LoginStatus === "user") {
          localStorage.setItem("userDetails", JSON.stringify(user));
          navigate("/SchoolAdmin", { replace: true });
        } else {
          let parentLogin = {
            parentEmail,
            parentPassword,
          };
          if (parentLogin) {
            console.log("Inside the Parent Login ");
            axios
              .post("http://localhost:8085/loginUsers", parentLogin)
              .then((res) => {
                let loginParent = res.data.message;
                console.log("parent data", res.data.message);

                if (loginParent === "parentLogin") {
                  localStorage.setItem(
                    "parentDetails",
                    JSON.stringify(parentLogin)
                  );
                  navigate("/ParentDashboard");
                } else {
                  let teacherLogin = { teacherEmailId, teacherPassword };
                  if (teacherLogin) {
                    console.log("Inside the Teacher Login ");
                    axios
                      .post("http://localhost:8085/loginUsers", teacherLogin)
                      .then((res) => {
                        let loginTeacher = res.data.message;
                        console.log("Teacher Data", res.data.message);

                        if (loginTeacher === "teacherLogin") {
                          localStorage.setItem(
                            "teacherDetails",
                            JSON.stringify(teacherLogin)
                          );
                          navigate("/TeacherDashBoard");
                        } else {
                          alert("please enter correct details ");
                        }
                      });
                  }
                }
              });
          }
        }
      });
    }
  };
  //Check the parent Email
  const handleemail = (e) => {
    const { value } = e.target;
    setEmail(value);
    setParentEmail(value);
    setTeacherEmailId(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setEmailError(true);
    }
  };
  const handleInput = (e) => {
    const { value } = e.target;
    setPassword(value);
    setParentPassword(value);
    setTeacherPassword(value);
  };
  return (
    <>
      {/* Take input  Parent email and as well apply validation for email  */}
      <div className="userLogin">
        <h1 className="introLoginUser">User Login </h1>
        <div className="loginInput">
          <div>
            <input
              name="email"
              type="email"
              className="inputLogin"
              placeholder="Enter Email"
              onChange={handleemail}
            />
            {emailError ? (
              <span className="loginError">Email not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <input
              name="text"
              type="text"
              placeholder="Enter Password"
              className="inputLogin"
              onChange={handleInput}
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
