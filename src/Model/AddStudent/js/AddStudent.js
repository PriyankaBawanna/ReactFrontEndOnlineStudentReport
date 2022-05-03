import axios from "axios";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import "../css/AddStudent.css";
import "../css/AddStudent.css";
const AddStudent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validattion use state*/
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");

  ////function use to save student data into data base using post API
  const addStudentData = () => {
    console.log(studentName, studentEmail, studentStandard, studentRollNo);
    const studentData = {
      studentName,
      studentEmail,
      studentStandard,
      studentRollNo,
    };
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
              value={studentName}
              type="text"
              placeholder="Student Name "
              onChange={(e) => {
                setStudentName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              name="studentEmail"
              value={studentEmail}
              type="email"
              placeholder="Enter Parent Email id "
              onChange={(e) => {
                setStudentEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              name="studentStandard"
              value={studentStandard}
              type="Number"
              placeholder="Enter student Standard "
              onChange={(e) => {
                setStudentStandard(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              name="studentRollNo"
              value={studentRollNo}
              type="text"
              placeholder="Enter student RollNo "
              onChange={(e) => {
                setStudentRollNo(e.target.value);
              }}
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
