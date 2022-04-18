import React from "react";

import HeaderAdmin from "./HeaderAdmin";
//import StudentList from "../../../../Common Components/StudentList/js/StudentList";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const SchooAdmin = () => {
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
export default SchooAdmin;
