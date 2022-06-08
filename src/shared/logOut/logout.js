import React from "react";
import "../../userLogin/css/login.css";
import { useNavigate } from "react-router-dom";
//for clear the session and logout
const Logout = () => {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.clear();
    // whichever component you want it to route to
    navigate("/ ", { replace: true });
  }
  return (
    <>
      <button onClick={handleLogOut} className="logOutBtn">
        Logout
      </button>
    </>
  );
};
export default Logout;
