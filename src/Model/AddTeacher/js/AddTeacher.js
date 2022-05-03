import React, { useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const AddTeacher = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);

  const [teacherNo, setTeacherNo] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherMobileNo, setTeacherMobileNo] = useState("");
  const [teacherEmailId, setTeacherEmailId] = useState("");

  //function use to save teacher data into data base using post API
  const addTeacherData = () => {
    console.log(
      "Teacher Data ",
      teacherNo,
      teacherName,
      teacherEmailId,
      teacherMobileNo
    );
    const teacherData = {
      teacherNo,
      teacherName,
      teacherEmailId,
      teacherMobileNo,
    };
    if (teacherNo && teacherName && teacherEmailId && teacherMobileNo) {
      axios
        .post("http://localhost:8085/addTeacher", teacherData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
    localStorage.setItem("teacherDetails", JSON.stringify(teacherData));
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
            <input
              name="teacherName"
              type="text"
              placeholder="teacher name"
              value={teacherName}
              onChange={(e) => {
                setTeacherName(e.target.value);
              }}
            />
          </div>
          <div>
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
            <input
              name="teacherMobileNo"
              type="number"
              placeholder="Mobile No."
              value={teacherMobileNo}
              onChange={(e) => {
                setTeacherMobileNo(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              name="teacherEmailId"
              type="text"
              placeholder=" Email Id"
              value={teacherEmailId}
              onChange={(e) => {
                setTeacherEmailId(e.target.value);
              }}
            />
          </div>

          <button type="submit" onClick={addTeacherData}>
            Add
          </button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Add Teacher</button>
    </>
  );
};
export default AddTeacher;
