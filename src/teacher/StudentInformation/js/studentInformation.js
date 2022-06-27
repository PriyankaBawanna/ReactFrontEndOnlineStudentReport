import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
//This Component is part of the teacher dashboard where with help of this  component teacher can be enter the Student Marks And make Result
import "../css/studentInfo.css";
import "../../../shared/addStudent/css/addStudent.css";
import TermThree from "./termThree";
import TermTwo from "./termTwo";
const StudentInformation = (p) => {
  //for student Data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [rollNo, setRollNo] = useState("");
  const [term, setTermOne] = useState(1);

  //Term  One Student Data
  const [sub1, setSub1] = useState();
  const [sub2, setSub2] = useState();
  const [sub3, setSub3] = useState();
  const [sub4, setSub4] = useState();
  const [sub5, setSub5] = useState();
  const [total, setTotal] = useState();
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");

  const [modal, setModal] = useState(false);
  const [selects, setSelectTerm] = useState(false);

  useEffect(() => {
    getStudentDetails();
  }, []);
  //post Method for saving Term One Student data (Student Subject Mark's and Student Information )
  const addStudentMarks = async () => {
    if (
      email &&
      name &&
      rollNo &&
      sub1 &&
      sub2 &&
      sub3 &&
      sub4 &&
      sub5 &&
      total &&
      percentage &&
      term &&
      grade
    ) {
      let addTermOneMarks = await fetch(`http://localhost:8085/addTermMarks`, {
        method: "post",
        body: JSON.stringify({
          name,
          email,
          term,
          rollNo,
          sub2,
          sub1,
          sub3,
          sub4,
          sub5,
          total,
          percentage,
          grade,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      addTermOneMarks = await addTermOneMarks.json();
      alert("marks add");
      setModal(false);
    } else {
      alert("Please enter all filed ");
    }
  };

  //fetch Student details on the list  which is show the student Name ,Roll Number and Marks
  const getStudentDetails = async () => {
    let studentDetails = await fetch(
      `http://localhost:8085/infoUser/${p.studentId}`
    );
    console.log("data", studentDetails);
    studentDetails = await studentDetails.json();
    setName(studentDetails.name);
    setEmail(studentDetails.email);

    setRollNo(studentDetails.rollNo);
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
          <div>
            <h1>Student Mark Sheet</h1>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="StudentInfo">
            <div>
              <b className="inputStudentLabel">Student Name</b>
              <input
                name="name"
                value={name}
                type="text"
                className="updateStudentInput"
                placeholder="Student Name "
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <b className="inputStudentLabel">Parent Email</b>
              <input
                name="email"
                value={email}
                type="email"
                className="updateStudentInput"
                placeholder="Enter Parent Email id "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="studentdetailscol">
              <b className="inputStudentLabel">Roll No </b>
              <input
                name="rollNo"
                value={rollNo}
                type="text"
                className="updateStudentInput"
                placeholder="Enter student RollNo "
                onChange={(e) => {
                  setRollNo(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Drop Down With 3 options (Term One ,Term Two and Term Three exam card) */}
          <div className="resultOfStudent">
            <select
              value={selects}
              onChange={(e) => setSelectTerm(e.target.value)}
              className="selectTerm"
            >
              <option>select the Term</option>
              <option>Term One</option>
              <option>Term Two</option>
              <option>Term Three</option>
            </select>
            {(() => {
              switch (selects) {
                case "Term One":
                  const TotalMarks = () => {
                    const TotalSum =
                      Number(sub2) +
                      Number(sub1) +
                      Number(sub5) +
                      Number(sub3) +
                      Number(sub4);
                    setTotal(TotalSum);
                    console.log("total Marks ", TotalSum);
                    const percentage = (TotalSum / 500) * 100;
                    setPercentage(percentage);

                    if (percentage < 29) {
                      setGrade("FAIL");
                    } else if (percentage >= 30 && percentage <= 45) {
                      setGrade("c");
                    } else if (percentage >= 46 && percentage <= 59) {
                      setGrade("B");
                    } else if (percentage >= 60 && percentage <= 79) {
                      setGrade("A");
                    } else if (percentage >= 80) {
                      setGrade("A++");
                    }
                  };

                  return (
                    <>
                      <h3>Term One </h3>
                      <table>
                        <tr>
                          <th>Subject</th>
                          <th>MAX Marks</th>
                          <th>Marks Obtained</th>
                        </tr>
                        <tr>
                          <td>English</td>
                          <td>100</td>
                          <td>
                            <input
                              name="inputMarks"
                              value={sub2}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setSub2(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Hindi</td>
                          <td>100</td>
                          <td>
                            <input
                              name="inputMarks"
                              value={sub1}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setSub1(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Science</td>
                          <td>100</td>
                          <td>
                            <input
                              name="inputMarks"
                              value={sub3}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setSub3(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Social Science</td>
                          <td>100</td>
                          <td>
                            <input
                              name="inputMarks"
                              value={sub4}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setSub4(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Maths</td>
                          <td>100</td>
                          <td>
                            <input
                              name="text"
                              value={sub5}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setSub5(e.target.value);
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <button
                              className="markSheetBtn  StudentMarksTable"
                              onClick={TotalMarks}
                            >
                              Total
                            </button>
                          </td>
                          <td>500</td>
                          <td>
                            <input
                              name="text"
                              value={total}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setTotal(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>percentage</p>
                          </td>

                          <td>{percentage}%</td>
                        </tr>
                        <tr>
                          <td>
                            <p>grade</p>
                          </td>

                          <td>{grade}</td>
                        </tr>
                        <tr>
                          <td>
                            <button
                              className="markSheetBtn "
                              onClick={addStudentMarks}
                            >
                              Approve
                            </button>
                            <button
                              className="markSheetBtn "
                              onClick={p.studentList}
                            >
                              Confirm
                            </button>
                          </td>
                        </tr>
                      </table>
                    </>
                  );
                case "Term Two":
                  return (
                    <TermTwo
                      student_id={p.student_id}
                      studentList={p.studentList}
                    />
                  );

                case "Term Three":
                  return (
                    <TermThree
                      student_id={p.student_id}
                      studentList={p.studentList}
                    />
                  );

                default:
                  return null;
              }
            })()}
          </div>
          <div className="btnGroup">
            <button
              className="markSheetBtn"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)} class="deleteStudentBtn">
        Edit
      </button>
    </>
  );
};
export default StudentInformation;
