import React, { useState } from "react";
import LoginPage from "../../../Common Components/LoginPage/js/Login";
import Registration from "../../../Common Components/RegistrationPage/AdminRegistrationPage/js/Registration";
import HomePage from "./HomePage";
import SchoolAdmin from "../../schoolAdmin/js/js/SchooAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Routers = () => {
  const [user, setLoginUser] = useState({});
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
          <Route path="/SchoolAdmin" element={<SchoolAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
