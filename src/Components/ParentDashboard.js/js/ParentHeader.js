import React from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../css/ParentDashboard.css";
const ParentHeader = () => {
  //const loginParent = JSON.parse(localStorage.getItem("loginParent"));
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  let parentName = parentDetails.parentName;
  let parentId = parentDetails._id;
  let parentEmail = parentDetails.parentEmail;
  let parentMobileNo = parentDetails.mobileNumber;
  let studentRollNo = parentDetails.studentRollNo;
  console.log("Parent Id", parentId, parentName, parentMobileNo, parentEmail);
  return (
    <>
      <div className="parentHeaderDetails">
        <h1>Parent Dashboard </h1>
        <div className="dropdown">
          <span className="userProfile">User</span>
          <div className="triangle-up"></div>
          <div className="dropdownContentParent">
            <p>Paren Email :{parentEmail}</p>
            <p>Student Roll No : {studentRollNo}</p>
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentHeader;
