import React from "react";
import { useState, useEffect } from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../../../Components/schoolAdmin/js/css/AdminProfile.css";
const TeacherProfile = ({ setLoginUser }) => {
  let teacherDetails = JSON.parse(localStorage.getItem("teacherDetails"));
  console.log("Teacher Login Details ", teacherDetails);

  return (
    <>
      <div className="dropdown">
        <span className="userProfile">User</span>
        <div className="dropdown-content">
          <p>Teacher Name : {teacherDetails.teacherName}</p>
          <p>Teacher Email:{teacherDetails.teacherEmailId}</p>
          <p>Teacher ID:{teacherDetails.teacherNo}</p>
          <p>Teacher Mobile No. {teacherDetails.teacherMobileNo}</p>
          <Logout />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
