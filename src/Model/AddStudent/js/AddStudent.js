import axios from "axios";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import "../css/AddStudent.css";
import "../css/AddStudent.css";
const AddStudent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validattion use state*/
  const [studentData, setstudentData] = useState({
    studentName: "",
    studentEmail: "",
    studentStandard: "",
    studentRollNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Inside the ADD Student Handle Chanhge", e.target);
    setstudentData({
      ...studentData,
      [name]: value,
    });
  };
  const addStudentData = () => {
    const { studentName, studentEmail, studentStandard, studentRollNo } =
      studentData;
    console.log("student Data : ", studentData);
    if (studentName && studentEmail && studentStandard && studentRollNo) {
      axios
        .post("http://localhost:8085/addStudent", studentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
  };

  return (
    <>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        className="ModelOutLine"
      >
        <ModalHeader toggle={() => setModal(!modal)}>
          <div>ADD Student</div>
        </ModalHeader>

        <ModalBody>
          <div>
            <input
              name="studentName"
              value={studentData.studentName}
              type="text"
              placeholder="Student Name "
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="studentEmail"
              value={studentData.studentEmail}
              type="email"
              placeholder="Enter Parent Email id "
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="studentStandard"
              value={studentData.studentStandard}
              type="Number"
              placeholder="Enter student Standard "
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="studentRollNo"
              value={studentData.studentRollNo}
              type="Number"
              placeholder="Enter student RollNo "
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={addStudentData}>
            Add
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Student</button>
    </>
  );
};
export default AddStudent;
