import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, UNSAFE_RouteContext } from "react-router-dom";
import AddStudent from "../../../Model/AddStudent/js/AddStudent";
import UpdateStudent from "../../../Model/UpdateStudent/js/updateStudent";

import "../css/StudentList.css";
import DeleteStudent from "./DeleteStudent";

const StudentList = () => {
  const [users, setUser] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    addStudent();
  }, []);

  //use to Show Student  details /List
  const addStudent = async () => {
    const addStudent = fetch("http://localhost:8085/addStudent").then(
      (result) => {
        result.json().then((resp) => {
          // console.warn(resp)
          setUser(resp);
        });
      }
    );
  };
  console.warn(users);

  //search on the basis od student name
  const searchHandle = async (e) => {
    console.warn(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8085/StudentSearch/${key}`);
      result = await result.json();
      if (result) {
        console.log("Result of Student Search ", result);
        setUser(result);
      }
    } else {
      addStudent();
    }
  };
  function getData() {
    addStudent();
    alert("Confirm");
  }
  return (
    <>
      {/** function pass as props to   AddStudent Component for render the list  */}
      <AddStudent data={getData} />
      <input type="text" placeholder="Search student" onChange={searchHandle} />
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
                <UpdateStudent studentId={item._id} data={getData} />
              </td>

              <td>
                {/** function pass as props to   Delete student Component for render the list  */}
                <DeleteStudent
                  studentRollNo={item.studentRollNo}
                  data={getData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StudentList;
