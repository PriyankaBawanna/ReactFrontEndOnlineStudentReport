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
              onChange={(e) => setTeacherName(e.target.value)}
            />
          </div>
          <div>
            <input
              name="teacherEmailId"
              value={teacherEmailId}
              type="email"
              placeholder="Enter Parent Email id "
              onChange={(e) => {
                setTeacherEmailId(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              name="teacherMobileNo"
              value={teacherMobileNo}
              type="Number"
              placeholder="Mobile Number"
              onChange={(e) => {
                setTeacherMobileNo(e.target.value);
              }}
            />
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
