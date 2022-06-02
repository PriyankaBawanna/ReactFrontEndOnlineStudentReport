import React, { useState, useEffect } from "react";
import "../../../Model/AddStudent/css/AddStudent.css";
const TermTwo = (p) => {
  //Student  details
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [student_id, setStudent_id] = useState(p.student_id);
  //Term Two Marks
  const [hindiTermTwoMarks, setHindiTermTwoMarks] = useState();
  const [englishTermTwoMarks, setEnglishTermTwoMarks] = useState();
  const [scienceTermTwoMarks, setScienceTermTwoMarks] = useState();
  const [socialScienceTermTwoMarks, setSocialScienceTermTwoMarks] = useState();
  const [mathTermTwoMarks, setMathTermTwoMarks] = useState();
  const [totalTermTwoMarks, setTotalTermTwoMarks] = useState();
  const [percentageTermTwo, setPercentageTermTwo] = useState("");
  const [gradeTermTwo, setGradeTermTwo] = useState("");

  //get Student Details
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

  useEffect(() => {
    getStudentDetails();
  }, []);

  // Calling Term Two API for the  post  (saving) Data
  const addStudentMarksTermTwo = async () => {
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
  //Total The term Two Marks and Set the grade
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
    } else if (percentageTermTwo >= 30 && percentageTermTwo <= 45) {
      setGradeTermTwo("c");
    } else if (percentageTermTwo >= 46 && percentageTermTwo <= 59) {
      setGradeTermTwo("B");
    } else if (percentageTermTwo >= 60 && percentageTermTwo <= 79) {
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
              className="inputMarks StudentMarksTable"
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
              className="inputMarks StudentMarksTable"
              onChange={(e) => {
                setHindiTermTwoMarks(e.target.value);
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
              className="inputMarks StudentMarksTable"
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
              className="inputMarks StudentMarksTable"
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
              className="inputMarks StudentMarksTable"
              onChange={(e) => {
                setMathTermTwoMarks(e.target.value);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <button className="markSheetBtn " onClick={TotalMarksTermTwo}>
              Total
            </button>
          </td>
          <td>500</td>
          <td>
            <input
              name="text"
              value={totalTermTwoMarks}
              type="text"
              className="inputMarks StudentMarksTable"
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
            <button className="markSheetBtn " onClick={addStudentMarksTermTwo}>
              Approve
            </button>
            {/*function props Receive  from the studentMarksList Component  for render the  Student Mark List */}
            <button className="markSheetBtn " onClick={p.studentList}>
              Confirm
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};
export default TermTwo;
