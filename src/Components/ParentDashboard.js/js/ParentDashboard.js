import ParentHeader from "./ParentHeader";
import TermOneMarkSheet from "./TermOneMarkSheet";
import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";
import { Link, Outlet } from "react-router-dom";
import StudentInfo from "./StudentInfo";

const ParentDashboard = () => {
  const [studentDetail, setStudentDetail] = useState([]);

  const [parentInfo, setParentInfo] = useState([]);
  console.log("Parent Info copy", parentInfo);

  const [studentRollNumber, setStudentRollNumber] = useState([]);

  useEffect(() => {
    studentInfo();
  }, []);

  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  const parentEmail = parentDetails.parentEmail;
  console.log("parentEmail-- ", parentEmail);

  console.log("Student Roll number----", studentRollNumber);
  const studentInfo = () => {
    fetch(`http://localhost:8085/StudentResult/${studentRollNumber}`).then(
      (result) => {
        result.json().then((res) => {
          setStudentDetail(res);
        });
      }
    );
  };

  return (
    <>
      <div className="parentProfileIcon">
        <div className="parentDashboardLink">
          <div className="schoolLogo"></div>
          <nav className="termResult">
            <Link to="TermOneMarkSheet" className="result">
              Term One
            </Link>
            <Link to="TermTwoMarkSheet" className="result">
              Term Two
            </Link>
            <Link to="FinalExam" className="result">
              Final Exam
            </Link>
          </nav>
        </div>

        <div>
          <ParentHeader />
        </div>
      </div>
      <StudentInfo />
      <Outlet />
    </>
  );
};
export default ParentDashboard;
// TermThreeMarkSheet;
