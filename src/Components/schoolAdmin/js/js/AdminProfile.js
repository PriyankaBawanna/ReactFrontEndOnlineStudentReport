import React from "react";
import "../css/AdminProfile.css";
const AdminProfile = () => {
  return (
    <>
      <div class="dropdown">
        <span className="userProfile">User</span>
        <div class="dropdown-content">
          <p>Name :</p>
          <p>SignOut</p>
        </div>
      </div>
    </>
  );
};
export default AdminProfile;
