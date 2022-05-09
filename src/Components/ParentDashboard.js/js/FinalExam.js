import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";

const FinalExam = () => {
  const [termThree, setTermThree] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);

  useEffect(() => {
    termThreeResult();
    studentDetails();
  }, []);
  const termThreeResult = () => {
    fetch(
      `http://localhost:8085/StudentResultTermThree/${getStudentRollNo}`
    ).then((result) => {
      result.json().then((res) => {
        setTermThree(res);
      });
    });
  };
  console.log(" termThree Data ", termThree);
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
                {termThree.map((item, i) => (
                  <p key={i}>
                    <p>{item.englishTermThreeMarks}</p>
                    <p>{item.hindiTermThreeMarks}</p>
                    <p>{item.scienceTermThreeMarks}</p>
                    <p>{item.socialScienceTermThreeMarks}</p>
                    <p>{item.mathTermThreeMarks}</p>
                    <p>{item.totalTermThreeMarks}</p>
                    <p>{item.percentageTermThree}</p>
                    <p>{item.gradeTermThree}</p>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="approvalStatusParent">
            <div>
              <button className="approvalButton">Approve</button>
            </div>
            <div>
              <button className="rejectButton">Reject</button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default FinalExam;
