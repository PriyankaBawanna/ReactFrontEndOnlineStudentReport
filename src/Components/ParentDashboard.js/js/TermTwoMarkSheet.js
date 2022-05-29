import "../css/ParentDashboard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TermTwoMarkSheet = () => {
  const [termTwo, setTermTwo] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const [approveStatus, setApproveStatus] = useState("Approve");
  const [rejectStatus, setRejectStatus] = useState("Reject");
  const [termTwoResultStatus, setTermTwoResultStatus] = useState("");
  const [noResult, setNoResult] = useState("");

  const [parentInfo, setParentInfo] = useState([]);
  const [studentRollNo, setStudentRollNo] = useState("");

  useEffect(() => {
    parentPersonalInfo();
    termTwoResult();
  }, []);

  //Term Two student Result
  const termTwoResult = () => {
    fetch(`http://localhost:8085/StudentResultTermTwo/${studentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setTermTwo(res);
        });
      }
    );
  };
  //get the current Parent Login
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  const parentEmail = parentDetails.parentEmail;
  console.log("parent Email ", parentEmail);

  const parentPersonalInfo = () => {
    console.warn("PArent Email", parentEmail);
    fetch(`http://localhost:8085/ParentDetails/${parentEmail}`).then((info) => {
      info.json().then((res) => {
        setParentInfo(res);
        {
          parentInfo.map((item, i) => {
            setStudentRollNo(item.studentRollNo);
          });
        }
      });
    });
  };
  //if Result Status Approve than API Called and Approve Message Send To School Admin Email
  const termResultStatusApproveStatus = () => {
    setTermTwoResultStatus(approveStatus);

    const approveStats = { termTwoResultStatus, studentRollNo };
    if (termTwoResultStatus && studentRollNo) {
      axios

        .post(
          `http://localhost:8085/statusTermTwo/${studentRollNo}`,
          approveStats
        )
        .then((res) => {
          alert(res.data.message);

          if (res.data.message === "Response Submitted") {
            const studentRollNo = parentDetails.studentRollNo;
            axios
              .get(
                `http://localhost:8085/getResultStatusTermTwo/${studentRollNo}`
              )
              .then((resp) => {});
          } else {
          }
        });
    } else {
      alert("error");
    }
  };

  //if Result Status Reject  than API Called and Reject  Message Send To School Admin Email
  const termResultStatusRejectStatus = () => {
    const resultRejectStatus = { termTwoResultStatus, studentRollNo };
    setTermTwoResultStatus(rejectStatus);
    if (rejectStatus && studentRollNo) {
      axios

        .post(
          `http://localhost:8085/statusTermTwo/${studentRollNo}`,
          resultRejectStatus
        )
        .then((res) => {
          alert(res.data.message);

          if (res.data.message === "Response Submitted") {
            const studentRollNo = parentDetails.studentRollNo;
            axios
              .get(`http://localhost:8085/getResultStatus/${studentRollNo}`)
              .then((resp) => {});
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
      </div>
      <div className="approvalStatusParent">
        <div>
          <button
            className="approvalButton  resultBtn"
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
    </>
  );
};
export default TermTwoMarkSheet;
