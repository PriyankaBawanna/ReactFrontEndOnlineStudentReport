import React, { useEffect, useState } from "react";

import Logout from "../../shell/logOut/logout";
import "../css/parentDashboard.css";
const ParentHeader = () => {
  const [parentInfo, setParentInfo] = useState([]);
  const [parentData, setParentData] = useState([]);
  //const loginParent = JSON.parse(localStorage.getItem("loginParent"));
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  //get the current user login data

  let parentEmail = parentDetails.email;

  //Obtaining parent information through email
  const parentPersonalInfo = () => {
    console.warn("PArent Email", parentEmail);
    fetch(`http://localhost:8085/ParentDetails/${parentEmail}`).then((info) => {
      info.json().then((res) => {
        setParentData(res);
        setParentInfo([...res]);
      });
    });
  };

  localStorage.setItem("studentDetails", JSON.stringify(parentData));

  useEffect(() => {
    parentPersonalInfo();
  }, []);

  return (
    <>
      <div className="parentHeaderDetails">
        <div className="dropdown">
          <div className="parentProfile">
            <b className="profileIntro">PD</b>
          </div>
          <span className="triangleParentDashBoard"></span>
          <div className="dropdownContentParent">
            {parentInfo.map((item, i) => (
              <p key={i}>
                <p className="parentData">Parent Name : {item.name}</p>
                <p className="parentData">Parent Email : {parentEmail}</p>
                <p className="parentData">
                  Student Roll Number :{item.studentRollNo}
                </p>
              </p>
            ))}
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentHeader;
