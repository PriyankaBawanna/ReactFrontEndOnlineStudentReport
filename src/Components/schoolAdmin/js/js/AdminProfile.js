import React from "react";
import Logout from "../../../../Common Components/LogOut/Logout";
import "../css/AdminProfile.css";
const AdminProfile = () => {
  //get login User Details
  let schoolAdminDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      <div className="dropdown">
        <span className="userProfile">
          <b>SA</b>
        </span>

        <div className="triangle-up"></div>
        <div className="dropdownContentForAdmin">
          <p> Admin: {schoolAdminDetails.email}</p>
          {/**Logout for the clear the Session  */}
          <Logout />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
