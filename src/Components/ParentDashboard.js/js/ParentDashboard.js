import React from "react";
import ParentHeader from "./ParentHeader";
import StudentMarkSheet from "../js/StudentMarkSheet";
import "../css/ParentDashboard.css";
import { Link, Outlet } from "react-router-dom";
const ParentDashboard = () => {
  return (
    <>
      <ParentHeader />
      <StudentMarkSheet />
      <nav>
        <Link to="TermOneMarkSheet">Term One</Link>
        <Link to="TermTwoMarkSheet">Term Two</Link>
        <Link to="FinalExam">Final Exam</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default ParentDashboard;
// TermThreeMarkSheet;
