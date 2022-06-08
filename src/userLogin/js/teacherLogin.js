import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TeacherLogin = () => {
  //for get Teacher Email ID and Teacher ID
  const [teacherEmailId, setTeacherEmailId] = useState("");
  const [teacherNo, setTeacherNo] = useState("");
  //if email Is and Teacher Id in not in right format than show error
  const [teacherEmailError, setTeacherEmailError] = useState(false);
  const [teacherNoError, setTeacherNoError] = useState(false);

  const navigate = useNavigate();

  //post the teacher login credentials teacher's Email Id and Teacher's Id
  const handleTeacherLogin = async () => {
    let loginTeacher = await fetch(`http://localhost:8085/teacherLogin`, {
      method: "post",
      body: JSON.stringify({ teacherEmailId, teacherNo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loginTeacher = await loginTeacher.json();

    if (loginTeacher.teacherEmailId && loginTeacher.teacherNo) {
      localStorage.setItem("teacherDetails", JSON.stringify(loginTeacher));
      navigate("/TeacherDashBoard");
    } else {
      alert("please enter correct details ");
    }
  };
  //front end check Teacher Input Email format
  const handleTeacherEmailInput = (e) => {
    const { value } = e.target;
    setTeacherEmailId(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setTeacherEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setTeacherEmailError(true);
    }
  };

  //front end check Teacher Input Teacher ID  length
  const handleInputTeacher = (e) => {
    const { value } = e.target;
    setTeacherNo(value);

    if (value.length < 2) {
      setTeacherNoError(true);
    } else {
      setTeacherNoError(false);
    }
  };
  return (
    <>
      <div className="userLogin">
        <h1 className="introLoginUser">Teacher Login </h1>
        <div className="loginInput">
          <div>
            <input
              name="teacherEmailId"
              type="teacherEmailId"
              placeholder="Teacher Email ID"
              value={teacherEmailId}
              className="inputLogin"
              onChange={handleTeacherEmailInput}
            />
            {teacherEmailError ? (
              <span className="loginError">Email not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <input
              name="text"
              type="text"
              placeholder="Enter Teacher ID"
              className="inputLogin"
              value={teacherNo}
              onChange={handleInputTeacher}
            />
            {teacherNoError ? (
              <span className="loginError">Teacher Id greater than 2</span>
            ) : (
              <span></span>
            )}
          </div>
          <button
            type="submit"
            className="loginBtn"
            onClick={handleTeacherLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default TeacherLogin;
