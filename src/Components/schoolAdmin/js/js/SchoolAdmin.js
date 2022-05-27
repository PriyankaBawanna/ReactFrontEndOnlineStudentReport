import React, { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/schoolAdmin.css";
import schoolLogo from "../../../../Img/schoolLogo2.jpg";
const SchoolAdmin = ({ setLoginUser }) => {
  const params = useParams();
  console.log("user id is : ", params);
  const [count, setCount] = useState(0);
  useState(() => {}, [count]);

  return (
    <>
      {/* <div className="schoolAdminHeading">
        <h1>Welcome to online Student Report </h1>
      </div> */}

      {/* <StudentList />
      <nav className="userListLink">
        <Link to="StudentList" className="studentListLink">
          Student List
        </Link>

        <Link to="TeacherList" className="studentListLink">
          Teacher List
        </Link>
      </nav>
      <Outlet /> */}

      <div className="headerAdmin">
        <div className="schoolLogo">
          <img src={schoolLogo} />
        </div>
      </div>
    </>
  );
};
export default SchoolAdmin;
