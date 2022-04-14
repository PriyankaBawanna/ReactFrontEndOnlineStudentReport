import React from "react";
import StudentList from "../../../../Common Components/StudentList.js/js/StudentList";
import TeacherList from "../../../../Common Components/TeacherList/TeacherList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserList from "./UserList";

const AdminRouter = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="StudentList" element={<StudentList />} />
      <Route path="TeacherList " element={<TeacherList />} />
    </Routes>
  </BrowserRouter>;
};
export default AdminRouter;
