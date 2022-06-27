import React, { useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/AddTeacher.css";
import "../../../shared/addStudent/css/addStudent.css";
const AddTeacher = (props) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);

  const [role, setRole] = useState("Teacher");
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [mobileNoError, setMobileNoError] = useState(false);
  const [teacherEmailError, setTeacherEmailError] = useState(false);
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherPasswordError, setTeacherPasswordError] = useState(false);
  //function use to save teacher data into data base using post API
  const addTeacherData = () => {
    const teacherData = {
      empId,
      role,
      name,
      email,
      mobileNo,
      teacherPassword,
    };
    if (empId && name && email && mobileNo) {
      axios
        .post("http://localhost:8085/register", teacherData)
        .then((res) => alert(res.data.message))
        .then(props.teacherData);
    } else {
      alert("Invalid");
    }
    localStorage.setItem("teacherDetails", JSON.stringify(teacherData));
    setModal(false);
    setEmpId("");
    setName("");
    setMobileNo("");
    setEmail("");
    setTeacherPassword("");
  };

  //handle Teacher Name Input
  const handleNameInput = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  //handle Teacher 10 digit  Mobile No
  const handleMobileNumber = (e) => {
    const { value } = e.target;
    setMobileNo(value);
    if (value.length < 10) {
      setMobileNoError(true);
    } else {
      setMobileNoError(false);
    }
  };

  //email Id Validation
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setTeacherEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setTeacherEmailError(true);
    }
  };

  //password  Validation
  const handleInputTeacherPassword = (e) => {
    const { value } = e.target;
    setTeacherPassword(value);

    if (value.length < 5) {
      setTeacherPasswordError(true);
    } else setTeacherPasswordError(false);
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
            <h1>ADD Teacher</h1>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <label className="inputStudentLabel">Teacher Name </label>
            <input
              name="name"
              type="text"
              placeholder="teacher name"
              value={name}
              className="studentInput"
              onChange={handleNameInput}
            />
            {nameError ? (
              <span className="inputError">user not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <label className="inputStudentLabel">Teacher Id </label>
            <input
              name="empId"
              type="text"
              placeholder="enter the teacher Id "
              value={empId}
              className="studentInput"
              onChange={(e) => {
                setEmpId(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="inputStudentLabel">Teacher Mobile No </label>
            <input
              name="mobileNo"
              type="number"
              placeholder="Mobile No."
              value={mobileNo}
              className="studentInput"
              onChange={handleMobileNumber}
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
            <label className="inputStudentLabel">Teacher Email Id </label>
            <input
              name="email"
              type="text"
              placeholder=" Email Id"
              className="studentInput"
              value={email}
              onChange={handleEmail}
            />
            {teacherEmailError ? (
              <span className="inputError">Email not valid</span>
            ) : (
              <span></span>
            )}
          </div>

          <div>
            <label className="inputStudentLabel">Teacher Password </label>
            <input
              name="teacherPassword"
              type="Password"
              placeholder="Teacher Password "
              className="studentInput"
              value={teacherPassword}
              onChange={handleInputTeacherPassword}
            />
            {teacherPasswordError ? (
              <span className="inputError">minimum five characters</span>
            ) : (
              <span></span>
            )}
          </div>

          <button
            type="submit"
            onClick={addTeacherData}
            className="addStudentBtn"
          >
            Add
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="addTeacherBtn">
        Add Teacher
      </button>
    </>
  );
};
export default AddTeacher;
