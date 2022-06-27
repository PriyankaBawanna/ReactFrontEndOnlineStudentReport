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
  const [role, setRole] = useState("Parent");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [mobileNoError, setMobileNoError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  //function use  to save parent data into data base using post API
  const addParentData = () => {
    const parentData = {
      role,
      name,
      rollNo,
      mobileNo,
      email,
      password,
    };

    if (role && name && rollNo && mobileNo && password) {
      axios
        .post(`http://localhost:8085/register`, parentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
    //set the parent Data into Local storage
    localStorage.setItem("parentDetails", JSON.stringify(parentData));
    setModal(false);
    setName("");
    setRollNo("");
    setMobileNo("");
    setEmail("");
  };

  //Email Validation
  const handleInputemail = (e) => {
    const { value } = e.target;
    setEmail(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setEmailError(true);
    }
  };

  //password Validation
  const handleInputpassword = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (value.length < 5) {
      setPasswordError(true);
    } else setPasswordError(false);
  };

  //handle Teacher 10 digit  Mobile No
  const handlemobileNo = (e) => {
    const { value } = e.target;
    setMobileNo(value);
    if (value.length === 10) {
      setMobileNoError(false);
    } else {
      setMobileNoError(true);
    }
  };

  //Parent Name Validation name length should be greater than 3
  const handlenameInput = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
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
                name="name"
                type="text"
                value={name}
                className="studentInput"
                placeholder="user name"
                onChange={handlenameInput}
              />
              {nameError ? (
                <span className="inputError">user not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Student Roll No</label>
              <input
                name="rollNo"
                type="text"
                value={rollNo}
                className="studentInput"
                placeholder="student Roll No. "
                onChange={(e) => {
                  setRollNo(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="inputStudentLabel">Mobile No</label>
              <input
                name=" mobileNo"
                type="number"
                placeholder=" mobileNo"
                value={mobileNo}
                className="studentInput"
                onChange={handlemobileNo}
              />
              {mobileNoError ? (
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
                name="email"
                value={email}
                type="email"
                className="studentInput"
                placeholder="email"
                onChange={handleInputemail}
              />
              {emailError ? (
                <span className="inputError">Email not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Parent Password </label>
              <input
                name="password"
                type="Password"
                placeholder="Parent Password "
                className="studentInput"
                value={password}
                onChange={handleInputpassword}
              />
              {passwordError ? (
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
