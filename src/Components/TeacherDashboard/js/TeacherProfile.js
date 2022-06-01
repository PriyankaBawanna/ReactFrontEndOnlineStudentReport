import React from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../../../Components/TeacherDashboard/css/TeacherDashBoard.css";
const TeacherProfile = () => {
  //get login Teacher Data from Local Storage
  let teacherDetails = JSON.parse(localStorage.getItem("teacherDetails"));

  console.log("Teacher Login Details ", teacherDetails);

  return (
    <>
      <div className="dropdown">
        <span className="userProfile">
          <b>TD</b>
        </span>

        <div className="dropdown-content">
          <p className="teacherDetails">
            Teacher Name : {teacherDetails.teacherName}
          </p>
          <p className="teacherDetails">
            Teacher Email:{teacherDetails.teacherEmailId}
          </p>
          <p className="teacherDetails">
            Teacher ID:{teacherDetails.teacherNo}
          </p>
          <p className="teacherDetails">
            Teacher Mobile No. {teacherDetails.teacherMobileNo}
          </p>
          {/*Log out for clear the session  */}

          <Logout />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
