import React from "react";
import Logout from "../../../Common Components/LogOut/Logout";
import "../css/ParentDashboard.css";
const ParentHeader = () => {
  return (
    <>
      <h1>Parent Dashboard </h1>
      {/** Need api call to display the Student Name  */}
      <div className="headerParent">
        <p>Welcome User </p>
        <p>User Profile </p>
        <p>Log Out : {<Logout />}</p>
      </div>
    </>
  );
};
export default ParentHeader;
