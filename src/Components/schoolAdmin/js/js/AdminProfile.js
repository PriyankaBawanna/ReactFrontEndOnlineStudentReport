import React from "react";
import { useState, useEffect } from "react";
import Logout from "../../../../Common Components/LogOut/Logout";
import "../css/AdminProfile.css";
const AdminProfile = ({ setLoginUser }) => {
  const [users, setUser] = useState([]);

  const userProfile = () => {};

  return (
    <>
      <div class="dropdown">
        <span className="userProfile">User</span>

        <div class="dropdown-content">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
