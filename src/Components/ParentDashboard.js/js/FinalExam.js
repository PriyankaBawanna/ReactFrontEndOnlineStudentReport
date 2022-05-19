import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";
import axios from "axios";
const FinalExam = () => {
  //final Exam  Result
  const [termThree, setTermThree] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);

  const [approveStatus, setApproveStatus] = useState("Approve");
  const [rejectStatus, setRejectStatus] = useState("Reject");
  const [termThreeResultStatus, setTermTwoResultStatus] = useState("");

  useEffect(() => {
    termThreeResult();
    studentDetails();
  }, []);
  //get the student's Term Three Marks
  const termThreeResult = () => {
    fetch(`http://localhost:8085/StudentResultTermThree/${studentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setTermThree(res);
        });
      }
    );
  };
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  const studentRollNo = parentDetails.studentRollNo;
  //get the Student Details
  const studentDetails = () => {
    fetch(`http://localhost:8085/StudentResult/${studentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setStudentDetail(res);
        });
      }
    );
  };

  //if parent Approve the Result
  const termResultStatusApproveStatus = () => {
    setTermTwoResultStatus(approveStatus);

    const approveStats = { termThreeResultStatus, studentRollNo };
    if (termThreeResultStatus && studentRollNo) {
      axios

        .post(
          `http://localhost:8085/statusTermThree/${studentRollNo}`,
          approveStats
        )
        .then((res) => {
          alert(res.data.message);
          if (res.data.message === "Response Submitted") {
            const studentRollNo = parentDetails.studentRollNo;
            axios
              .get(`http://localhost:8085/getResultStatus/${studentRollNo}`)
              .then((resp) => {
                console.log(resp.data);
              });
          } else {
            console.log("OutSide ");
          }
        });
    } else {
      alert("error");
    }
  };

  const termResultStatusRejectStatus = () => {
    const resultRejectStatus = { termThreeResultStatus, studentRollNo };
    setTermTwoResultStatus(rejectStatus);
    if (termThreeResultStatus && studentRollNo) {
      axios
        .post(
          `http://localhost:8085/statusTermThree/${studentRollNo}`,
          resultRejectStatus
        )
        .then((res) => {
          alert(res.data.message);

          if (res.data.message === "Response Submitted") {
            const studentRollNo = parentDetails.studentRollNo;
            axios
              .get(`http://localhost:8085/getResultStatus/${studentRollNo}`)
              .then((resp) => {});
          } else {
          }
        });
    } else {
      alert("error");
    }
  };

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
              <button
                className="approvalButton"
                onClick={termResultStatusApproveStatus}
              >
                Approve
              </button>
            </div>
            <div>
              <button
                className="rejectButton"
                onClick={termResultStatusRejectStatus}
              >
                Reject
              </button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default FinalExam;
