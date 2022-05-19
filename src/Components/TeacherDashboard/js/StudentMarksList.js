import React, { useState, useEffect } from "react";
import StudentInformation from "../../../Common Components/StudentInformation/js/StudentInformation";
import DeleteStudent from "../../../Common Components/StudentList/js/DeleteStudent";
import AddStudent from "../../../Model/AddStudent/js/AddStudent";

//StudentMarksList component is used to Display the Student's Term One,two and Final Exam with student Name and Roll No
const StudentMarksList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    addStudent();
  }, []);

  //use to render StudentList with student Name and Exam Marks
  const addStudent = async () => {
    fetch("http://localhost:8085/addStudent").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  };

  //Search by the student Name into the list
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

  //function pass as props to Term One, Term Two and Final Exam for When result would be update then list will be render
  // and also pass as props to AddStudent When new Student will be Add than List will be render and getData also pass as props to delete Student
  function getData() {
    addStudent();
    alert("Confirm");
  }
  // function pass as props to Student information when teacher Edit The Result Marks will we be Add  to the Student Marks lit
  function studentMarksData() {
    addStudent();
    alert("Student Marks Add successfully");
  }
  return (
    <>
      {/* Add student  for Add New Student into the List  */}
      <AddStudent data={getData} />
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
                {/* student will be delete according to Roll No
                 */}
                <DeleteStudent
                  studentRollNo={item.studentRollNo}
                  data={getData}
                />
                {/* Student Marks will be Add according  to student ID  */}
                <StudentInformation
                  student_id={item._id}
                  studentList={studentMarksData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StudentMarksList;
