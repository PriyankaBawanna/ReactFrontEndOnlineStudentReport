import axios from "axios";
import React, { useState, useEffect } from "react";
import StudentInformation from "../../../Common Components/StudentInformation/js/StudentInformation";
import TermTwoMarkSheet from "../../ParentDashboard.js/js/TermTwoMarkSheet";

const StudentMarksList = (marksProps) => {
  const [users, setUser] = useState([]);
  // const [termOneData, setTermOneData] = useState("");
  // const [termTwoData, setTermTwoData] = useState("");
  // const [termThreeData, setTermThreeData] = useState("");

  // const [mark, setMarks] = useState({
  //   termOneData: {},
  //   termTwoData: {},
  //   termThreeData: {},
  // });

  const [allTermData, setAllTermData] = useState([{}]);

  const [marks, setMarks] = useState({
    firstTerms: {},
    secondTerms: {},
    thirdTerms: {},
  });

  // inside function

  useEffect(() => {
    addStudent();
  }, []);
  const addStudent = async () => {
    fetch("http://localhost:8085/addStudent").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  };

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

  return (
    <>
      <table id="customers">
        <h3>List of Student</h3>
        <input
          type="text"
          placeholder="Search student"
          onChange={searchHandle}
        />
        <tbody>
          <tr>
            <td>Student Name</td>
            <td>Student Standard</td>
            <td>Student Roll Number</td>
            <td>Term One</td>
            <td>Term Two</td>
            <td>Term Three</td>
            <td>Operation</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.studentName}</td>

              <td>{item.studentStandard}</td>
              <td>{item.studentRollNo}</td>

              <td>{item.totalTermOneMarks}</td>
              <td>{item.totalTermTwoMarks}</td>
              <td>{item.totalTermThreeMarks}</td>

              <td>
                <button
                  onClick={() => {
                    deleteStudent(item._id);
                  }}
                >
                  Delete
                </button>

                <StudentInformation student_id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StudentMarksList;
