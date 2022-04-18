import React, { useState, useEffect } from "react";

import "../css/StudentList.css";

const StudentList = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8085/addStudent").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  }, []);
  console.warn(users);
  return (
    <>
      <table id="customers">
        <h3>List of Student</h3>
        <tbody>
          <tr>
            <td>Student Name</td>
            <td>Parent Email</td>
            <td>Student Standard</td>
            <td>Student Roll Number</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.studentName}</td>
              <td>{item.studentEmail}</td>
              <td>{item.studentStandard}</td>
              <td>{item.studentRollNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StudentList;
