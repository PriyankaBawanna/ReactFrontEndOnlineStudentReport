import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/AddParent.css";
const AddParent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);

  /*use state for basic validation*/
  const [parentNameError, setparentNameError] = useState(false);
  const [studentRollNoError, setstudentRollNoError] = useState(false);

  const [emailiderror, setemailiderror] = useState(false);
  const [parentMobileError, setparentMobileNoError] = useState(false);

  const [parentEmail, setparentEmail] = useState("");
  const [studentIdRollNo, setstudentIdRollNo] = useState("");

  const [parentNo, setparentNo] = useState("");
  const [parentName, setparentName] = useState("");
  const [parentMobileNo, setparentMobileNo] = useState("");

  /* function check basic validations*/
  const handleValidparentDetails = (e) => {
    e.preventDefault();
  };

  const parentNameHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setparentNameError(true);
    } else {
      setparentNameError(false);
    }
    setparentName(inputValue);
  };
  const studentIdRollNoHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setstudentRollNoError(true);
    } else {
      setstudentRollNoError(false);
    }
    setstudentIdRollNo(inputValue);
  };
  const parentMobileNoError = (e) => {
    const mobileNo = e.target.value;
    console.log(mobileNo);
    if (mobileNo.length === 10) {
      console.log("valid");
      setparentMobileNoError(false);
    } else {
      console.log("Invalid ");
      setparentMobileNoError(true);
    }
    setparentMobileNo(mobileNo);
  };
  const parentEmailIDError = (ee) => {
    let emailVal = ee.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailVal)) {
      console.log("email is valid ");

      setemailiderror(false);
    } else {
      setemailiderror(true);
    }
    setparentEmail(emailVal);
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
          <from onSubmit={handleValidparentDetails}>
            <div>
              <input
                type="text"
                placeholder="parent name"
                onChange={parentNameHandler}
              />
              {parentNameError ? <span>user not valid</span> : ""}
            </div>
            <div>
              <input
                type="text"
                placeholder="student Roll No. "
                onChange={studentIdRollNoHandler}
              />
              {studentRollNoError ? <span>enter valid rollNumber</span> : ""}
            </div>

            <div>
              <input
                type="number"
                placeholder="Mobile No."
                onChange={parentMobileNoError}
              />
              {parentMobileError ? <span>not valid number </span> : ""}
            </div>

            <div>
              <input
                type="text"
                placeholder=" Email Id"
                onChange={parentEmailIDError}
              />
              {emailiderror ? <span>not valid number </span> : ""}
            </div>

            <button type="submit">Add</button>
          </from>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Parent</button>
    </>
  );
};
export default AddParent;
