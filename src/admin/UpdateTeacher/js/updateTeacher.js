import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/updateTeacher.css";

import "../../../shared/addStudent/css/addStudent.css";
//Edit Teacher data
const UpdateTeacher = (prop) => {
  const [modal, setModal] = useState(false);

  const [teacherNo, setTeacherNo] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherMobileNo, setTeacherMobileNo] = useState("");
  const [teacherEmailId, setTeacherEmailId] = useState("");

  const [teacherNameError, setTeacherNameError] = useState(false);
  const [teacherMobileNoError, setTeacherMobileNoError] = useState(false);
  const [teacherEmailError, setTeacherEmailError] = useState(false);

  useEffect(() => {
    getTeacherDetails();
  }, []);

  //fetch Teacher details based on the user click

  const getTeacherDetails = async () => {
    let teacherDetails = await fetch(
      `http://localhost:8085/teacherInfo/${prop.teacherId}`
    );

    teacherDetails = await teacherDetails.json();
    setTeacherName(teacherDetails.teacherName);
    setTeacherEmailId(teacherDetails.teacherEmailId);
    setTeacherMobileNo(teacherDetails.teacherMobileNo);
    setTeacherNo(teacherDetails.teacherNo);
  };

  //update the Teacher Data
  const updateTeacherInfo = async () => {
    let updateTeacherData = await fetch(
      `http://localhost:8085/teacherUpdate/${prop.teacherId}`,
      {
        method: "put",
        body: JSON.stringify({
          teacherNo,
          teacherName,
          teacherMobileNo,
          teacherEmailId,
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
  const inputHandleTeacherName = (e) => {
    setTeacherName(e.target.value);
    let nameLength = e.target.value.length;

    if (nameLength < 3) {
      setTeacherNameError(true);
    } else {
      setTeacherNameError(false);
    }
  };
  //Input Teacher Email Handle
  const inputHandleTeacherEmail = (e) => {
    setTeacherEmailId(e.target.value);
    let emailValidation = e.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailValidation)) {
      setTeacherEmailError(false);
    } else if (!regEx.test(emailValidation) && emailValidation !== "") {
      setTeacherEmailError(true);
    }
  };
  //Teacher mobile no handle
  const inputHandleTeacherMobileNo = (e) => {
    setTeacherMobileNo(e.target.value);
    let passwordError = e.target.value;
    if (passwordError.length < 10) {
      setTeacherMobileNoError(true);
    } else {
      setTeacherMobileNoError(false);
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
              name="teacherName"
              value={teacherName}
              type="text"
              className="studentInput"
              placeholder="Student Name "
              onChange={inputHandleTeacherName}
            />
            {teacherNameError ? (
              <span className="inputError">user not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <label className="inputStudentLabel">Teacher Email Id </label>
            <input
              name="teacherEmailId"
              value={teacherEmailId}
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
              name="teacherMobileNo"
              value={teacherMobileNo}
              type="Number"
              className="studentInput"
              placeholder="Mobile Number"
              onChange={inputHandleTeacherMobileNo}
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
            <label className="inputStudentLabel">Teacher Id </label>
            <input
              name="teacherNo"
              value={teacherNo}
              type="text"
              className="studentInput"
              placeholder="Teacher's ID "
              onChange={(e) => {
                setTeacherNo(e.target.value);
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
