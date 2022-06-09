import React from "react";
import Logout from "../../../shell/logOut/logout";

import "../css/adminProfile.css";
const AdminProfile = () => {
  //get login User Details
  let schoolAdminDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      <div className="dropdownAdmin">
        <span className="adminProfileHeading">
          <b className="profileHeading">SA</b>
        </span>

        <div className="triangleAdmin"></div>
        <div className="dropdownContentForAdmin">
          <h6> Admin: {schoolAdminDetails.email}</h6>
          {/**Logout for the clear the Session  */}
          <Logout />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
