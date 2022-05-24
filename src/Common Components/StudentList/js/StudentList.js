import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, UNSAFE_RouteContext } from "react-router-dom";
import AddParent from "../../../Model/AddParent/js/AddParent";
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
      <div className="studentDataAddBtn">
        <AddStudent data={getData} />
        <AddParent />

        <input
          type="text"
          placeholder="Search student"
          onChange={searchHandle}
          className="inputSearchStudent"
        />
      </div>
      <table>
        <h3>List of Student</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Parent Email</th>
              <th>Student Standard</th>
              <th>Student Roll Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((item, i) => (
            <tbody>
              <tr key={i}>
                <td data-label="Student Name">{item.studentName}</td>
                <td data-label="Student Email">{item.studentEmail}</td>
                <td data-label="Student Standard">{item.studentStandard}</td>
                <td data-label="Student Roll No ">{item.studentRollNo}</td>
                <td data-label="Update Student Data">
                  <UpdateStudent studentId={item._id} data={getData} />
                </td>

                <td data-label="Delete Student Data">
                  {/** function pass as props to   Delete student Component for render the list  */}
                  <DeleteStudent
                    studentRollNo={item.studentRollNo}
                    data={getData}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </table>
    </>
  );
};
export default StudentList;
