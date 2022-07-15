import React from "react";
import Logout from "../../shell/logOut/logout";
import "../../teacher/css/teacherDashBoard.css";
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
          <p className="teacherDetails">Teacher Name : {teacherDetails.name}</p>
          <p className="teacherDetails">Teacher Email:{teacherDetails.email}</p>
          <p className="teacherDetails">Teacher ID:{teacherDetails.mobileNo}</p>
          <p className="teacherDetails">
            Teacher Mobile No. {teacherDetails.empId}
          </p>
          {/*Log out for clear the session  */}

          <Logout />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
