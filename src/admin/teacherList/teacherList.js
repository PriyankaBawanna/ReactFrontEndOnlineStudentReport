import React, { useState, useEffect } from "react";
import UpdateTeacher from "../UpdateTeacher/js/updateTeacher";
import AddTeacher from "../addTeacher/js/addTeacher";
import "../studentList/css/studentList.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
const TeacherList = () => {
  const [offset, setOffset] = useState(0);
  const [users, setUser] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    addTeacher();
  }, [offset]);

  //Teacher List rerender
  const addTeacher = async () => {
    const res = await axios.get(`http://localhost:8085/addTeacher`);
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

  //Delete The teacher
  const deleteTeacher = async (id) => {
    console.log("user _id", id);
    let result = await fetch(`http://localhost:8085/teacher/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      console.log("record is deleted ");
      addTeacher();
    }
  };

  //Search The Teacher
  const searchHandle = async (e) => {
    console.warn(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8085/TeacherSearch/${key}`);
      result = await result.json();
      if (result) {
        console.log("Result of Student Search ", result);
        setUser(result);
      }
    } else {
      addTeacher();
    }
  };

  //this function is pass as props to AddTeacher After Add new Teacher this Function will reRender and display the updated list of the Teacher
  function getData() {
    addTeacher();
  }

  return (
    <>
      {/* for Add new Teacher */}
      <div className="teacherHeading">
        <div className="listOfUser">
          <h3>List Of Teachers </h3>
        </div>
        <div>
          <AddTeacher teacherData={getData} />

          <input
            type="text"
            placeholder="Search Teacher"
            onChange={searchHandle}
            className="inputSearchStudent"
          />
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Teacher Id</th>
            <th>Mobile No</th>
            <th>Email Id </th>
            <th>Operation</th>
            <th>Operation</th>
          </tr>
        </thead>
        {users.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td data-label="Teacher Name">{item.teacherName}</td>
              <td data-label="Teacher ID">{item.teacherNo}</td>
              <td data-label="Mobile No.">{item.teacherMobileNo}</td>
              <td data-label="Email ID ">{item.teacherEmailId}</td>
              <td data-label="Update">
                <UpdateTeacher teacherId={item._id} data={getData} />
              </td>
              <td data-label="Delete">
                <button
                  onClick={() => deleteTeacher(item._id)}
                  className="deleteStudentBtn"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div>
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
    </>
  );
};
export default TeacherList;
