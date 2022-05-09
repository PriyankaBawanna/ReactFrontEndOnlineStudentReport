import "../css/ParentDashboard.css";

import React, { useEffect, useState } from "react";

const TermTwoMarkSheet = () => {
  const [termTwo, settermTwo] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);

  useEffect(() => {
    termTwoResult();
    studentDetails();
  }, []);
  const termTwoResult = () => {
    fetch(
      `http://localhost:8085/StudentResultTermTwo/${getStudentRollNo}`
    ).then((result) => {
      result.json().then((res) => {
        settermTwo(res);
      });
    });
  };
  console.log("termTwo Data ", termTwo);
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  console.log("Getting Student Details ", parentDetails);
  const getStudentRollNo = parentDetails.studentRollNo;

  const studentDetails = () => {
    fetch(`http://localhost:8085/StudentResult/${getStudentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setStudentDetail(res);
        });
      }
    );
  };
  console.log("student details is Term One ", studentDetail);
  return (
    <>
      <div className="markSheet">
        <>
          <div className="studentInfo">
            {studentDetail.map((item, i) => (
              <p key={i}>
                <p>Student Name : {item.studentName}</p>
                <p>Student Email : {item.studentEmail}</p>
                <p>Student Standard :{item.studentStandard}</p>
                <p>Student Roll Number : {item.studentRollNo}</p>
              </p>
            ))}
          </div>

          <div className="termMarks">
            <div className="headingSubjects">
              <div>
                <p>
                  <b>Subject</b>
                </p>
              </div>
              <div>
                <p>English</p>
                <p>Hindi</p>
                <p>Science</p>
                <p>Social Science</p>
                <p>Maths</p>
                <p>Total</p>
                <p>Percentage</p>
                <p>Grade</p>
              </div>
            </div>
            <div className="marksHeading">
              <div>
                <p>
                  <b>Max Marks</b>
                </p>
              </div>
              <div>
                <p>100</p>
                <p>100</p>
                <p>100</p>
                <p>100</p>
                <p>100</p>
                <p>100</p>
                <p>100%</p>
                <p>-</p>

                <p></p>
              </div>
            </div>
            <div className=">marksObtained">
              <div>
                <p>
                  <b>Marks Obtained </b>
                </p>
              </div>
              <div>
                {termTwo.map((item, i) => (
                  <p key={i}>
                    <p>{item.englishTermTwoMarks}</p>
                    <p>{item.hindiTermTwoMarks}</p>
                    <p>{item.scienceTermTwoMarks}</p>
                    <p>{item.socialScienceTermTwoMarks}</p>
                    <p> {item.mathTermTwoMarks}</p>
                    <p>{item.totalTermTwoMarks}</p>
                    <p>{item.percentageTermTwo}</p>
                    <p>{item.gradeTermTwo}</p>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default TermTwoMarkSheet;
