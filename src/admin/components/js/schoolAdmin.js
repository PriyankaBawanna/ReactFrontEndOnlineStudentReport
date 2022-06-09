import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../css/schoolAdmin.css";
import "./adminProfile";
import AdminProfile from "./adminProfile";

const SchoolAdmin = () => {
  const params = useParams();
  console.log("user id is : ", params);
  const [count, setCount] = useState(0);
  useState(() => {}, [count]);

  return (
    <>
      <div>
        <div className="schoolAdminHeaderLink">
          <div className="schoolAdminLinkSection">
            <div className="schoolLogo"></div>

            <div>
              <Link to="StudentList" className="studentListLink">
                Student List
              </Link>

              <Link to="TeacherList" className="studentListLink">
                Teacher List
              </Link>
            </div>
          </div>

          <div className="adminProfile">
            <AdminProfile />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default SchoolAdmin;
