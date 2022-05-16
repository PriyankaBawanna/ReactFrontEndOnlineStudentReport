import React, { useState } from "react";

import LoginPage from "../../../Common Components/LoginPage/js/Login";
import Registration from "../../../Common Components/RegistrationPage/AdminRegistrationPage/js/Registration";
import HomePage from "./HomePage";
import SchoolAdmin from "../../schoolAdmin/js/js/SchoolAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "../../../Common Components/StudentList/js/StudentList";
import TeacherList from "../../../Common Components/TeacherList/TeacherList";
import ParentDashboard from "../../ParentDashboard.js/js/ParentDashboard";
import TermOneMarkSheet from "../../ParentDashboard.js/js/TermOneMarkSheet";
import TermTwoMarkSheet from "../../ParentDashboard.js/js/TermTwoMarkSheet";
import FinalExam from "../../ParentDashboard.js/js/FinalExam";
import TeacherLogin from "../../../Common Components/LoginPage/js/TeacherLogin";
import ParentLogin from "../../../Common Components/LoginPage/js/ParentLogin";
import TeacherDashBoard from "../../TeacherDashboard/js/TeacherDashboard";
import "../css/HomePage.css";

const Routers = () => {
  const [user, setLoginUser] = useState({});

  //save user details into local storage
  console.log("Login Page Value", setLoginUser);
  if (setLoginUser == true) {
    console.log("Login Page Value is true");
  } else {
    console.log("--------------------------Login Page Value is false");
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Registration />} />
            <Route path="/Registration" element={<Registration />} />
            <Route
              path="/Login"
              element={<LoginPage setLoginUser={setLoginUser} />}
            />
            <Route path="/TeacherLogin" element={<TeacherLogin />} />
            <Route path="/ParentLogin" element={<ParentLogin />} />
          </Route>

          <Route path="/SchoolAdmin" element={<SchoolAdmin />}>
            <Route index element={<StudentList />} />
            <Route path="StudentList" element={<StudentList />}></Route>
            <Route path="TeacherList" element={<TeacherList />} />
          </Route>
          <Route path="/ParentDashboard" element={<ParentDashboard />}>
            <Route index element={<TermTwoMarkSheet />} />
            <Route
              path="TermOneMarkSheet"
              element={<TermOneMarkSheet />}
            ></Route>
            <Route path="TermTwoMarkSheet" element={<TermTwoMarkSheet />} />
            <Route path="FinalExam" element={<FinalExam />} />
          </Route>
          <Route path="TeacherDashBoard" element={<TeacherDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
