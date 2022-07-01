import ParentHeader from "./parentHeader";
import TermOneMarkSheet from "./termOneMarkSheet";
import React, { useEffect, useState } from "react";
import "../css/parentDashboard.css";
import { Link, Outlet } from "react-router-dom";
import StudentInfo from "./studentInfo";

const ParentDashboard = () => {
  const [studentDetail, setStudentDetail] = useState([]);
  const [parentInfo, setParentInfo] = useState([]);
  const [studentRollNumber, setStudentRollNumber] = useState([]);

  useEffect(() => {
    studentInfo();
  }, []);

  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  const parentEmail = parentDetails.parentEmail;

  //Using the student's Roll Number, the obtains Student  information.
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
      {/*nav bar that displays student marks based on exam terms */}
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