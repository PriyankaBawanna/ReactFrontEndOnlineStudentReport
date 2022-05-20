import React, { Profiler } from "react";
import "../css/schoolAdmin.css";
import AdminProfile from "../../../../Components/schoolAdmin/js/js/AdminProfile";

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
