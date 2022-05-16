import React from "react";

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
      <button onClick={handleLogOut}>LogOut</button>
    </>
  );
};
export default Logout;
