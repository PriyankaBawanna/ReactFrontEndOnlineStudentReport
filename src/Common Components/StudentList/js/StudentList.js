import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateStudent from "../../../Model/UpdateStudent/js/updateStudent";

import "../css/StudentList.css";

const StudentList = () => {
  const [users, setUser] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    addStudent();
  });
  const addStudent = async () => {
    fetch("http://localhost:8085/addStudent").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  };
  console.warn(users);

  const deleteStudent = async (id) => {
    console.log("user _id", id);
    let result = await fetch(`http://localhost:8085/student/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      console.log("record is deleted ");
      addStudent();
    }
  };

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
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.studentName}</td>
              <td>{item.studentEmail}</td>
              <td>{item.studentStandard}</td>
              <td>{item.studentRollNo}</td>
              <td>
                <UpdateStudent studentId={item._id} />
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteStudent(item._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StudentList;
