import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";

const TermOneMarkSheet = () => {
  const [termOne, setTermOne] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);

  useEffect(() => {
    termOneResult();
    studentDetails();
  }, []);
  const termOneResult = () => {
    fetch(
      `http://localhost:8085/StudentResultTermOne/${getStudentRollNo}`
    ).then((result) => {
      result.json().then((res) => {
        setTermOne(res);
      });
    });
  };
  console.log("TermOne Data ", termOne);
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
                {termOne.map((item, i) => (
                  <p key={i}>
                    <p>{item.englishTermOneMarks}</p>
                    <p>{item.hindiTermOneMarks}</p>
                    <p>{item.scienceTermOneMarks}</p>
                    <p>{item.socialScienceTermOneMarks}</p>
                    <p> {item.mathTermOneMarks}</p>
                    <p>{item.totalTermOneMarks}</p>
                    <p>{item.percentage}</p>
                    <p>{item.grade}</p>
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
export default TermOneMarkSheet;
