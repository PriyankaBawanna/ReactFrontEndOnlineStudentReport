import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import UpdateStudent from "../../../Model/UpdateStudent/js/updateStudent";
import TermOne from "../../Exam Term/js/TermOne";
import TermThree from "../../Exam Term/js/TermThree";
import TermTwo from "../../Exam Term/js/TermTwo";

import "../css/studentInfo.css";
const StudentInformation = (p) => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentDataUpdate, SetStudentDataUpdate] = useState(false);
  console.log("Student Id in StudentInformation ", p.studentId);
  const [modal, setModal] = useState(false);
  const [selects, setSelectTerm] = useState(false);
  const selection = selects;
  const updateStudent = 0;
  // console.log("Student Data : ", studentDataUpdate);
  useEffect(() => {
    getStudentDetails();
  }, []);

  const UpdateStudentData = async () => {
    console.log(studentName, studentEmail, studentStandard, studentRollNo);
    let UpdateStudentData = await fetch(
      `http://localhost:8085/studentUpdate/${p.studentId}`,
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
    if (UpdateStudentData) {
      alert("student data update ");
    }
    setModal(false);
  };

  const getStudentDetails = async () => {
    let studentDetails = await fetch(
      `http://localhost:8085/studentInfo/${p.studentId}`
    );

    studentDetails = await studentDetails.json();
    setStudentName(studentDetails.studentName);
    console.log("Student Name ", studentDetails.studentName);
    setStudentEmail(studentDetails.studentEmail);
    setStudentStandard(studentDetails.studentStandard);
    setStudentRollNo(studentDetails.studentRollNo);
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
          <div>Student Marks Sheet</div>
        </ModalHeader>

        <ModalBody>
          <div className="StudentInfo">
            <div>
              <b>Student Name</b>
              <input
                name="studentName"
                value={studentName}
                type="text"
                placeholder="Student Name "
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div>
              <b>Parent Email</b>
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
              <b>Student Standard</b>
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
            <div className="studentdetailscol">
              <b>Roll No </b>
              <input
                name="studentRollNo"
                value={studentRollNo}
                type="Number"
                placeholder="Enter student RollNo "
                onChange={(e) => {
                  setStudentRollNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="resultOfStudent">
            <select
              value={selects}
              onChange={(e) => setSelectTerm(e.target.value)}
            >
              <option>select the Term</option>
              <option>Term One</option>
              <option>Term Two</option>
              <option>Term Three</option>
            </select>
            <h1>{}</h1>
            {(() => {
              switch (selects) {
                case "Term One":
                  return <TermOne studentId={p.studentId} />;
                case "Term Two":
                  return <TermTwo studentId={p.studentId} />;
                case "Term Three":
                  return <TermThree studentId={p.studentId} />;

                default:
                  return null;
              }
            })()}
          </div>
          <div className="btngroup">
            <button onClick={() => setModal(false)}>Cancel </button>
            <button type="submit" onClick={UpdateStudentData}>
              Submit
            </button>
          </div>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Edit </button>
    </>
  );
};
export default StudentInformation;
