import React from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../../../Components/schoolAdmin/js/css/AdminProfile.css";
const TeacherProfile = () => {
  //get login Teacher Data from Local Storage
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
          {/*Log out for clear the session  */}
          <Logout />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
