import React from "react";

import LoginPage from "../Common Components/LoginPage/js/Login";
import Registration from "../Common Components/RegistrationPage/AdminRegistrationPage/js/Registration";
import HomePage from "../Components/Home/js/HomePage";
import SchoolAdmin from "../Components/schoolAdmin/js/js/SchoolAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "../Common Components/StudentList/js/StudentList";
import TeacherList from "../Common Components/TeacherList/TeacherList";
import ParentDashboard from "../Components/ParentDashboard.js/js/ParentDashboard";
import TermOneMarkSheet from "../Components/ParentDashboard.js/js/TermOneMarkSheet";
import TermTwoMarkSheet from "../Components/ParentDashboard.js/js/TermTwoMarkSheet";
import FinalExam from "../Components/ParentDashboard.js/js/FinalExam";
import TeacherLogin from "../Common Components/LoginPage/js/TeacherLogin";
import ParentLogin from "../Common Components/LoginPage/js/ParentLogin";
import TeacherDashBoard from "../Components/TeacherDashboard/js/TeacherDashboard";
import UserLogin from "../Common Components/LoginPage/js/UserLogin";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Registration />} />
          <Route path="/Registration" element={<Registration />} />

          <Route path="/UserLogin" element={<UserLogin />} />
        </Route>

        <Route path="/SchoolAdmin" element={<SchoolAdmin />}>
          <Route index element={<StudentList />} />
          <Route path="StudentList" element={<StudentList />}></Route>
          <Route path="TeacherList" element={<TeacherList />} />
        </Route>
        <Route path="/ParentDashboard" element={<ParentDashboard />}>
          <Route index element={<TermTwoMarkSheet />} />
          <Route path="TermOneMarkSheet" element={<TermOneMarkSheet />}></Route>
          <Route path="TermTwoMarkSheet" element={<TermTwoMarkSheet />} />
          <Route path="FinalExam" element={<FinalExam />} />
        </Route>
        <Route path="TeacherDashBoard" element={<TeacherDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
