import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import UpdateStudent from "../../../Model/UpdateStudent/js/updateStudent";

import "../css/studentInfo.css";
const StudentInformation = (p) => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentDataUpdate, SetStudentDataUpdate] = useState(false);
  const [studentId, setStudentId] = useState(p.studentId);
  const idOfStudent = studentId;

  //Term Student Data
  const [hindiMarks, setHindiMarks] = useState();
  const [englishMarks, setEnglishMarks] = useState();
  const [science, setScience] = useState();
  const [socialScience, setSocialScience] = useState();
  const [mathMarks, setMathMarks] = useState();
  const [Total, setTotal] = useState();
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");

  //Student Term two Marks
  const [hindiMarksTermTwo, setHindiMarksTermTwo] = useState();
  const [englishMarksTermTwo, setEnglishMarksTermTwo] = useState();
  const [scienceTermTwo, setScienceTermTwo] = useState();
  const [socialScienceTermTwo, setSocialScienceTermTwo] = useState();
  const [mathMarksTermTwo, setMathMarksTermTwo] = useState();
  const [TotalTermTwo, setTotalTermTwo] = useState();
  const [percentageTermTwo, setPercentageTermTwo] = useState("");
  const [gradeTermTwo, setGradeTermTwo] = useState("");

  //Student Term three Marks
  const [hindiMarksTermThree, setHindiMarksTermThree] = useState();
  const [englishMarksTermThree, setEnglishMarksTermThree] = useState();
  const [scienceTermThree, setScienceTermThree] = useState();
  const [socialScienceTermThree, setSocialScienceTermThree] = useState();
  const [mathMarksTermThree, setMathMarksTermThree] = useState();
  const [TotalTermThree, setTotalTermThree] = useState();
  const [percentageTermThree, setPercentageTermThree] = useState("");
  const [gradeTermThree, setGradeTermThree] = useState("");

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
    UpdateStudentData();
  }, []);

  //fetch Student Details
  const UpdateStudentData = async (p) => {
    console.log(studentName, studentEmail, studentStandard, studentRollNo);
    let UpdateStudentData = await fetch(
      `http://localhost:8085/studentUpdate/${p.studentId}`,
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
    console.log("Student update data");
    if (UpdateStudentData) {
      alert("student data update ");
    }

    setModal(false);
  };

  //fetch Student details on the list
  const getStudentDetails = async () => {
    let studentDetails = await fetch(
      `http://localhost:8085/studentInfo/${p.studentId}`
    );

    studentDetails = await studentDetails.json();
    setStudentName(studentDetails.studentName);
    console.log("Student Name ", studentDetails.studentName);
    setStudentEmail(studentDetails.studentEmail);
    setStudentStandard(studentDetails.studentStandard);
    setStudentRollNo(studentDetails.studentRollNo);
    setStudentId(studentDetails.studentId);
  };

  //save Term one data
  const addStudentMarks = () => {
    if (Total) {
      console.warn(
        "Student Marks",
        hindiMarks,
        englishMarks,
        science,
        socialScience,
        Total,
        percentage,
        grade
      );
      let StudentMarks = {
        hindiMarks,
        englishMarks,
        science,
        socialScience,
        mathMarks,
        Total,
        percentage,
        grade,
        studentName,
        studentEmail,
        studentStandard,
        studentRollNo,
      };
      fetch("http://localhost:8085/addStudentMarksStudent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(StudentMarks),
      }).then((result) => {
        result.json().then((res) => {
          console.warn("Student Response", res);
          alert("Approved successfully");
        });
      });
    } else {
      alert("First Need to calculate Total Marks Of the Student ");
    }
  };

  // Calling Term Two API for the  post  (saving) Data
  const addStudentMarksTermTwo = () => {
    if (TotalTermTwo) {
      console.warn(
        "Student Marks",

        englishMarksTermTwo,
        hindiMarksTermTwo,
        scienceTermTwo,
        socialScienceTermTwo,
        mathMarksTermTwo,
        TotalTermTwo,
        percentageTermTwo,
        gradeTermTwo
      );
      let StudentMarks = {
        englishMarksTermTwo,
        hindiMarksTermTwo,
        scienceTermTwo,
        socialScienceTermTwo,
        mathMarksTermTwo,
        TotalTermTwo,
        percentageTermTwo,
        gradeTermTwo,
        studentName,
        studentEmail,
        studentStandard,
        studentRollNo,
      };
      fetch("http://localhost:8085/addStudentMarksStudentTermTwo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(StudentMarks),
      }).then((result) => {
        result.json().then((res) => {
          console.warn("Student Response", res);
          alert("Approved successfully");
        });
      });
    } else {
      alert("First Need to calculate Total Marks Of the Student ");
    }
  };

  const addStudentMarksTermThree = () => {
    if (TotalTermThree) {
      console.warn(
        "Student Marks",

        englishMarksTermThree,
        hindiMarksTermThree,
        scienceTermThree,
        socialScienceTermThree,
        mathMarksTermThree,
        TotalTermThree,
        percentageTermThree,
        gradeTermThree
      );
      let StudentMarks = {
        englishMarksTermThree,
        hindiMarksTermThree,
        scienceTermThree,
        socialScienceTermThree,
        mathMarksTermThree,
        TotalTermThree,
        percentageTermThree,
        gradeTermThree,
        studentName,
        studentEmail,
        studentStandard,
        studentRollNo,
      };
      fetch("http://localhost:8085/addStudentMarksStudentTermThree", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(StudentMarks),
      }).then((result) => {
        result.json().then((res) => {
          console.warn("Student Response", res);
          alert("Approved successfully");
        });
      });
    } else {
      alert("First Need to calculate Total Marks Of the Student ");
    }
  };

  //calculating Term three Marks of the student
  const TotalMarksTermThree = () => {
    const TotalSumTermThree =
      Number(englishMarksTermThree) +
      Number(hindiMarksTermThree) +
      Number(mathMarksTermThree) +
      Number(scienceTermThree) +
      Number(socialScienceTermThree);
    setTotalTermThree(TotalSumTermThree);
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

  //calculating term one marks of the student
  const TotalMarks = () => {
    const TotalSum =
      Number(englishMarks) +
      Number(hindiMarks) +
      Number(mathMarks) +
      Number(science) +
      Number(socialScience);
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

  //calculating term two marks of the student
  const TotalMarksTermTwo = () => {
    const TotalSumTermTwo =
      Number(englishMarksTermTwo) +
      Number(hindiMarksTermTwo) +
      Number(mathMarksTermTwo) +
      Number(scienceTermTwo) +
      Number(socialScienceTermTwo);
    setTotalTermTwo(TotalSumTermTwo);
    console.log("total Marks ", TotalSumTermTwo);
    const percentageTermTwo = (TotalSumTermTwo / 500) * 100;
    setPercentageTermTwo(percentageTermTwo);

    if (percentageTermTwo < 29) {
      setGradeTermTwo("FAIL");
    } else if (percentageTermTwo >= 30 && percentageTermTwo <= 45) {
      setGradeTermTwo("c");
    } else if (percentageTermTwo >= 46 && percentageTermTwo <= 59) {
      setGradeTermTwo("B");
    } else if (percentageTermTwo >= 60 && percentageTermTwo <= 79) {
      setGradeTermTwo("A");
    } else if (percentageTermTwo >= 80) {
      setGradeTermTwo("A++");
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
                              value={englishMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setEnglishMarks(e.target.value);
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
                              value={hindiMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setHindiMarks(e.target.value);
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
                              value={science}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setScience(e.target.value);
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
                              value={socialScience}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setSocialScience(e.target.value);
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
                              value={mathMarks}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setMathMarks(e.target.value);
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
                              value={Total}
                              type="text"
                              className="inputMarks"
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
                            <p>Grade</p>
                          </td>

                          <td>{grade}</td>
                        </tr>
                        <tr>
                          <td>
                            <button onClick={addStudentMarks}>Approve</button>
                          </td>
                        </tr>
                      </table>
                    </>
                  );
                case "Term Two":
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
                              value={englishMarksTermTwo}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setEnglishMarksTermTwo(e.target.value);
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
                              value={hindiMarksTermTwo}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setHindiMarksTermTwo(e.target.value);
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
                              value={scienceTermTwo}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setScienceTermTwo(e.target.value);
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
                              value={socialScienceTermTwo}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setSocialScienceTermTwo(e.target.value);
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
                              value={mathMarksTermTwo}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setMathMarksTermTwo(e.target.value);
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
                              value={TotalTermTwo}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setTotalTermTwo(e.target.value);
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

                          <td>{grade}</td>
                        </tr>
                        <tr>
                          <td>
                            <button onClick={addStudentMarksTermTwo}>
                              Approve
                            </button>
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
                              value={englishMarksTermThree}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setEnglishMarksTermThree(e.target.value);
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
                              value={hindiMarksTermThree}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setHindiMarksTermThree(e.target.value);
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
                              value={scienceTermThree}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setScienceTermThree(e.target.value);
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
                              value={socialScienceTermThree}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setSocialScienceTermThree(e.target.value);
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
                              value={mathMarksTermThree}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setMathMarksTermThree(e.target.value);
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
                              value={TotalTermThree}
                              type="text"
                              className="inputMarks"
                              onChange={(e) => {
                                setTotalTermThree(e.target.value);
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
            <button onClick={() => setModal(false)}>Cancel </button>
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
