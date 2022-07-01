import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
//This Component is part of the teacher dashboard where with help of this  component teacher can be enter the Student Marks And make Result
import "../css/studentInfo.css";
import "../../../shared/addStudent/css/addStudent.css";
import TermThree from "./termThree";
import TermTwo from "./termTwo";
const StudentInformation = (p) => {
  //for student Data
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");

  const [student_id, setStudent_id] = useState(p.student_id);

  //Term  One Student Data
  const [hindiTermOneMarks, setHindiTermOneMarks] = useState();
  const [englishTermOneMarks, setEnglishTermOneMarks] = useState();
  const [scienceTermOneMarks, setScienceTermOneMarks] = useState();
  const [socialScienceTermOneMarks, setSocialScienceTermOneMarks] = useState();
  const [mathTermOneMarks, setMathTermOneMarks] = useState();
  const [totalTermOneMarks, setTotalTermOneMarks] = useState();
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
      studentEmail &&
      studentName &&
      studentRollNo &&
      studentStandard &&
      hindiTermOneMarks &&
      englishTermOneMarks &&
      scienceTermOneMarks &&
      socialScienceTermOneMarks &&
      mathTermOneMarks &&
      totalTermOneMarks &&
      percentage &&
      grade
    ) {
      let addTermOneMarks = await fetch(
        `http://localhost:8085/studentUpdate/${p.student_id}`,
        {
          method: "put",
          body: JSON.stringify({
            studentName,
            studentEmail,
            studentStandard,
            studentRollNo,
            englishTermOneMarks,
            hindiTermOneMarks,
            scienceTermOneMarks,
            socialScienceTermOneMarks,
            mathTermOneMarks,
            totalTermOneMarks,
            percentage,
            grade,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      addTermOneMarks = await addTermOneMarks.json();
      if (addTermOneMarks) {
        alert("Please Confirm ");
      }
    } else {
      alert("Please enter all filed ");
    }
  };

  //fetch Student details on the list  which is show the student Name ,Roll Number and Marks
  const getStudentDetails = async () => {
    let studentDetails = await fetch(
      `http://localhost:8085/studentInfo/${p.student_id}`
    );

    studentDetails = await studentDetails.json();
    setStudentName(studentDetails.studentName);
    console.log("Student Name ", studentDetails.studentName);
    setStudentEmail(studentDetails.studentEmail);
    setStudentStandard(studentDetails.studentStandard);
    setStudentRollNo(studentDetails.studentRollNo);
    setStudent_id(studentDetails.student_id);
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
                name="studentName"
                value={studentName}
                type="text"
                className="updateStudentInput"
                placeholder="Student Name "
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div>
              <b className="inputStudentLabel">Parent Email</b>
              <input
                name="studentEmail"
                value={studentEmail}
                type="email"
                className="updateStudentInput"
                placeholder="Enter Parent Email id "
                onChange={(e) => {
                  setStudentEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <b className="inputStudentLabel">Student Standard</b>
              <input
                name="studentStandard"
                value={studentStandard}
                type="Number"
                className="updateStudentInput"
                placeholder="Enter student Standard "
                onChange={(e) => {
                  setStudentStandard(e.target.value);
                }}
              />
            </div>
            <div className="studentdetailscol">
              <b className="inputStudentLabel">Roll No </b>
              <input
                name="studentRollNo"
                value={studentRollNo}
                type="text"
                className="updateStudentInput"
                placeholder="Enter student RollNo "
                onChange={(e) => {
                  setStudentRollNo(e.target.value);
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
                      Number(englishTermOneMarks) +
                      Number(hindiTermOneMarks) +
                      Number(mathTermOneMarks) +
                      Number(scienceTermOneMarks) +
                      Number(socialScienceTermOneMarks);
                    setTotalTermOneMarks(TotalSum);
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
                              value={englishTermOneMarks}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setEnglishTermOneMarks(e.target.value);
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
                              value={hindiTermOneMarks}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setHindiTermOneMarks(e.target.value);
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
                              value={scienceTermOneMarks}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setScienceTermOneMarks(e.target.value);
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
                              value={socialScienceTermOneMarks}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setSocialScienceTermOneMarks(e.target.value);
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
                              value={mathTermOneMarks}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setMathTermOneMarks(e.target.value);
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
                              value={totalTermOneMarks}
                              type="text"
                              className="inputMarks StudentMarksTable"
                              onChange={(e) => {
                                setTotalTermOneMarks(e.target.value);
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
                            <p>Grade</p>
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