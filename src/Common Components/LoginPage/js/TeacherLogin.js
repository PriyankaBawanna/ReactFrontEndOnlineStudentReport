import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TeacherLogin = () => {
  const [teacherEmailId, setTeacherEmailId] = useState("");
  const [teacherNo, setTeacherNo] = useState("");

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
            onChange={(e) => setTeacherEmailId(e.target.value)}
            value={teacherEmailId}
          />
        </div>
        <div>
          <input
            name="text"
            type="text"
            placeholder="enter Teacher ID"
            onChange={(e) => setTeacherNo(e.target.value)}
            value={teacherNo}
          />
        </div>
        <button type="submit" onClick={handleTeacherLogin}>
          Login
        </button>
      </div>
    </>
  );
};
export default TeacherLogin;
