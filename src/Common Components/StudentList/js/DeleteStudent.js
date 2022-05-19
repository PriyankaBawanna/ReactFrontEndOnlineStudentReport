import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AddStudent from "../../../Model/AddStudent/js/AddStudent";

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
    parentData = await parentData.json();
    alert("Please Confirm ");
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
          <b>Do you Want Delete Student Data ?</b>
          <p>!!!..Parent Data will be also Delete </p>
          <button onClick={deleteStudent}>Ok</button>
          <button onClick={props.data}>Confirm</button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Delete</button>
    </>
  );
};
export default DeleteStudent;
