import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TermOneMarkSheet from "../../../Components/ParentDashboard.js/js/TermOneMarkSheet";
import "../css/login.css";

const UserContext = createContext();
const ParentLogin = () => {
  const [parentEmail, setParentEmail] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [parentEmailError, setParentEmailError] = useState(false);

  const studentRollNumber = studentRollNo;
  console.log("Number ", studentRollNumber);

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
    console.log("parent Login Result", loginParent);
    if (loginParent.parentEmail && loginParent.studentRollNo) {
      console.log(
        "PArent Data for local Storage ",
        JSON.stringify(loginParent)
      );
      localStorage.setItem("parentDetails", JSON.stringify(loginParent));
      navigate("/ParentDashboard");
    } else {
      alert("Please enter correct details ");
    }
  };

  return (
    <>
      <UserContext.Provider value={"user"}>
        {/* Take input  Parent email and as well apply validation for email  */}
        <div className="userLogin">
          <h1>Parent Login </h1>
          <div>
            <input
              name="parentEmail"
              type="parentEmail"
              placeholder=" parent Email Id"
              value={parentEmail}
              onChange={(e) => {
                setParentEmail(e.target.value);
                let emailValidation = e.target.value;
                console.log("email Validation ", emailValidation);
                const regEx =
                  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
                if (regEx.test(emailValidation)) {
                  console.log("emailValidation is Valid");
                  setParentEmailError(false);
                } else if (
                  !regEx.test(emailValidation) &&
                  emailValidation !== ""
                ) {
                  console.log("emailValidation is Not Valid");
                  setParentEmailError(true);
                }
              }}
            />
            {parentEmailError ? <span>Email not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="text"
              type="text"
              placeholder="Enter Student Roll No "
              value={studentRollNo}
              onChange={(e) => setStudentRollNo(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleParentLogin}>
            Login
          </button>
        </div>
      </UserContext.Provider>
    </>
  );
};
export default ParentLogin;
export { UserContext };
