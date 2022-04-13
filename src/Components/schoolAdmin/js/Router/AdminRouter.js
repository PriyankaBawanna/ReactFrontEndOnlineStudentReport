import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "../../../../Common Components/StudentList.js/js/StudentList";
import TeacherList from "../../../../Common Components/TeacherList/TeacherList";
import UserList from "../js/UserList";

const AdminRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/TeacherList" element={<TeacherList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AdminRouters;
