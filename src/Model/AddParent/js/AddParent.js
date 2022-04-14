import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/AddParent.css";
import axios from "axios";
const AddParent = () => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  const [parentData, setparentData] = useState({
    parentName: "",
    studentRollNo: "",
    mobilenumber: "",
    parentEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setparentData({ ...parentData, [name]: value });
  };

  const addParentData = () => {
    const { parentName, studentRollNo, mobilenumber, parentEmail } = parentData;

    if (parentName && studentRollNo && mobilenumber && parentEmail) {
      axios
        .post("http://localhost:8085/addParent", parentData)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
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
          <div>ADD Parent</div>
        </ModalHeader>
        <ModalBody>
          <div>
            <input
              name="parentName"
              type="text"
              value={parentData.parentName}
              placeholder="user name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="studentRollNo"
              type="text"
              value={parentData.studentRollNo}
              placeholder="student Roll No. "
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              name="mobilenumber"
              type="number"
              placeholder="mobilenumber"
              value={parentData.mobilenumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              name="parentEmail"
              value={parentData.parentEmail}
              type="email"
              placeholder="email"
              onChange={handleChange}
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
