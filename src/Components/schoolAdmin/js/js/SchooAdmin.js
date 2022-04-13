import React from "react";
import "../css/schoolAdmin.css";
import AdminProfile from "./AdminProfile";
import AddTeacher from "../../../../Model/AddTeacher/js/AddTeacher";
import AddStudent from "../../../../Model/AddStudent/js/AddStudent";
import StudentList from "../../../../Common Components/StudentList.js/js/StudentList";
import TeacherList from "../../../../Common Components/TeacherList/TeacherList";
import LinkRouter from "../Router/LinkRouter";
import AdminRouters from "../Router/AdminRouter";
import HomeLink from "../../../Home/js/HomeLink";
const SchoolAdmin = () => {
  return (
    <>
      <HomeLink />
      <h1>Welcome School Admin </h1>
      <header className="adminHeader">
        <div className="addUser">
          <div>
            <AddTeacher />
          </div>
          <div>
            <AddStudent />
          </div>
        </div>
        <div className="profile">
          <AdminProfile />
        </div>
      </header>
      <body>
        <div>
          <LinkRouter />
        </div>
        <AdminRouters />
      </body>
    </>
  );
};
export default SchoolAdmin;
