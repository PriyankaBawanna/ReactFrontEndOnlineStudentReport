import React, { useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const AddTeacher = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);

  const [teacherData, setTeacherData] = useState({
    teacherNo: "",
    teacherName: "",
    teacherMobileNo: "",
    teacherEmailId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  const addTeacherData = () => {
    const { teacherNo, teacherName, teacherMobileNo, teacherEmailId } =
      teacherData;

    if (teacherNo && teacherName && teacherMobileNo && teacherEmailId) {
      axios
        .post("http://localhost:8085/addTeacher", teacherData)
        .then((res) => alert(res.data.message));
    } else {
      alert("please enter values");
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
            <input
              name="teacherName"
              type="text"
              placeholder="teacher name"
              value={teacherData.teacherName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="teacherNo"
              type="text"
              placeholder="enter the teacher Id "
              value={teacherData.teacherNo}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              name="teacherMobileNo"
              type="number"
              placeholder="Mobile No."
              value={teacherData.teacherMobileNo}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              name="teacherEmailId"
              type="text"
              placeholder=" Email Id"
              value={teacherData.teacherEmailId}
              onChange={handleChange}
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
