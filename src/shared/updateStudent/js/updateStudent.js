import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../../addStudent/css/addStudent.css";
/*Edit And Update Student data*/
const UpdateStudent = (props) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validation use state*/

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [rollNo, setRollNo] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [studentStandardError, setStudentStandardError] = useState(false);

  useEffect(() => {
    getStudentDetails();
  }, []);

  console.log("Student Id ", props.studentId);

  //getting Student details for edit
  const getStudentDetails = async () => {
    let studentDetails = await fetch(
      `http://localhost:8085/infoUser/${props.studentId}`
    );

    studentDetails = await studentDetails.json();
    setName(studentDetails.name);
    setEmail(studentDetails.email);

    setRollNo(studentDetails.rollNo);
  };
  //updated data Add into the Data Base
  const UpdateStudentData = async () => {
    let UpdateStudentData = await fetch(
      `http://localhost:8085/updateUser/${props.studentId}`,
      {
        method: "Put",
        body: JSON.stringify({
          name,
          email,
          rollNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    UpdateStudentData = await UpdateStudentData.json().then(props.data);
    setModal(false);
  };
  //Input handle Student Name
  const handleInputname = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  //Input handle Student Email
  const handleemail = (e) => {
    const { value } = e.target;
    setEmail(value);

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setEmailError(true);
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
          <div>
            <h1>Update Student</h1>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="addStudentModal">
            <div>
              <label className="inputStudentLabel"> Student Name</label>
              <input
                name="name"
                value={name}
                type="text"
                className="studentInput"
                placeholder="Student Name "
                onChange={handleInputname}
              />
              {nameError ? (
                <span className="inputError">user not valid</span>
              ) : (
                <span></span>
              )}
            </div>
            <div>
              <label className="inputStudentLabel">Student Email</label>
              <input
                name="email"
                value={email}
                type="email"
                className="studentInput"
                placeholder="Enter Parent Email id "
                onChange={handleemail}
              />
              {emailError ? (
                <span className="inputError">Email not valid</span>
              ) : (
                <span></span>
              )}
            </div>

            <div>
              <label className="inputStudentLabel">Student Roll No </label>
              <input
                name="rollNo"
                value={rollNo}
                type="text"
                className="studentInput"
                placeholder="Enter student RollNo "
                onChange={(e) => {
                  setRollNo(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="addStudentBtn"
            type="submit"
            onClick={UpdateStudentData}
          >
            Update
          </button>

          <button className="addStudentBtn" onClick={() => setModal(false)}>
            cancel
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="updateStudentBtn">
        Edit
      </button>
    </>
  );
};
export default UpdateStudent;
