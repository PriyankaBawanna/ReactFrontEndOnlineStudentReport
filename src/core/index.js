import React from "react";

import SchoolAdmin from "../admin/components/js/schoolAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "../admin/studentList/js/studentList";
import TeacherList from "../admin/teacherList/teacherList";
import ParentDashboard from "../parent/js/parentDashboard";
import TermOneMarkSheet from "../parent/js/termOneMarkSheet";
import TermTwoMarkSheet from "../parent/js/termTwoMarkSheet";
import FinalExam from "../parent/js/finalExam";

import TeacherDashBoard from "../teacher/js/teacherDashboard";
import UserLogin from "../userLogin/js/userLogin";
import HomePage from "../Home/js/homePage";
import Registration from "../admin/registrationPage/AdminRegistrationPage/js/registration";
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
