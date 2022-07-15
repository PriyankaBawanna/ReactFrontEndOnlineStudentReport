import React, { useEffect, useState } from "react";

import Logout from "../../shell/logOut/logout";
import "../css/parentDashboard.css";
const ParentHeader = () => {
  const [parentInfo, setParentInfo] = useState([]);
  const [parentData, setParentData] = useState([]);
  //const loginParent = JSON.parse(localStorage.getItem("loginParent"));
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  let parentEmail = parentDetails.email;

  localStorage.setItem("studentDetails", JSON.stringify(parentData));

  return (
    <>
      <div className="parentHeaderDetails">
        <div className="dropdown">
          <div className="parentProfile">
            <b className="profileIntro">PD</b>
          </div>
          <span className="triangleParentDashBoard"></span>
          <div className="dropdownContentParent">
            <p>
              <p className="parentData">Parent Email : {parentEmail}</p>
            </p>

            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentHeader;
