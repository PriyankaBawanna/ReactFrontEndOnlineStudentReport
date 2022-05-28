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
  const [parentInfo, setParentInfo] = useState([]);
  const [studentRollNumber, setStudentRollNumber] = useState("");

  useEffect(() => {
    parentPersonalInfo();
    termThreeResult();
  }, []);

  const parentPersonalInfo = () => {
    console.warn("PArent Email", parentEmail);
    fetch(`http://localhost:8085/ParentDetails/${parentEmail}`).then((info) => {
      info.json().then((res) => {
        setParentInfo(res);
        {
          parentInfo.map((item, i) => {
            setStudentRollNumber(item.studentRollNo);
          });
        }
      });
    });
  };

  //get the student's Term Three Marks
  const termThreeResult = () => {
    fetch(
      `http://localhost:8085/StudentResultTermThree/${studentRollNumber}`
    ).then((result) => {
      result.json().then((res) => {
        setTermThree(res);
      });
    });
  };
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  const parentEmail = parentDetails.parentEmail;
  console.log("parent Email ", parentEmail);

  const studentRollNo = parentDetails.studentRollNo;
  //get the Student Details

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
              className="approvalButton resultBtn"
              onClick={termResultStatusApproveStatus}
            >
              Approve
            </button>
          </div>
          <div>
            <button
              className="rejectButton resultBtn"
              onClick={termResultStatusRejectStatus}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FinalExam;
