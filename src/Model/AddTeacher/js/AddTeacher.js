import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const AddTeacher = () => {
  /*Validation use state*/
  const [teacherNameError, setteacherNameError] = useState(false);
  const [teacherIdError, setteacherIdError] = useState(false);

  const [emailiderror, setemailiderror] = useState(false);
  const [TeacherMobileNoError, setTeacherMobileNoError] = useState(false);
  const [teacherEmail, setteacherEmail] = useState("");
  const [teacherId, setteacherId] = useState("");

  const [teacherNo, setteacherNo] = useState("");
  const [teacherName, setteacherName] = useState("");
  const [teacherMobileNo, setTeacherMobileNo] = useState("");

  /*modal useState*/
  const [modal, setModal] = useState(false);

  /*validation check functions */

  const handleValidteacherDetails = (e) => {
    e.preventDefault();
  };

  const teacherNameHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setteacherNameError(true);
    } else {
      setteacherNameError(false);
    }
    setteacherName(inputValue);
  };
  const teacherIdHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setteacherIdError(true);
    } else {
      setteacherIdError(false);
    }
    setteacherId(inputValue);
  };
  const teacherMobileNoError = (e) => {
    const mobileNo = e.target.value;
    console.log(mobileNo);
    if (mobileNo.length === 10) {
      console.log("valid");
      setTeacherMobileNoError(false);
    } else {
      console.log("Invalid ");
      setTeacherMobileNoError(true);
    }
    setTeacherMobileNo(mobileNo);
  };
  const teacherEmailIDError = (ee) => {
    let emailVal = ee.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailVal)) {
      console.log("email is valid ");

      setemailiderror(false);
    } else {
      setemailiderror(true);
    }
    setteacherEmail(emailVal);
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
          <div>ADD Teacher</div>
        </ModalHeader>
        <ModalBody>
          <from onSubmit={handleValidteacherDetails}>
            <div>
              <input
                type="text"
                placeholder="teacher name"
                onChange={teacherNameHandler}
              />
              {teacherNameError ? <span>user not valid</span> : ""}
            </div>
            <div>
              <input
                type="text"
                placeholder="enter the teacher Id "
                onChange={teacherIdHandler}
              />
              {teacherIdError ? <span>user not valid</span> : ""}
            </div>

            <div>
              <input
                type="number"
                placeholder="Mobile No."
                onChange={teacherMobileNoError}
              />
              {TeacherMobileNoError ? <span>not valid number </span> : ""}
            </div>

            <div>
              <input
                type="text"
                placeholder=" EmailId"
                onChange={teacherEmailIDError}
              />
              {emailiderror ? <span>not valid number </span> : ""}
            </div>

            <button type="submit">Add</button>
          </from>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Teacher</button>
    </>
  );
};
export default AddTeacher;
