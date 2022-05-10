import React from "react";

import HeaderAdmin from "./HeaderAdmin";
import StudentList from "../../../../Common Components/StudentList/js/StudentList";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const SchoolAdmin = ({ setLoginUser }) => {
  const params = useParams();
  console.log("user id is : ", params);

  return (
    <>
      <h1>Welcome to online Student Report </h1>

      <HeaderAdmin />
      {/* <StudentList /> */}
      <nav>
        <Link to="StudentList">Student List</Link>
        <Link to="TeacherList"> Teacher List</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default SchoolAdmin;
