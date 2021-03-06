import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/AddParent.css";
import axios from "axios";
const AddParent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  const [parentName, setParentName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [parentEmail, setParentEmail] = useState("");

  //function use to save parent data into data base using post API
  const addParentData = () => {
    console.log(
      "Parent Data ",
      parentName,
      studentRollNo,
      mobileNumber,
      parentEmail
    );
    const parentData = { parentName, studentRollNo, mobileNumber, parentEmail };

    if (parentName && studentRollNo && mobileNumber && parentEmail) {
      axios
        .post("http://localhost:8085/addParent", parentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
    console.log("Student Parent  Data ", parentData);
    localStorage.setItem("parentDetails", JSON.stringify(parentData));
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
          <div>
            <input
              name="parentName"
              type="text"
              value={parentName}
              placeholder="user name"
              onChange={(e) => {
                setParentName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              name="studentRollNo"
              type="text"
              value={studentRollNo}
              placeholder="student Roll No. "
              onChange={(e) => {
                setStudentRollNo(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              name=" mobileNumber"
              type="number"
              placeholder=" mobileNumber"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              name="parentEmail"
              value={parentEmail}
              type="email"
              placeholder="email"
              onChange={(e) => {
                setParentEmail(e.target.value);
              }}
            />
          </div>

          <button type="submit" onClick={addParentData}>
            Add Parent Details
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Parent</button>
    </>
  );
};
export default AddParent;
