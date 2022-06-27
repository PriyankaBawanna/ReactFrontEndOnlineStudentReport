import axios from "axios";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import "../css/addStudent.css";
const AddStudent = (prop) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validation use state*/

  const [role, setRole] = useState("Student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [rollNo, setRollNo] = useState("");
  // const [confirm, setConfirm] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  //function use to save student data into data base using post API
  const addStudentData = () => {
    const studentData = {
      role,
      name,
      email,
      rollNo,
    };
    if (role && name && email && rollNo) {
      axios
        .post(`http://localhost:8085/register`, studentData)
        .then((res) => alert(res.data.message))
        .then(prop.data);
    } else {
      alert("Invalid");
    }

    //save the Student Detail into Local Storage
    localStorage.setItem("studentDetails", JSON.stringify(studentData));
    setModal(false);
  };

  //function for handle Student Name Input With Validation
  const handleInputname = (e) => {
    const { value } = e.target;
    setName(value);
    let nameLength = value.length;

    if (nameLength < 3) {
      setNameError(true);
    }
    setNameError(false);
  };

  //function For Input Student Email with email  Validation

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

  //function for Input Student standard 1 st to 12 th

  const addStudentChange = () => {
    setModal(true);
    setName("");
    setEmail("");
    setRollNo("");
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
                name="name"
                value={name}
                type="text"
                className="studentInput"
                autocomplete="off"
                onChange={handleInputname}
              />
              {nameError ? (
                <span className="inputError">user not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel"> Student Email </label>
              <input
                name="email"
                value={email}
                type="email"
                className="studentInput"
                autocomplete="off"
                onChange={handleInputemail}
              />
              {emailError ? (
                <span className="inputError">Email not valid</span>
              ) : (
                <span></span>
              )}
            </div>

            <div>
              <label className="inputStudentLabel">Student Roll No.</label>
              <input
                name="rollNo"
                value={rollNo}
                type="text"
                autocomplete="off"
                className="studentInput"
                onChange={(e) => {
                  setRollNo(e.target.value);
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
        </ModalBody>
      </Modal>
      <button onClick={addStudentChange} className="addStudentBtn">
        Add Student
      </button>
    </>
  );
};
export default AddStudent;
