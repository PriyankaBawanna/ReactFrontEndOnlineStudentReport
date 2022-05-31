import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/StudentList.css";
import "../../../Model/AddStudent/css/AddStudent.css";

//props receive from StudentList and StudentMarksList for Delete the Student Data as well As Parent Data
const DeleteStudent = (props) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  const [deleteStudentData, setDeleteStudentData] = useState("");

  //delete the student data with relative parent Data
  const deleteStudent = async (studentRollNo) => {
    console.log("user _id", studentRollNo);
    let result = await fetch(
      `http://localhost:8085/StudentDelete/${props.studentRollNo}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();

    setDeleteStudentData("true");

    let parentData = await fetch(
      `http://localhost:8085/parentDelete/${props.studentRollNo}`,
      {
        method: "Delete",
      }
    );
    parentData = await parentData.json().then(props.data);
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
        <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>
        <ModalBody>
          <div className="deleteStudentPop">
            <h5>Do you Want Delete Student Data ?</h5>
            <p>Parent Data will be also Deleted...! </p>
            <button className="addStudentBtn" onClick={deleteStudent}>
              Ok
            </button>
          </div>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} className="deleteStudentBtn">
        Delete
      </button>
    </>
  );
};
export default DeleteStudent;
