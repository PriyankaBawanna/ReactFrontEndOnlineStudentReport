import React, { useEffect, useState } from "react";
import "../../../Model/AddStudent/css/AddStudent.css";
const TermThree = (p) => {
  //student details
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentStandard, setStudentStandard] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");

  const [student_id, setStudent_id] = useState(p.student_id);
  //student Term Three Marks
  const [hindiTermThreeMarks, setHindiTermThreeMarks] = useState();
  const [englishTermThreeMarks, setEnglishTermThreeMarks] = useState();
  const [scienceTermThreeMarks, setScienceTermThreeMarks] = useState();
  const [socialScienceTermThreeMarks, setSocialScienceTermThreeMarks] =
    useState();
  const [mathTermThreeMarks, setMathTermThreeMarks] = useState();
  const [totalTermThreeMarks, setTotalTermThreeMarks] = useState();
  const [percentageTermThree, setPercentageTermThree] = useState("");
  const [gradeTermThree, setGradeTermThree] = useState("TotalMark");

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

  //add student term three Marks
  const addStudentMarksTermThree = async () => {
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
  //Total the term three Marks
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

  return (
    <>
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
                className="inputMarks "
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
                className="inputMarks StudentMarksTable"
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
                className="inputMarks StudentMarksTable"
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
                className="inputMarks StudentMarksTable"
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
                className="inputMarks StudentMarksTable"
                onChange={(e) => {
                  setMathTermThreeMarks(e.target.value);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <button className="markSheetBtn " onClick={TotalMarksTermThree}>
                Total
              </button>
            </td>
            <td>500</td>
            <td>
              <input
                name="text"
                value={totalTermThreeMarks}
                type="text"
                className="inputMarks StudentMarksTable"
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
              <button
                className="markSheetBtn "
                onClick={addStudentMarksTermThree}
              >
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
    </>
  );
};
export default TermThree;
