import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/AddParent.css";
import "../../AddStudent/css/AddStudent.css";
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
    const parentData = { parentName, studentRollNo, mobileNumber, parentEmail };

    if (parentName && studentRollNo && mobileNumber && parentEmail) {
      axios
        .post(`http://localhost:8085/addParent/${studentRollNo}`, parentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
    //set the parent Data into Local storage
    localStorage.setItem("parentDetails", JSON.stringify(parentData));
    setModal(false);
    setParentName("");
    setStudentRollNo("");
    setMobileNumber("");
    setParentEmail("");
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
          <div className="addStudentModal">
            <div>
              <label className="inputStudentLabel">Parent Name</label>
              <input
                name="parentName"
                type="text"
                value={parentName}
                className="studentInput"
                placeholder="user name"
                onChange={(e) => {
                  setParentName(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="inputStudentLabel">Student Roll No</label>
              <input
                name="studentRollNo"
                type="text"
                value={studentRollNo}
                className="studentInput"
                placeholder="student Roll No. "
                onChange={(e) => {
                  setStudentRollNo(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="inputStudentLabel">Mobile No</label>
              <input
                name=" mobileNumber"
                type="number"
                placeholder=" mobileNumber"
                value={mobileNumber}
                className="studentInput"
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="inputStudentLabel">Parent Email</label>
              <input
                name="parentEmail"
                value={parentEmail}
                type="email"
                className="studentInput"
                placeholder="email"
                onChange={(e) => {
                  setParentEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="addStudentBtn"
            type="submit"
            onClick={addParentData}
          >
            Add Parent Details
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="addParentBtn">
        Add Parent
      </button>
    </>
  );
};
export default AddParent;
