import React from "react";
import ParentHeader from "./ParentHeader";
import TermOneMarkSheet from "./TermOneMarkSheet";
import "../css/ParentDashboard.css";
import { Link, Outlet } from "react-router-dom";
import Logout from "../../../Common Components/LogOut/Logout";
const ParentDashboard = () => {
  return (
    <>
      <div className="sideNaveParentDashboard">
        <div className="mobileViewParentDashBoard">
          <h4>Parent Dashboard</h4>
        </div>
        <div className="mobileViewParentDashBoard">
          <Logout />
        </div>
      </div>

      <div className="parentProfileIcon">
        <ParentHeader />
      </div>

      <nav className="termResult  mobileViewTermResult">
        <Link to="TermOneMarkSheet" className="result">
          Term One
        </Link>
        <Link to="TermTwoMarkSheet" className="result">
          Term Two
        </Link>
        <Link to="FinalExam" className="result">
          Final Exam
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
export default ParentDashboard;
// TermThreeMarkSheet;
