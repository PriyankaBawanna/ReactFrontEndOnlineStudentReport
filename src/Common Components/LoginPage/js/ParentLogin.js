import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ParentLogin = () => {
  const [parentEmail, setParentEmail] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const navigate = useNavigate();

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
      <h1>Parent Login </h1>
      <div className="">
        <div>
          <input
            name="parentEmail"
            type="parentEmail"
            placeholder=" parent Email Id"
            onChange={(e) => setParentEmail(e.target.value)}
            value={parentEmail}
          />
        </div>
        <div>
          <input
            name="text"
            type="text"
            placeholder="Enter Student Roll No "
            onChange={(e) => setStudentRollNo(e.target.value)}
            value={studentRollNo}
          />
        </div>
        <button type="submit" onClick={handleParentLogin}>
          Login
        </button>
      </div>
    </>
  );
};
export default ParentLogin;
