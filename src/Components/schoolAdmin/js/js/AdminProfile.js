import React from "react";
import { useState, useEffect } from "react";
import Logout from "../../../../Common Components/LogOut/Logout";
import "../css/AdminProfile.css";
const AdminProfile = ({ setLoginUser }) => {
  const [users, setUser] = useState([]);

  const userProfile = () => {
    // let userdetails = localStorage.setItem(
    //   "userDetails",
    //   JSON.stringify(userDetails)
    // );
  };
  let schoolAdminDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("Student details", schoolAdminDetails);
  return (
    <>
      <div className="dropdown">
        <span className="userProfile">User</span>

        <div className="dropdown-content">
          <p> Admin: {schoolAdminDetails.email}</p>

          <Logout />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
