import React from "react";
import Logout from "../../../../Common Components/LogOut/Logout";
import "../css/AdminProfile.css";
const AdminProfile = () => {
  //get login User Details
  let schoolAdminDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      <div className="dropdown">
        <span className="userProfile">User</span>

        <div className="dropdown-content">
          <p> Admin: {schoolAdminDetails.email}</p>
          {/**Logout for the clear the Session  */}
          <Logout />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
