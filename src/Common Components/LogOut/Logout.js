import React from "react";

import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  function handleLogOut() {
    sessionStorage.setItem("userToken", "");
    sessionStorage.clear();
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
