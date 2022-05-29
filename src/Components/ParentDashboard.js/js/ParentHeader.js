import React, { useEffect, useState } from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../css/ParentDashboard.css";

const ParentHeader = () => {
  const [parentInfo, setParentInfo] = useState([]);
  const [parentData, setParentData] = useState([]);
  //const loginParent = JSON.parse(localStorage.getItem("loginParent"));
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  let parentName = parentDetails.parentName;
  let parentId = parentDetails._id;
  let parentEmail = parentDetails.parentEmail;
  let parentMobileNo = parentDetails.mobileNumber;
  console.log("Parent Id", parentId, parentName, parentMobileNo, parentEmail);

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
          <span className="parentProfile">
            <b className="profileIntro">PD</b>
          </span>
          <div className="triangle-up"></div>
          <div className="dropdownContentParent">
            {parentInfo.map((item, i) => (
              <p key={i}>
                <p>Parent Name : {item.parentName}</p>
                <p>Parent Email : {item.parentEmail}</p>
                <p>Student Roll Number :{item.studentRollNo}</p>
                <p>Parent Mobile Number: {item.mobileNumber}</p>
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
