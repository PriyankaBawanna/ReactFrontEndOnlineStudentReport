import React, { useState, useEffect } from "react";
import StudentInformation from "../studentInformation/js/studentInformation";
import DeleteStudent from "../../admin/studentList/js/deleteStudent";
import AddStudent from "../../shared/addStudent/js/addStudent";
import axios from "axios";
import ReactPaginate from "react-paginate";
//StudentMarksList component is used to Display the Student's Term One,two and Final Exam with student Name and Roll No
const StudentMarksList = () => {
  const [offset, setOffset] = useState(0);
  const [users, setUser] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    addStudent();
  }, [offset]);

  //use to render StudentList with student Name and Exam Marks
  const addStudent = async () => {
    const res = await axios.get(`http://localhost:8085/listOfStudent`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    setUser(slice);
    setPageCount(Math.ceil(data.length / perPage));
  };
  console.warn("User", users);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
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
  }
  // function pass as props to Student information when teacher Edit The Result Marks will we be Add  to the Student Marks lit
  function studentMarksData() {
    addStudent();
    alert("Student Marks Add successfully");
  }
  return (
    <div className="studentMarksInfoTable">
      {/* Add student  for Add New Student into the List  */}
      <div className="teacherSection ">
        <h3 className="studentListHeading">List of Student</h3>
        <div className="search">
          <input
            type="text"
            placeholder="Search student"
            onChange={searchHandle}
            className="searchStudent"
          />
          <AddStudent data={getData} />
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <td>Student Name</td>

            <td>Student Roll Number</td>
            <td>Student Email</td>
            <td>Term One</td>
            <td>Term Two</td>
            <td>Term Three</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>

        {users.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td data-label="Student Name">{item.name}</td>

              <td data-label="Student Roll No ">{item.rollNo}</td>
              <td data-label="Student Email ">{item.email}</td>

              <td data-label="Term One">{item.total}</td>
              <td data-label="Term Two">{item.totalTermTwoMarks}</td>
              <td data-label="Term Three">{item.totalTermThreeMarks}</td>

              <td data-label="Operation">
                {/* Student Marks will be Add according  to student ID  */}
                <StudentInformation
                  _id={item._id}
                  studentList={studentMarksData}
                />
              </td>
              <td data-label="Operation">
                {/* student will be delete according to Roll No
                 */}
                <DeleteStudent rollNo={item.rollNo} data={getData} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};
export default StudentMarksList;
