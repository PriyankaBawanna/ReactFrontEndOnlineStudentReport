import React, { useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
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
  //function use to save teacher data into data base using post API
  const addTeacherData = () => {
    const teacherData = {
      teacherNo,
      teacherName,
      teacherEmailId,
      teacherMobileNo,
    };
    if (teacherNo && teacherName && teacherEmailId && teacherMobileNo) {
      axios
        .post("http://localhost:8085/addTeacher", teacherData)
        .then((res) => alert(res.data.message))
        .then(alert("please confirm "));
    } else {
      alert("Invalid");
    }
    localStorage.setItem("teacherDetails", JSON.stringify(teacherData));
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
          <div>
            <label>Teacher Name </label>
            <input
              name="teacherName"
              type="text"
              placeholder="teacher name"
              value={teacherName}
              onChange={handleTeacherNameInput}
            />
            {teacherNameError ? <span>user not valid</span> : <span></span>}
          </div>
          <div>
            <label>Teacher Id </label>
            <input
              name="teacherNo"
              type="text"
              placeholder="enter the teacher Id "
              value={teacherNo}
              onChange={(e) => {
                setTeacherNo(e.target.value);
              }}
            />
          </div>

          <div>
            <label>Teacher Mobile No </label>
            <input
              name="teacherMobileNo"
              type="number"
              placeholder="Mobile No."
              value={teacherMobileNo}
              onChange={handleMobileNumber}
            />
            {teacherMobileNoError ? (
              <span>Mobile Number Must be equal to 10 digit</span>
            ) : (
              <span></span>
            )}
          </div>

          <div>
            <label>Teacher Email Id </label>
            <input
              name="teacherEmailId"
              type="text"
              placeholder=" Email Id"
              value={teacherEmailId}
              onChange={handleTeacherEmailId}
            />
            {teacherEmailError ? <span>Email not valid</span> : <span></span>}
          </div>

          <button type="submit" onClick={addTeacherData}>
            Add
          </button>
          <button onClick={props.teacherData}>Confirm</button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Teacher</button>
    </>
  );
};
export default AddTeacher;
