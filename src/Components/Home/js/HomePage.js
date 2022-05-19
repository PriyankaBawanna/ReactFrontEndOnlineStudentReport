import React from "react";
import { Outlet } from "react-router-dom";
import "../css/HomePage.css";
import HomeLink from "./HomeLink";

const HomePage = () => {
  return (
    <main>
      <div className="introParent">
        <h1 className="introHeading">
          Welcome To Student Online Progress Report
        </h1>
        <div className="intro"></div>
      </div>
      <div>
        <h1 className="loginIntro">Login With Your Account </h1>
        <HomeLink />
        <Outlet />
      </div>
    </main>
  );
};
export default HomePage;
