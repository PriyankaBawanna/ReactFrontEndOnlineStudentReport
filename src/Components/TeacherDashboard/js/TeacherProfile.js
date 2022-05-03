import React from "react";
import { useState, useEffect } from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../../../Components/schoolAdmin/js/css/AdminProfile.css";
const TeacherProfile = ({ setLoginUser }) => {
  const [users, setUser] = useState([]);

  return (
    <>
      <div className="dropdown">
        <span className="userProfile">User</span>
        <div className="dropdown-content">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
