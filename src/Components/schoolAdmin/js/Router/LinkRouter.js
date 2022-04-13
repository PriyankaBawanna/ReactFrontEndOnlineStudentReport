import React from "react";
import { Link, useLocation } from "react-router-dom";
const LinkRouter = () => {
  const location = useLocation();
  console.log("UseLocation in school Admin Dashboard", location);
  return (
    <>
      <div>
        <Link to="/">School Admin Dashboard</Link>
        <Link to="/StudentList">Student List </Link>
        <Link to="/TeacherList">Teacher List</Link>
        <Link to="/AdminRouters">Admin Routers</Link>
      </div>
    </>
  );
};
export default LinkRouter;
