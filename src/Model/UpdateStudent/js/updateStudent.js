import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
/*Edit And Update Student data*/
const UpdateStudent = (props) => {
  /*modal useState*/
  const [modal, setModal] = useState(false);
  /*input form state validation use state*/

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");

  const [studentNameError, setStudentNameError] = useState(false);
  const [studentEmailError, setStudentEmailError] = useState(false);
  const [studentStandardError, setStudentStandardError] = useState(false);

  useEffect(() => {
    getStudentDetails();
  }, []);

  //getting Student details for edit
  const getStudentDetails = async () => {
    let studentDetails = await fetch(
      `http://localhost:8085/studentInfo/${props.studentId}`
    );

    studentDetails = await studentDetails.json();
    setStudentName(studentDetails.studentName);
    setStudentEmail(studentDetails.studentEmail);
    setStudentStandard(studentDetails.studentStandard);
    setStudentRollNo(studentDetails.studentRollNo);
  };
  //updated data Add into the Data Base
  const UpdateStudentData = async () => {
    let UpdateStudentData = await fetch(
      `http://localhost:8085/studentUpdate/${props.studentId}`,
      {
        method: "Put",
        body: JSON.stringify({
          studentName,
          studentEmail,
          studentStandard,
          studentRollNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    UpdateStudentData = await UpdateStudentData.json();

    alert("please Confirm");
  };
  //Input handle Student Name
  const handleInputStudentName = (e) => {
    const { value } = e.target;
    setStudentName(value);
    if (value.length < 3) {
      setStudentNameError(true);
    } else {
      setStudentNameError(false);
    }
  };

  //Input handle Student Email
  const handleStudentEmail = (e) => {
    const { value } = e.target;
    setStudentEmail(value);

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setStudentEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setStudentEmailError(true);
    }
  };

  //student Input for handle standard
  const handleStudentStandard = (e) => {
    const { value } = e.target;
    setStudentStandard(value);
    let studentStandard = e.target.value;

    if (studentStandard > 12) {
      setStudentStandardError(true);
    } else {
      setStudentStandardError(false);
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
          <div>Update Student</div>
        </ModalHeader>

        <ModalBody>
          <div>
            <label>Student Name</label>
            <input
              name="studentName"
              value={studentName}
              type="text"
              placeholder="Student Name "
              onChange={handleInputStudentName}
            />
            {studentNameError ? <span>user not valid</span> : <span></span>}
          </div>
          <div>
            <label>Student Email</label>
            <input
              name="studentEmail"
              value={studentEmail}
              type="email"
              placeholder="Enter Parent Email id "
              onChange={handleStudentEmail}
            />
            {studentEmailError ? <span>Email not valid</span> : <span></span>}
          </div>
          <div>
            <label>Student Standard</label>
            <input
              name="studentStandard"
              value={studentStandard}
              type="Number"
              placeholder="Enter student Standard "
              onChange={handleStudentStandard}
            />
            {studentStandardError ? (
              <span> class 1 st to 12 th </span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <label>Student Roll No </label>
            <input
              name="studentRollNo"
              value={studentRollNo}
              type="text"
              placeholder="Enter student RollNo "
              onChange={(e) => {
                setStudentRollNo(e.target.value);
              }}
            />
          </div>

          <button type="submit" onClick={UpdateStudentData}>
            Update
          </button>
          {/*function receive as  props  from StudentList Component   for rerender the updated  Student List  */}
          <button onClick={props.data}>Confirm</button>
          <button onClick={() => setModal(false)}>cancel</button>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Edit</button>
    </>
  );
};
export default UpdateStudent;
