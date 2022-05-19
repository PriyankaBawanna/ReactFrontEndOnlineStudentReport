import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TermOneMarkSheet from "../../../Components/ParentDashboard.js/js/TermOneMarkSheet";
import "../css/login.css";

const ParentLogin = () => {
  //for parent Email and Student Roll no
  const [parentEmail, setParentEmail] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  //if parent email is not correct than show error
  const [parentEmailError, setParentEmailError] = useState(false);

  //navigate to home page of parent
  const navigate = useNavigate();
  //post Login Details of Parent According to Student Roll Number and Parent Email Id
  const handleParentLogin = async () => {
    console.log("Teacher Login ", parentEmail, studentRollNo);
    let loginParent = await fetch(`http://localhost:8085/parentLogin`, {
      method: "post",
      body: JSON.stringify({ parentEmail, studentRollNo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loginParent = await loginParent.json();

    if (loginParent.parentEmail && loginParent.studentRollNo) {
      //save the current user Login details into Local Storage
      localStorage.setItem("parentDetails", JSON.stringify(loginParent));
      navigate("/ParentDashboard");
    } else {
      alert("Please enter correct details ");
    }
  };
  //Check the parent Email
  const handleParentEmail = (e) => {
    const { value } = e.target;
    setParentEmail(value);

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setParentEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setParentEmailError(true);
    }
  };
  return (
    <>
      {/* Take input  Parent email and as well apply validation for email  */}
      <div className="userLogin">
        <h1 className="introLoginUser">Parent Login </h1>
        <div className="loginInput">
          <div>
            <input
              name="parentEmail"
              type="parentEmail"
              placeholder=" Parent Email Id"
              value={parentEmail}
              className="inputLogin"
              onChange={handleParentEmail}
            />
            {parentEmailError ? (
              <span className="loginError">Email not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <input
              name="text"
              type="text"
              placeholder="Enter Student Roll No "
              value={studentRollNo}
              className="inputLogin"
              onChange={(e) => setStudentRollNo(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="loginBtn"
            onClick={handleParentLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default ParentLogin;
