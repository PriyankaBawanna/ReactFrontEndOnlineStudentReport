import axios from "axios";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import "../css/AddStudent.css";
import "../css/AddStudent.css";
const AddStudent = (prop) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validation use state*/
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [studentNameError, setStudentNameError] = useState(false);
  const [studentEmailError, setStudentEmailError] = useState(false);
  const [studentStandardError, setStudentStandardError] = useState(false);

  //function use to save student data into data base using post API
  const addStudentData = () => {
    const studentData = {
      studentName,
      studentEmail,
      studentStandard,
      studentRollNo,
    };
    if (studentName && studentEmail && studentStandard && studentRollNo) {
      axios
        .post(`http://localhost:8085/addStudent`, studentData)
        .then((res) => alert(res.data.message))
        .then(alert("please confirm "));
    } else {
      alert("Invalid");
    }

    //save the Student Detail into Local Storage
    localStorage.setItem("studentDetails", JSON.stringify(studentData));
  };

  //function for handle Student Name Input With Validation
  const handleInputStudentName = (e) => {
    const { value } = e.target;
    setStudentName(value);
    let nameLength = value.length;

    if (nameLength < 3) {
      setStudentNameError(true);
    }
    setStudentNameError(false);
  };

  //function For Input Student Email with email  Validation

  const handleInputStudentEmail = (e) => {
    const { value } = e.target;
    setStudentEmail(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setStudentEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setStudentEmailError(true);
    }
  };

  //function for Input Student standard 1 st to 12 th
  const handleInputStudentStandard = (e) => {
    const { value } = e.target;
    setStudentStandard(value);
    if (value > 12) {
      setStudentStandardError(true);
    } else {
      setStudentStandardError(false);
    }
  };

  const addStudentChange = () => {
    setModal(true);

    setStudentName("");
    setStudentEmail("");
    setStudentStandard("");
    setStudentRollNo("");
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
          <div>
            <h1>Add Student</h1>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="addStudentModal">
            <div>
              <label className="inputStudentLabel">Student Name </label>
              <input
                name="studentName"
                value={studentName}
                type="text"
                className="studentInput"
                autocomplete="off"
                onChange={handleInputStudentName}
              />
              {studentNameError ? (
                <span className="inputError">user not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel"> Student Email </label>
              <input
                name="studentEmail"
                value={studentEmail}
                type="email"
                className="studentInput"
                autocomplete="off"
                onChange={handleInputStudentEmail}
              />
              {studentEmailError ? (
                <span className="inputError">Email not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Student Standard</label>
              <input
                name="studentStandard"
                value={studentStandard}
                type="Number"
                autocomplete="off"
                className="studentInput"
                onChange={handleInputStudentStandard}
              />
              {studentStandardError ? (
                <span className="inputError">
                  class 1 <sup>st</sup> to 12 <sup>th</sup>
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Student Roll No.</label>
              <input
                name="studentRollNo"
                value={studentRollNo}
                type="text"
                autocomplete="off"
                className="studentInput"
                onChange={(e) => {
                  setStudentRollNo(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={addStudentData}
            className="addStudentBtn"
          >
            Add
          </button>
          {/*props Receive  from StudentMarkList   and Student List  for Display new add Item into the list */}
          <button onClick={prop.data} className="addStudentBtn">
            Confirm
          </button>
        </ModalBody>
      </Modal>
      <button onClick={addStudentChange} className="addStudentBtn">
        Add Student
      </button>
    </>
  );
};
export default AddStudent;
