import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import "../css/AddStudent.css";
import "../css/AddStudent.css";
const AddStudent = () => {
  /*input form state validattion use state*/
  const [studentNameError, setstudentNameError] = useState(false);
  const [studentRollError, setstudentRollError] = useState(false);
  const [studentClassError, setstudentClassError] = useState(false);
  const [parentMobileNoError, setparentMobileNumberError] = useState(false);
  const [parentEmailIDError, setparentEmailIDError] = useState(false);

  const [parentEmail, setParentEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentlass] = useState("");
  const [studentParnetNo, setstudentParnetNo] = useState("");
  const [StudentName, setStudentName] = useState("");

  /*modal useState*/
  const [modal, setModal] = useState(false);

  /*Basic validation*/
  const handleValidStudentDetails = (e) => {
    e.preventDefault();
  };
  const StudentClassHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value >= 1 && value <= 12) {
      console.log("valid");
      setstudentClassError(false);
    } else {
      console.log("Invalid ");
      setstudentClassError(true);
    }
    setStudentlass(value);
  };

  const studentNameHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setstudentNameError(true);
    } else {
      setstudentNameError(false);
    }
    setStudentName(inputValue);
  };
  const studentRollNumberHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setstudentRollError(true);
    } else {
      setstudentRollError(false);
    }
    setRollNumber(inputValue);
  };
  const StudentparentMobileNoError = (e) => {
    const mobileNo = e.target.value;
    console.log(mobileNo);
    if (mobileNo.length === 10) {
      console.log("valid");
      setparentMobileNumberError(false);
    } else {
      console.log("Invalid ");
      setparentMobileNumberError(true);
    }
    setstudentParnetNo(mobileNo);
  };
  const StudentparentEmailIDError = (ee) => {
    let emailVal = ee.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailVal)) {
      console.log("email is valid ");

      setparentEmailIDError(false);
    } else {
      setparentEmailIDError(true);
    }
    setParentEmail(emailVal);
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
          <from onSubmit={handleValidStudentDetails}>
            <div>
              <input
                type="text"
                placeholder="Student name"
                onChange={studentNameHandler}
              />
              {studentNameError ? <span>user not valid</span> : ""}
            </div>
            <div>
              <input
                type="text"
                placeholder="Student Roll Number "
                onChange={studentRollNumberHandler}
              />
              {studentRollError ? <span>user not valid</span> : ""}
            </div>
            <div>
              <input
                type="number"
                placeholder="Student class "
                onChange={StudentClassHandler}
              />
              {studentClassError ? <span>please enter valid class</span> : " "}
            </div>

            <div>
              <input
                type="number"
                placeholder="Parent Mobile No."
                onChange={StudentparentMobileNoError}
              />
              {parentMobileNoError ? <span>not valid number </span> : ""}
            </div>

            <div>
              <input
                type="text"
                placeholder="Parent EmailId"
                onChange={StudentparentEmailIDError}
              />
              {parentEmailIDError ? <span>not valid number </span> : ""}
            </div>

            <button type="submit">Add</button>
          </from>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Student</button>
    </>
  );
};
export default AddStudent;
