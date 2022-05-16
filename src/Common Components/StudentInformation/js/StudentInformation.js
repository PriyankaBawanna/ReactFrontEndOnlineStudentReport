import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
//This Component is part of the teacher dashboard where with help of this  component teacher can be enter the Student Marks And make Result
import "../css/studentInfo.css";
const StudentInformation = (p) => {
  const [termTotal, setTermTotal] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentDataUpdate, SetStudentDataUpdate] = useState(false);
  const [student_id, setStudent_id] = useState(p.student_id);
  const idOfStudent = student_id;

  //Term Student Data
  const [hindiTermOneMarks, setHindiTermOneMarks] = useState();
  const [englishTermOneMarks, setEnglishTermOneMarks] = useState();
  const [scienceTermOneMarks, setScienceTermOneMarks] = useState();
  const [socialScienceTermOneMarks, setSocialScienceTermOneMarks] = useState();
  const [mathTermOneMarks, setMathTermOneMarks] = useState();
  const [totalTermOneMarks, setTotalTermOneMarks] = useState();
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");

  //Student Term two Marks
  const [hindiTermTwoMarks, sethindiTermTwoMarks] = useState();
  const [englishTermTwoMarks, setEnglishTermTwoMarks] = useState();
  const [scienceTermTwoMarks, setScienceTermTwoMarks] = useState();
  const [socialScienceTermTwoMarks, setSocialScienceTermTwoMarks] = useState();
  const [mathTermTwoMarks, setMathTermTwoMarks] = useState();
  const [totalTermTwoMarks, setTotalTermTwoMarks] = useState();
  const [percentageTermTwo, setPercentageTermTwo] = useState("");
  const [gradeTermTwo, setGradeTermTwo] = useState("");

  //Student Term three Marks
  const [hindiTermThreeMarks, setHindiTermThreeMarks] = useState();
  const [englishTermThreeMarks, setEnglishTermThreeMarks] = useState();
  const [scienceTermThreeMarks, setScienceTermThreeMarks] = useState();
  const [socialScienceTermThreeMarks, setSocialScienceTermThreeMarks] =
    useState();
  const [mathTermThreeMarks, setMathTermThreeMarks] = useState();
  const [totalTermThreeMarks, setTotalTermThreeMarks] = useState();
  const [percentageTermThree, setPercentageTermThree] = useState("");
  const [gradeTermThree, setGradeTermThree] = useState("TotalMark");

  console.log(
    "Student Id in StudentInformation using useState  paas into the variable ",
    idOfStudent
  );
  const [modal, setModal] = useState(false);
  const [selects, setSelectTerm] = useState(false);
  const selection = selects;
  const updateStudent = 0;

  // console.log("Student Data : ", studentDataUpdate);
  useEffect(() => {
    getStudentDetails();
    // UpdateStudentData();
  }, []);
  //post Method for saving Term One Student data (Student Subject Mark's and Student Information )
  const addStudentMarks = async () => {
    if (totalTermOneMarks) {
      console.warn(
        "Student Marks",
        studentEmail,
        studentName,
        studentRollNo,
        studentStandard,
        hindiTermOneMarks,
        englishTermOneMarks,
        scienceTermOneMarks,
        socialScienceTermOneMarks,
        mathTermOneMarks,
        totalTermOneMarks,
        percentage,
        grade
      );
    }
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

  // Calling Term Two API for the  post  (saving) Data
  const addStudentMarksTermTwo = async () => {
    if (totalTermTwoMarks) {
      console.warn(
        "Student Marks",
        studentEmail,
        studentName,
        studentRollNo,
        studentStandard,
        englishTermTwoMarks,
        hindiTermTwoMarks,
        scienceTermTwoMarks,
        scienceTermTwoMarks,
        socialScienceTermTwoMarks,
        mathTermTwoMarks,
        totalTermTwoMarks
      );
    }

    let addTermTwoMarks = await fetch(
      `http://localhost:8085/studentUpdate/${p.student_id}`,
      {
        method: "put",
        body: JSON.stringify({
          studentName,
          studentEmail,
          studentStandard,
          studentRollNo,
          englishTermTwoMarks,
          hindiTermTwoMarks,
          scienceTermTwoMarks,
          scienceTermTwoMarks,
          socialScienceTermTwoMarks,
          mathTermTwoMarks,
          totalTermTwoMarks,
          percentageTermTwo,
          gradeTermTwo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    addTermTwoMarks = await addTermTwoMarks.json();
    if (addTermTwoMarks) {
      alert("Please Confirm ");
    } else {
      alert("Please enter all filed ");
    }
  };

  //Term Three is used To Print

  const addStudentMarksTermThree = async () => {
    if (totalTermThreeMarks) {
      console.log(
        "Student Term Three ",
        studentEmail,
        studentName,
        studentRollNo,
        studentStandard,
        englishTermThreeMarks,
        hindiTermThreeMarks,
        scienceTermThreeMarks,
        socialScienceTermThreeMarks,
        mathTermThreeMarks,
        totalTermThreeMarks
      );
    }

    let addTermThreeMarks = await fetch(
      `http://localhost:8085/studentUpdate/${p.student_id}`,
      {
        method: "put",
        body: JSON.stringify({
          studentEmail,
          studentName,
          studentRollNo,
          studentStandard,
          englishTermThreeMarks,
          hindiTermThreeMarks,
          scienceTermThreeMarks,
          socialScienceTermThreeMarks,
          mathTermThreeMarks,
          totalTermThreeMarks,
          percentageTermThree,
          gradeTermThree,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    addTermThreeMarks = await addTermThreeMarks.json();
    if (addTermThreeMarks) {
      alert("Please Confirm ");
    } else {
      alert("Please enter all filed ");
    }
  };

  //calculating Term three Marks of the student
  const TotalMarksTermThree = () => {
    const TotalSumTermThree =
      Number(englishTermThreeMarks) +
      Number(hindiTermThreeMarks) +
      Number(mathTermThreeMarks) +
      Number(scienceTermThreeMarks) +
      Number(socialScienceTermThreeMarks);
    setTotalTermThreeMarks(TotalSumTermThree);
    console.log("total Marks ", TotalSumTermThree);
    const percentageTermThree = (TotalSumTermThree / 500) * 100;
    setPercentageTermThree(percentageTermThree);

    if (percentageTermThree < 29) {
      setGradeTermThree("FAIL");
    } else if (percentageTermThree >= 30 && percentageTermThree <= 45) {
      setGradeTermThree("c");
    } else if (percentageTermThree >= 46 && percentageTermThree <= 59) {
      setGradeTermThree("B");
    } else if (percentageTermThree >= 60 && percentageTermThree <= 79) {
      setGradeTermThree("A");
    } else if (percentageTermThree >= 80) {
      setGradeTermThree("A++");
    }
  };

  useEffect(() => {});
  return (
    <>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        className="ModelOutLine"
      >
        <ModalHeader toggle={() => setModal(!modal)}>
          <div>Student Marks Sheet</div>
        </ModalHeader>

        <ModalBody>
          <div className="StudentInfo">
            <div>
              <b>Student Name</b>
              <input
                name="studentName"
                value={studentName}
                type="text"
                placeholder="Student Name "
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div>
              <b>Parent Email</b>
              <input
                name="studentEmail"
                value={studentEmail}
                type="email"
                placeholder="Enter Parent Email id "
                onChange={(e) => {
                  setStudentEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <b>Student Standard</b>
              <input
                name="studentStandard"
                value={studentStandard}
                type="Number"
                placeholder="Enter student Standard "
                onChange={(e) => {
                  setStudentStandard(e.target.value);
                }}
              />
            </div>
            <div className="studentdetailscol">
              <b>Roll No </b>
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
          </div>

          <div className="resultOfStudent">
            <select
              value={selects}
              onChange={(e) => setSelectTerm(e.target.value)}
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
                              className="inputMarks"
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
                              className="inputMarks"
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
                              className="inputMarks"
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
                              className="inputMarks"
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
                              className="inputMarks"
                              onChange={(e) => {
                                setMathTermOneMarks(e.target.value);
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <button onClick={TotalMarks}>Total</button>
                          </td>
                          <td>500</td>
                          <td>
                            <input
                              name="text"
                              value={totalTermOneMarks}
                              type="text"
                              className="inputMarks"
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
                            <button onClick={addStudentMarks}>Approve</button>
                            <button onClick={p.studentList}>Confirm</button>
                          </td>
                        </tr>
                      </table>
                    </>
                  );
                case "Term Two":
                  const TotalMarksTermTwo = () => {
                    const TotalSumTermTwo =
                      Number(englishTermTwoMarks) +
                      Number(hindiTermTwoMarks) +
                      Number(mathTermTwoMarks) +
                      Number(scienceTermTwoMarks) +
                      Number(socialScienceTermTwoMarks);
                    setTotalTermTwoMarks(TotalSumTermTwo);
                    console.log("total Marks ", TotalSumTermTwo);
                    const percentageTermTwo = (TotalSumTermTwo / 500) * 100;
                    setPercentageTermTwo(percentageTermTwo);

                    if (percentageTermTwo < 29) {
                      setGradeTermTwo("FAIL");
                    } else if (
                      percentageTermTwo >= 30 &&
                      percentageTermTwo <= 45
                    ) {
                      setGradeTermTwo("c");
                    } else if (
                      percentageTermTwo >= 46 &&
                      percentageTermTwo <= 59
                    ) {
                      setGradeTermTwo("B");
                    } else if (
                      percentageTermTwo >= 60 &&
                      percentageTermTwo <= 79
                    ) {
                      setGradeTermTwo("A");
                    } else if (percentageTermTwo >= 80) {
                      setGradeTermTwo("A++");
                    }
                    console.log("Student Grader Term Two", gradeTermTwo);
                  };

                  return (
                    <>
                      <h3>Term Two </h3>
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
                              value={englishTermTwoMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setEnglishTermTwoMarks(e.target.value);
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
                              value={hindiTermTwoMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                sethindiTermTwoMarks(e.target.value);
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
                              value={scienceTermTwoMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setScienceTermTwoMarks(e.target.value);
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
                              value={socialScienceTermTwoMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setSocialScienceTermTwoMarks(e.target.value);
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
                              value={mathTermTwoMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setMathTermTwoMarks(e.target.value);
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <button onClick={TotalMarksTermTwo}>Total</button>
                          </td>
                          <td>500</td>
                          <td>
                            <input
                              name="text"
                              value={totalTermTwoMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setTotalTermTwoMarks(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>percentage</p>
                          </td>

                          <td>{percentageTermTwo}%</td>
                        </tr>
                        <tr>
                          <td>
                            <p>Grade</p>
                          </td>

                          <td>{gradeTermTwo}</td>
                        </tr>
                        <tr>
                          <td>
                            <button onClick={addStudentMarksTermTwo}>
                              Approve
                            </button>
                            <button onClick={p.studentList}>Confirm</button>
                          </td>
                        </tr>
                      </table>
                    </>
                  );

                case "Term Three":
                  return (
                    <>
                      <h3>Term Three </h3>
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
                              value={englishTermThreeMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setEnglishTermThreeMarks(e.target.value);
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
                              value={hindiTermThreeMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setHindiTermThreeMarks(e.target.value);
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
                              value={scienceTermThreeMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setScienceTermThreeMarks(e.target.value);
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
                              value={socialScienceTermThreeMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setSocialScienceTermThreeMarks(e.target.value);
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
                              value={mathTermThreeMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setMathTermThreeMarks(e.target.value);
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <button onClick={TotalMarksTermThree}>Total</button>
                          </td>
                          <td>500</td>
                          <td>
                            <input
                              name="text"
                              value={totalTermThreeMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setTotalTermThreeMarks(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>percentage</p>
                          </td>

                          <td>{percentageTermThree}%</td>
                        </tr>
                        <tr>
                          <td>
                            <p>Grade</p>
                          </td>

                          <td>{gradeTermThree}</td>
                        </tr>
                        <tr>
                          <td>
                            <button onClick={addStudentMarksTermThree}>
                              Approve
                            </button>
                            <button onClick={p.studentList}>Confirm</button>
                          </td>
                        </tr>
                      </table>
                    </>
                  );

                default:
                  return null;
              }
            })()}
          </div>
          <div className="btngroup">
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel{" "}
            </button>
            {/* <button type="submit" onClick={UpdateStudentData}>
              Submit
            </button> */}
          </div>
        </ModalBody>
      </Modal>
      <button onClick={() => setModal(true)}>Edit </button>
    </>
  );
};
export default StudentInformation;
