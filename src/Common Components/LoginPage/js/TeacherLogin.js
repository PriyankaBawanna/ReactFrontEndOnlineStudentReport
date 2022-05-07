import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TeacherLogin = () => {
  const [teacherEmailId, setTeacherEmailId] = useState("");
  const [teacherNo, setTeacherNo] = useState("");
  const [teacherEmailError, setTeacherEmailError] = useState(false);
  const [teacherNoError, setTeacherNoError] = useState(false);

  const navigate = useNavigate();

  const handleTeacherLogin = async () => {
    console.log("Teacher Login ", teacherEmailId, teacherNo);

    let loginTeacher = await fetch(`http://localhost:8085/teacherLogin`, {
      method: "post",
      body: JSON.stringify({ teacherEmailId, teacherNo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loginTeacher = await loginTeacher.json();
    console.log("Teacher Login Result", loginTeacher);
    if (loginTeacher.teacherEmailId && loginTeacher.teacherNo) {
      console.log(
        "Teacher Data in local storage ",
        JSON.stringify(loginTeacher)
      );
      localStorage.setItem("teacherDetails", JSON.stringify(loginTeacher));
      navigate("/TeacherDashBoard");
    } else {
      alert("please enter correct details ");
    }
  };

  return (
    <>
      <h1>Teacher Login </h1>
      <div className="">
        <div>
          <input
            name="teacherEmailId"
            type="teacherEmailId"
            placeholder="Teacher teacherEmailId Id"
            value={teacherEmailId}
            onChange={(e) => {
              setTeacherEmailId(e.target.value);

              let teacherEmailValidation = e.target.value;
              const regEx =
                /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
              if (regEx.test(teacherEmailValidation)) {
                console.log("teacherEmailValidation is Valid");
                setTeacherEmailError(false);
              } else if (
                !regEx.test(teacherEmailValidation) &&
                teacherEmailValidation !== ""
              ) {
                console.log("emailValidation is Not Valid");
                setTeacherEmailError(true);
              }
            }}
          />
          {teacherEmailError ? <span>Email not valid</span> : <span></span>}
        </div>
        <div>
          <input
            name="text"
            type="text"
            placeholder="enter Teacher ID"
            value={teacherNo}
            onChange={(e) => {
              setTeacherNo(e.target.value);
              let passwordError = e.target.value;
              if (passwordError.length < 2) {
                setTeacherNoError(true);
              } else {
                setTeacherNoError(false);
              }
              setTeacherNo(passwordError);
            }}
          />
          {teacherNoError ? (
            <span>Teacher Id greater than 2</span>
          ) : (
            <span></span>
          )}
        </div>
        <button type="submit" onClick={handleTeacherLogin}>
          Login
        </button>
      </div>
    </>
  );
};
export default TeacherLogin;
