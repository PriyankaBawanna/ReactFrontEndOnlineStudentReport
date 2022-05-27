import React, { Profiler } from "react";
import "../css/schoolAdmin.css";
import AdminProfile from "../../../../Components/schoolAdmin/js/js/AdminProfile";
import AddStudent from "../../../../Model/AddStudent/js/AddStudent";
import AddParent from "../../../../Model/AddParent/js/AddParent";
import AddTeacher from "../../../../Model/AddTeacher/js/AddTeacher";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const HeaderAdmin = (prop) => {
  const params = useParams();

  return (
    <div className="adminHeader ">
      <div>Logo</div>
      <div>
        <div class="adminDropdown">
          <button class="dropbtnAdmin">Dropdown</button>
          <div class="schoolAdminDropDown">
            <a href="#">
              <AddStudent />
            </a>
            <a href="#">
              <AddParent />
            </a>
            <a href="#">
              <AddTeacher />
            </a>
          </div>
        </div>
      </div>
      <div>
        <nav className="userListLink">
          <Link to="StudentList" className="studentListLink">
            Student List
          </Link>

          <Link to="TeacherList" className="studentListLink">
            Teacher List
          </Link>
        </nav>
        <Outlet />
      </div>
      <div>
        <AdminProfile />
      </div>
    </div>
  );
};
export default HeaderAdmin;
