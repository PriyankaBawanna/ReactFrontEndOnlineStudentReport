import React, { Profiler } from "react";
import AddStudent from "../../../Model/AddStudent/js/AddStudent";
import "../css/TeacherDashBoard.css";
import StudentMarksList from "./StudentMarksList";

import TeacherProfile from "./TeacherProfile";
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
