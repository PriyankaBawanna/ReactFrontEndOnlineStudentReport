import React from "react";
import { useState, useEffect } from "react";
import "../../../Components/schoolAdmin/js/css/AdminProfile.css";
const TeacherProfile = ({ setLoginUser }) => {
  const [users, setUser] = useState([]);

  return (
    <>
      <div class="dropdown">
        <span className="userProfile">User</span>
        <div class="dropdown-content"></div>
      </div>
    </>
  );
};

export default TeacherProfile;
