import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const UpdateTeacher = (prop) => {
  console.log("Teacher Id  is :", prop.teacherId);
  const [modal, setModal] = useState(false);

  const [teacherNo, setTeacherNo] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherMobileNo, setTeacherMobileNo] = useState("");
  const [teacherEmailId, setTeacherEmailId] = useState("");

  const [teacherNameError, setTeacherNameError] = useState(false);
  const [teacherMobileNoError, setTeacherMobileNoError] = useState(false);
  const [teacherEmailError, setTeacherEmailError] = useState(false);
  //
  useEffect(() => {
    getTeacherDetails();
  }, []);

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
    updateTeacherData = await updateTeacherData.json();
    console.log("teacher data is update ");
    setModal(false);
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
          <div>Update Teacher Data</div>
        </ModalHeader>

        <ModalBody>
          <div>
            <input
              name="teacherName"
              value={teacherName}
              type="text"
              placeholder="Student Name "
              onChange={(e) => {
                setTeacherName(e.target.value);
                let nameLength = e.target.value.length;
                console.log("user Name ", nameLength);
                if (nameLength < 3) {
                  setTeacherNameError(true);
                } else {
                  setTeacherNameError(false);
                }
              }}
            />
            {teacherNameError ? <span>user not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="teacherEmailId"
              value={teacherEmailId}
              type="email"
              placeholder="Enter Parent Email id "
              onChange={(e) => {
                setTeacherEmailId(e.target.value);
                let emailValidation = e.target.value;
                console.log("email Validation ", emailValidation);
                const regEx =
                  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
                if (regEx.test(emailValidation)) {
                  console.log("emailValidation is Valid");
                  setTeacherEmailError(false);
                } else if (
                  !regEx.test(emailValidation) &&
                  emailValidation !== ""
                ) {
                  console.log("emailValidation is Not Valid");
                  setTeacherEmailError(true);
                }
              }}
            />
            {teacherEmailError ? <span>Email not valid</span> : <span></span>}
          </div>
          <div>
            <input
              name="teacherMobileNo"
              value={teacherMobileNo}
              type="Number"
              placeholder="Mobile Number"
              onChange={(e) => {
                setTeacherMobileNo(e.target.value);
                let passwordError = e.target.value;
                if (passwordError.length < 10) {
                  setTeacherMobileNoError(true);
                } else {
                  setTeacherMobileNoError(false);
                }
              }}
            />
            {teacherMobileNoError ? (
              <span>Mobile Number Must be equal to 10 digit</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <input
              name="teacherNo"
              value={teacherNo}
              type="text"
              placeholder="Teacher's ID "
              onChange={(e) => {
                setTeacherNo(e.target.value);
              }}
            />
          </div>

          <button type="submit" onClick={updateTeacherInfo}>
            Update
          </button>
          <button onClick={() => setModal(false)}>cancel</button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Edit</button>
    </>
  );
};
export default UpdateTeacher;
