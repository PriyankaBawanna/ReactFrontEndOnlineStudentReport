import React from "react";

import "../css/teacherDashBoard.css";
import StudentMarksList from "./studentMarksList";

import TeacherProfile from "./teacherProfile";
const TeacherDashBoard = () => {
  return (
    <>
      <div className="teacherHeader">
        <div className="logo">
          <div className="schoolLogo"></div>
          <h3>Teacher Dashboard </h3>
        </div>

        <div>
          <TeacherProfile />
        </div>
      </div>
      <div className="bodyListTeacher">
        <StudentMarksList />
      </div>
    </>
  );
};
export default TeacherDashBoard;
