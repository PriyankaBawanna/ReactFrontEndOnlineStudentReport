import React from "react";
import HomeLink from "./HomeLink";
import { Link, Outlet } from "react-router-dom";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <HomeLink />
        <h2 className="intro"> Welcome to Online Student Report </h2>
        <nav className="homePageRoute">
          <Link to="/TeacherLogin">Teacher Login </Link>
          <Link to="/ParentLogin">Parent Login </Link>
          <Link to="/Login">School Admin Login</Link>

          <Link to="/Registration"> School Admin Registration</Link>
        </nav>
        <Outlet />
      </main>
    </>
  );
};
export default HomePage;
