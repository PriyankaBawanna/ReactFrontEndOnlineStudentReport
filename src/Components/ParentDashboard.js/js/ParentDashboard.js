import ParentHeader from "./ParentHeader";
import TermOneMarkSheet from "./TermOneMarkSheet";
import "../css/ParentDashboard.css";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logout from "../../../Common Components/LogOut/Logout";
const ParentDashboard = () => {
  // const [studentDetail, setStudentDetail] = useState([]);

  // let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  // const studentRollNo = parentDetails.studentRollNo;

  // const studentDetails = () => {
  //   fetch(`http://localhost:8085/StudentResult/${studentRollNo}`).then(
  //     (result) => {
  //       result.json().then((res) => {
  //         setStudentDetail(res);
  //       });
  //     }
  //   );
  // };
  // useEffect(() => {
  //   studentDetails();
  // }, []);

  return (
    <>
      <div className="sideNaveParentDashboard">
        <div className="mobileViewParentDashBoard">
          <h4>Parent Dashboard</h4>
        </div>
        <div className="mobileViewParentDashBoard">
          <Logout />
        </div>
      </div>

      <div className="parentProfileIcon">
        <ParentHeader />
      </div>

      {/* <div className="studentInfo">
        {studentDetail.map((item, i) => (
          <p key={i}>
            <p>Student Name : {item.studentName}</p>
            <p>Student Email : {item.studentEmail}</p>
            <p>Student Standard :{item.studentStandard}</p>
            <p>Student Roll Number : {item.studentRollNo}</p>
          </p>
        ))}
      </div> */}

      <nav className="termResult  mobileViewTermResult">
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
      <Outlet />
    </>
  );
};
export default ParentDashboard;
// TermThreeMarkSheet;
