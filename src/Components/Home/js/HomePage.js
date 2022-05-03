import React from "react";
import HomeLink from "./HomeLink";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <HomeLink />
        <h2> Welcome to Online Student Report </h2>
        <nav>
          <Link to="/Login">Login</Link>
          <Link to="/TeacherLogin">Teacher Login </Link>
          <Link to="/ParentLogin">Parent Login </Link>

          <Link to="/Registration">Registration</Link>
        </nav>
        <Outlet />
      </main>
    </>
  );
};
export default HomePage;
