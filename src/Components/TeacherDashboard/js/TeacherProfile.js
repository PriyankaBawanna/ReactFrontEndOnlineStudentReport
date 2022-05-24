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
          <b>User</b>
        </span>

        <div className="triangle-up"></div>
        <div className="dropdown-content">
          <p className="teacherDetails">
            Teacher Email:{teacherDetails.teacherEmailId}
          </p>

          {/*Log out for clear the session  */}

          <Logout />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
