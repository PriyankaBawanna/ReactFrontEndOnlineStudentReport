import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/updateTeacher.css";

import "../../../shared/addStudent/css/addStudent.css";
//Edit Teacher data
const UpdateTeacher = (prop) => {
  const [modal, setModal] = useState(false);

  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [mobileNoError, setMobileNoError] = useState(false);
  const [teacherEmailError, setTeacherEmailError] = useState(false);

  useEffect(() => {
    getTeacherDetails();
  }, []);

  //fetch Teacher details based on the user click

  console.log("Teacher ID ", prop.teacherId);

  const getTeacherDetails = async () => {
    let teacherDetails = await fetch(
      `http://localhost:8085/infoUser/${prop.teacherId}`
    );

    teacherDetails = await teacherDetails.json();
    setName(teacherDetails.name);
    setEmail(teacherDetails.email);
    setMobileNo(teacherDetails.mobileNo);
    setEmpId(teacherDetails.empId);
  };

  //update the Teacher Data
  const updateTeacherInfo = async () => {
    let updateTeacherData = await fetch(
      `http://localhost:8085/updateUser/${prop.teacherId}`,
      {
        method: "put",
        body: JSON.stringify({
          empId,
          name,
          mobileNo,
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    updateTeacherData = await updateTeacherData.json().then(prop.data);
    setModal(false);
  };
  //Input Name handle
  const inputHandlename = (e) => {
    setName(e.target.value);
    let nameLength = e.target.value.length;

    if (nameLength < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  //Input Teacher Email Handle
  const inputHandleTeacherEmail = (e) => {
    setEmail(e.target.value);
    let emailValidation = e.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailValidation)) {
      setTeacherEmailError(false);
    } else if (!regEx.test(emailValidation) && emailValidation !== "") {
      setTeacherEmailError(true);
    }
  };
  //Teacher mobile no handle
  const inputHandlemobileNo = (e) => {
    setMobileNo(e.target.value);
    let passwordError = e.target.value;
    if (passwordError.length < 10) {
      setMobileNoError(true);
    } else {
      setMobileNoError(false);
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
            <h1>Update Teacher Data</h1>
          </div>
        </ModalHeader>

        <ModalBody>
          <div>
            <label className="inputStudentLabel">Teacher Name</label>
            <input
              name="name"
              value={name}
              type="text"
              className="studentInput"
              placeholder="Student Name "
              onChange={inputHandlename}
            />
            {nameError ? (
              <span className="inputError">user not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <label className="inputStudentLabel">Teacher Email Id </label>
            <input
              name="email"
              value={email}
              type="email"
              className="studentInput"
              placeholder="Enter Parent Email id "
              onChange={inputHandleTeacherEmail}
            />
            {teacherEmailError ? (
              <span className="inputError">Email not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <label className="inputStudentLabel">Teacher Mobile No </label>
            <input
              name="mobileNo"
              value={mobileNo}
              type="Number"
              className="studentInput"
              placeholder="Mobile Number"
              onChange={inputHandlemobileNo}
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
            <label className="inputStudentLabel">Teacher Id </label>
            <input
              name="empId"
              value={empId}
              type="text"
              className="studentInput"
              placeholder="Teacher's ID "
              onChange={(e) => {
                setEmpId(e.target.value);
              }}
            />
          </div>

          <button
            className="addStudentBtn"
            type="submit"
            onClick={updateTeacherInfo}
          >
            Update
          </button>
          <button className="addStudentBtn" onClick={() => setModal(false)}>
            cancel
          </button>
          {/** receive Function As props from  TeacherList to re render the Teacher List  */}
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="updateTeacher">
        Edit
      </button>
    </>
  );
};
export default UpdateTeacher;
