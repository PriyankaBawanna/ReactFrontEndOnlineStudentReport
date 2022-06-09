import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/addParent.css";
import "../../../shared/addStudent/css/addStudent.css";
import axios from "axios";
/*
for adding information about the parents
*/
const AddParent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  const [parentName, setParentName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [parentEmail, setParentEmail] = useState("");
  const [parentPassword, setParentPassword] = useState("");
  const [parentPasswordError, setParentPasswordError] = useState(false);
  const [parentEmailError, setParentEmailError] = useState(false);
  const [parentNameError, setParentNameError] = useState(false);
  //function use  to save parent data into data base using post API
  const addParentData = () => {
    const parentData = {
      parentName,
      studentRollNo,
      mobileNumber,
      parentEmail,
      parentPassword,
    };

    if (parentName && studentRollNo && mobileNumber && parentPassword) {
      axios
        .post(`http://localhost:8085/addParent/${studentRollNo}`, parentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
    //set the parent Data into Local storage
    localStorage.setItem("parentDetails", JSON.stringify(parentData));
    setModal(false);
    setParentName("");
    setStudentRollNo("");
    setMobileNumber("");
    setParentEmail("");
  };

  //Email Validation
  const handleInputParentEmail = (e) => {
    const { value } = e.target;
    setParentEmail(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setParentEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setParentEmailError(true);
    }
  };

  //password Validation
  const handleInputParentPassword = (e) => {
    const { value } = e.target;
    setParentPassword(value);

    if (value.length < 5) {
      setParentPasswordError(true);
    } else setParentPasswordError(false);
  };

  //handle Teacher 10 digit  Mobile No
  const handleMobileNumber = (e) => {
    const { value } = e.target;
    setMobileNumber(value);
    if (value.length === 10) {
      setMobileNumberError(false);
    } else {
      setMobileNumberError(true);
    }
  };

  //Parent Name Validation name length should be greater than 3
  const handleParentNameInput = (e) => {
    const { value } = e.target;
    setParentName(value);
    if (value.length < 3) {
      setParentNameError(true);
    } else {
      setParentNameError(false);
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
          <div>ADD Parent</div>
        </ModalHeader>
        <ModalBody>
          <div className="addStudentModal">
            <div>
              <label className="inputStudentLabel">Parent Name</label>
              <input
                name="parentName"
                type="text"
                value={parentName}
                className="studentInput"
                placeholder="user name"
                onChange={handleParentNameInput}
              />
              {parentNameError ? (
                <span className="inputError">user not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Student Roll No</label>
              <input
                name="studentRollNo"
                type="text"
                value={studentRollNo}
                className="studentInput"
                placeholder="student Roll No. "
                onChange={(e) => {
                  setStudentRollNo(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="inputStudentLabel">Mobile No</label>
              <input
                name=" mobileNumber"
                type="number"
                placeholder=" mobileNumber"
                value={mobileNumber}
                className="studentInput"
                onChange={handleMobileNumber}
              />
              {mobileNumberError ? (
                <span className="inputError">
                  Mobile Number Must be equal to 10 digit
                </span>
              ) : (
                <span></span>
              )}
            </div>

            <div>
              <label className="inputStudentLabel">Parent Email</label>
              <input
                name="parentEmail"
                value={parentEmail}
                type="email"
                className="studentInput"
                placeholder="email"
                onChange={handleInputParentEmail}
              />
              {parentEmailError ? (
                <span className="inputError">Email not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Parent Password </label>
              <input
                name="parentPassword"
                type="Password"
                placeholder="Parent Password "
                className="studentInput"
                value={parentPassword}
                onChange={handleInputParentPassword}
              />
              {parentPasswordError ? (
                <span className="inputError">minimum five characters</span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <button
            className="addStudentBtn"
            type="submit"
            onClick={addParentData}
          >
            Add Parent Details
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="addParentBtn">
        Add Parent
      </button>
    </>
  );
};
export default AddParent;
