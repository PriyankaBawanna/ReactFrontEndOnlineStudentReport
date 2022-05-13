import React, { Profiler } from "react";
import "../css/schoolAdmin.css";
import AddParent from "../../../../Model/AddParent/js/AddParent";
import AddStudent from "../../../../Model/AddStudent/js/AddStudent";
import AddTeacher from "../../../../Model/AddTeacher/js/AddTeacher";
import AdminProfile from "../../../../Components/schoolAdmin/js/js/AdminProfile";

const HeaderAdmin = () => {
  return (
    <>
      <div className="adminHeader ">
        <div className="addUser">
          <AddParent />
        </div>
        <div className="profile">
          <AdminProfile />
        </div>
      </div>
    </>
  );
};
export default HeaderAdmin;
