import React, { useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/AddTeacher.css";
import "../../../shared/addStudent/css/addStudent.css";
const AddTeacher = (props) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);

  const [teacherNo, setTeacherNo] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherMobileNo, setTeacherMobileNo] = useState("");
  const [teacherEmailId, setTeacherEmailId] = useState("");
  const [teacherNameError, setTeacherNameError] = useState(false);
  const [teacherMobileNoError, setTeacherMobileNoError] = useState(false);
  const [teacherEmailError, setTeacherEmailError] = useState(false);
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherPasswordError, setTeacherPasswordError] = useState(false);
  //function use to save teacher data into data base using post API
  const addTeacherData = () => {
    const teacherData = {
      teacherNo,
      teacherName,
      teacherEmailId,
      teacherMobileNo,
      teacherPassword,
    };
    if (teacherNo && teacherName && teacherEmailId && teacherMobileNo) {
      axios
        .post("http://localhost:8085/addTeacher", teacherData)
        .then((res) => alert(res.data.message))
        .then(props.teacherData);
    } else {
      alert("Invalid");
    }
    localStorage.setItem("teacherDetails", JSON.stringify(teacherData));
    setModal(false);
    setTeacherNo("");
    setTeacherName("");
    setTeacherMobileNo("");
    setTeacherEmailId("");
    setTeacherPassword("");
  };

  //handle Teacher Name Input
  const handleTeacherNameInput = (e) => {
    const { value } = e.target;
    setTeacherName(value);
    if (value.length < 3) {
      setTeacherNameError(true);
    } else {
      setTeacherNameError(false);
    }
  };

  //handle Teacher 10 digit  Mobile No \
  const handleMobileNumber = (e) => {
    const { value } = e.target;
    setTeacherMobileNo(value);
    if (value.length < 10) {
      setTeacherMobileNoError(true);
    } else {
      setTeacherMobileNoError(false);
    }
  };

  const handleTeacherEmailId = (e) => {
    const { value } = e.target;
    setTeacherEmailId(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setTeacherEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setTeacherEmailError(true);
    }
  };

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
              name="teacherName"
              type="text"
              placeholder="teacher name"
              value={teacherName}
              className="studentInput"
              onChange={handleTeacherNameInput}
            />
            {teacherNameError ? (
              <span className="inputError">user not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <label className="inputStudentLabel">Teacher Id </label>
            <input
              name="teacherNo"
              type="text"
              placeholder="enter the teacher Id "
              value={teacherNo}
              className="studentInput"
              onChange={(e) => {
                setTeacherNo(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="inputStudentLabel">Teacher Mobile No </label>
            <input
              name="teacherMobileNo"
              type="number"
              placeholder="Mobile No."
              value={teacherMobileNo}
              className="studentInput"
              onChange={handleMobileNumber}
            />
            {teacherMobileNoError ? (
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
              name="teacherEmailId"
              type="text"
              placeholder=" Email Id"
              className="studentInput"
              value={teacherEmailId}
              onChange={handleTeacherEmailId}
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
