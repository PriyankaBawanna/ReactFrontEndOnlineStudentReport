import axios from "axios";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import "../css/AddStudent.css";
import "../css/AddStudent.css";
const AddStudent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validation use state*/
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");

  const [studentNameError, setStudentNameError] = useState(false);
  const [studentEmailError, setStudentEmailError] = useState(false);
  const [studentStandardError, setStudentStandardError] = useState(false);

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
        .post(`http://localhost:8085/addStudent`, studentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
    setModal(false);
    setStudentEmail("");
    setStudentName("");
    setStudentRollNo("");
    setStudentStandard("");

    //save the Student Detail into Local Storage
    // localStorage.setItem("studentDetails", JSON.stringify(studentData));
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
                let nameLength = e.target.value.length;
                console.log("user Name ", nameLength);
                if (nameLength < 3) {
                  setStudentNameError(true);
                } else {
                  setStudentNameError(false);
                }
              }}
            />
            {studentNameError ? <span>user not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="studentEmail"
              value={studentEmail}
              type="email"
              placeholder="Enter Parent Email id "
              onChange={(e) => {
                setStudentEmail(e.target.value);
                let emailValidation = e.target.value;

                const regEx =
                  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
                if (regEx.test(emailValidation)) {
                  console.log("emailValidation is Valid");
                  setStudentEmailError(false);
                } else if (
                  !regEx.test(emailValidation) &&
                  emailValidation !== ""
                ) {
                  console.log("emailValidation is Not Valid");
                  setStudentEmailError(true);
                }
              }}
            />
            {studentEmailError ? <span>Email not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="studentStandard"
              value={studentStandard}
              type="Number"
              placeholder="Enter student Standard "
              onChange={(e) => {
                setStudentStandard(e.target.value);
                let studentStandard = e.target.value;
                console.log("student Standard", studentStandard);
                if (studentStandard > 12) {
                  setStudentStandardError(true);
                } else {
                  setStudentStandardError(false);
                }
              }}
            />
            {studentStandardError ? (
              <span> class 1 st to 12 th </span>
            ) : (
              <span></span>
            )}
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
