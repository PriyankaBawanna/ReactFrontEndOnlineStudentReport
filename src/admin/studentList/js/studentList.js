import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, UNSAFE_RouteContext } from "react-router-dom";
import AddParent from "../../addParent/js/addParent";
import AddStudent from "../../../shared/addStudent/js/addStudent";
import UpdateStudent from "../../../shared/updateStudent/js/updateStudent";
import "../css/studentList.css";
import DeleteStudent from "./deleteStudent";
import axios from "axios";
import ReactPaginate from "react-paginate";

const StudentList = () => {
  const [offset, setOffset] = useState(0);
  const [users, setUser] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    addStudent();
  }, [offset]);

  //use to Show Student  details /List
  const addStudent = async () => {
    const res = await axios.get(`http://localhost:8085/listOfStudent`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    setUser(slice);
    setPageCount(Math.ceil(data.length / perPage));
  };
  console.warn(users);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  //search on the basis od student name
  const searchHandle = async (e) => {
    console.warn(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8085/searchUser/${key}`);
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
  }

  return (
    <>
      {/** function pass as props to   AddStudent Component for render the list  */}

      <table>
        <div className="StudentListHeading">
          <h2>List of Student</h2>
        </div>
        <div className="optionAddParentAddStudent">
          <div>
            <AddStudent data={getData} />
            <AddParent />
          </div>

          <input
            type="text"
            placeholder="Search student"
            onChange={searchHandle}
            className="inputSearchStudent"
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>

              <th>Student Roll Number</th>
              <th>Student Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((item, i) => (
            <tbody>
              <tr key={i}>
                <td data-label="Student Name">{item.name}</td>

                <td data-label="Student Roll No ">{item.rollNo}</td>
                <td data-label="Student Email ">{item.email}</td>
                <td data-label="Update Student Data">
                  <UpdateStudent studentId={item._id} data={getData} />
                </td>

                <td data-label="Delete Student Data">
                  {/** function pass as props to   Delete student Component for render the list  */}
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
      </table>
    </>
  );
};
export default StudentList;
