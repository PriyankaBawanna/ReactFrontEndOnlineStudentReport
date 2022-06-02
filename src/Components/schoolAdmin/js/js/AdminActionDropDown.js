import React from "react";
import "../css/AdminDropDown.css";
import AddStudent from "../../../../Model/AddStudent/js/AddStudent";
import AddParent from "../../../../Model/AddParent/js/AddParent";
import AddTeacher from "../../../../Model/AddTeacher/js/AddTeacher";
const AdminActionDropDownList = () => {
  return (
    <>
      <div class="optionAdmin">
        <button class="OptionBtn">optionAdmin</button>
        <div class="optionContent">
          <a href="#" className="abc">
            <AddStudent />
          </a>
          <a href="#">
            <AddParent />
          </a>
          <a href="#">
            <AddTeacher />
          </a>
        </div>
      </div>
    </>
  );
};
export default AdminActionDropDownList;
