import React from "react";
import "../css/schoolAdmin.css";
import AdminProfile from "./AdminProfile";

const HeaderAdmin = () => {
  return (
    <div className="adminHeader ">
      <h1>School Admin Dashboard</h1>
      <div className="profile">
        <AdminProfile />
      </div>
    </div>
  );
};
export default HeaderAdmin;
