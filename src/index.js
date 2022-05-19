import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Routers from "./Routers";
import DeleteStudent from "./Common Components/StudentList/js/DeleteStudent";
ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
