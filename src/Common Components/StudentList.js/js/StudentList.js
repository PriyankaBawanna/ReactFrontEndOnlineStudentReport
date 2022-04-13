import React from "react";
import LinkRouter from "../../../Components/schoolAdmin/js/Router/LinkRouter";
import "../css/StudentList.css";
const StudentList = () => {
  return (
    <>
      <div>
        <LinkRouter />
      </div>
      <table id="customers">
        <tr>
          <th>Student_Name</th>
          <th>Student_RollNo</th>
          <th>Term_1</th>
          <th>Term_2</th>
          <th>Final Exam</th>
          <th>Edit </th>
        </tr>

        <tr>
          <td>Priyanka</td>
          <td>101</td>
          <td>76%</td>
          <td>98%</td>
          <td>99%</td>
          <td>Edit/delete</td>
        </tr>
      </table>
    </>
  );
};
export default StudentList;
