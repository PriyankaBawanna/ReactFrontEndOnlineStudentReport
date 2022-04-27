import React, { Profiler } from "react";
import AddStudent from "../../../Model/AddStudent/js/AddStudent";
import "../css/TeacherDashBoard.css";
import StudentMarksList from "./StudentMarksList";

import TeacherProfile from "./TeacherProfile";
const TeacherDashBoard = () => {
  return (
    <>
      <h1>Teacher Dashboard </h1>
      <div className="teacher-header">
        <div>
          <AddStudent />
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
