import React, { useState } from "react";
import LoginPage from "../../../Common Components/LoginPage/js/Login";
import Registration from "../../../Common Components/RegistrationPage/AdminRegistrationPage/js/Registration";
import HomePage from "./HomePage";
import SchoolAdmin from "../../schoolAdmin/js/js/SchoolAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "../../../Common Components/StudentList/js/StudentList";
import TeacherList from "../../../Common Components/TeacherList/TeacherList";

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
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route
            path="/Login"
            element={<LoginPage setLoginUser={setLoginUser} />}
          />
          <Route path="/SchoolAdmin" element={<SchoolAdmin />}>
            <Route index element={<StudentList />} />
            <Route path="StudentList" element={<StudentList />}></Route>
            <Route path="TeacherList" element={<TeacherList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
