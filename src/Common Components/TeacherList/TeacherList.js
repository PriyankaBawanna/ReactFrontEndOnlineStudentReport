import React, { useState, useEffect } from "react";
import UpdateTeacher from "../../Model/UpdateTeacher/js/UpdateTeacher";
const TeacherList = () => {
  const [users, setUser] = useState([]);
  const [value, setValue] = useState("");
  const [response, setresponse] = useState("");

  useEffect(() => {
    addTeacher();
  });

  const addTeacher = async () => {
    await fetch("http://localhost:8085/addTeacher").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  };

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

  return (
    <>
      <table id="customers">
        <tr>
          <th>Teacher Name</th>
          <th>Teacher Id</th>
          <th>Mobile No</th>
          <th>Email Id </th>
          <th>Operation</th>
          <th>Operation</th>
        </tr>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{item.teacherName}</td>
            <td>{item.teacherNo}</td>
            <td>{item.teacherMobileNo}</td>
            <td>{item.teacherEmailId}</td>
            <td>
              <UpdateTeacher teacherId={item._id} />
            </td>
            <td>
              <button onClick={() => deleteTeacher(item._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default TeacherList;
