import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const UpdateStudent = (props) => {
  //   console.log("Student Id ", props.studentId);

  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validattion use state*/

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");

  useEffect(() => {
    getStudentDetails();
  }, []);

  const getStudentDetails = async () => {
    console.log("Student Update Props ", props.studentId);
    let studentDetails = await fetch(
      `http://localhost:8085/studentInfo/${props.studentId}`
    );

    studentDetails = await studentDetails.json();
    setStudentName(studentDetails.studentName);
    setStudentEmail(studentDetails.studentEmail);
    setStudentStandard(studentDetails.studentStandard);
    setStudentRollNo(studentDetails.studentRollNo);
  };

  const UpdateStudentData = async () => {
    console.log(studentName, studentEmail, studentStandard, studentRollNo);
    let UpdateStudentData = await fetch(
      `http://localhost:8085/studentUpdate/${props.studentId}`,
      {
        method: "Put",
        body: JSON.stringify({
          studentName,
          studentEmail,
          studentStandard,
          studentRollNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    UpdateStudentData = await UpdateStudentData.json();
    console.log("Student update data");
    setModal(false);
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
          <div>Update Student</div>
        </ModalHeader>

        <ModalBody>
          <div>
            <input
              name="studentName"
              value={studentName}
              type="text"
              placeholder="Student Name "
              onChange={(e) => setStudentName(e.target.value)}
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

          <button type="submit" onClick={UpdateStudentData}>
            Update
          </button>
          <button onClick={() => setModal(false)}>cancel</button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Edit</button>
    </>
  );
};
export default UpdateStudent;
