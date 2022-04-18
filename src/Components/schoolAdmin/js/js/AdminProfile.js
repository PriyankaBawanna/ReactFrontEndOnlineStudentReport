import React from "react";
import { useState, useEffect } from "react";
import "../css/AdminProfile.css";
const AdminProfile = () => {
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

export default AdminProfile;
