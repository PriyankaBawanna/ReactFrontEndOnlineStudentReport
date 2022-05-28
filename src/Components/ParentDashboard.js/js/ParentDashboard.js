import ParentHeader from "./ParentHeader";
import TermOneMarkSheet from "./TermOneMarkSheet";
import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";
import { Link, Outlet } from "react-router-dom";
const ParentDashboard = () => {
  const [studentDetail, setStudentDetail] = useState([]);
  const [parentInfo, setParentInfo] = useState([]);
  const [studentRollNumber, setStudentRollNumber] = useState("");

  useEffect(() => {
    parentPersonalInfo();
    studentInfo();
  }, []);

  const parentPersonalInfo = () => {
    console.warn("PArent Email", parentEmail);
    fetch(`http://localhost:8085/ParentDetails/${parentEmail}`).then((info) => {
      info.json().then((res) => {
        setParentInfo(res);
        {
          parentInfo.map((item, i) => {
            setStudentRollNumber(item.studentRollNo);
          });
        }
      });
    });
  };

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
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  let studentRollNo;
  const parentEmail = parentDetails.parentEmail;
  console.log("parentEmail-- ", parentEmail);
  return (
    <>
      <div className="parentProfileIcon">
        <div className="parentDashboardLink">
          <p>Logo</p>
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
      <div className="studentInfo">
        <div className="studentInfo">
          {studentDetail.map((item, i) => (
            <p key={i}>
              <p>Student Name : {item.studentName}</p>
              <p>Student Email : {item.studentEmail}</p>
              <p>Student Standard :{item.studentStandard}</p>
              <p>Student Roll Number : {item.studentRollNo}</p>
            </p>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default ParentDashboard;
// TermThreeMarkSheet;
