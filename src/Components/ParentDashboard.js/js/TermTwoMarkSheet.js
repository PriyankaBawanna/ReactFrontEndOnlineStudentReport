import "../css/ParentDashboard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ParentMessage from "./ParentMessage";

const TermTwoMarkSheet = () => {
  const [termTwo, setTermTwo] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const [approveStatus, setApproveStatus] = useState("Approve");
  const [rejectStatus, setRejectStatus] = useState("Reject");
  const [termTwoResultStatus, setTermTwoResultStatus] = useState("");

  const [parentInfo, setParentInfo] = useState([]);
  const [studentRollNo, setStudentRollNo] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    data();
  }, [studentRollNo]);

  async function data() {
    axios
      .get(`http://localhost:8085/ParentDetails/${parentEmail}`)
      .then((res) => {
        setParentInfo([...res.data]);
        const json = res.data[0].studentRollNo;

        if (json) {
          setStudentRollNo(res.data[0].studentRollNo);
          axios
            .get(`http://localhost:8085/StudentResultTermTwo/${studentRollNo}`)
            .then((res) => {
              setTermTwo([...res.data]);
              setMarks(res.data[0].englishTermTwoMarks);
            });
        } else {
        }

        console.log("USer Response term two ", json);
      });
  }

  //get the current Parent Login
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  const parentEmail = parentDetails.parentEmail;
  console.log("parent Email ", parentEmail);

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
    setTermTwoResultStatus("Reject");
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
  if (marks) {
    console.log("marks TM2", termTwo);
    return (
      <>
        <div className="markSheet">
          <div className="termMarks">
            <div className="headingSubjects">
              <div>
                <p>
                  <b className="detailsStudentResult">Subject</b>
                </p>
              </div>
              <div>
                <p className="studentResultRow">English</p>
                <p className="studentResultRow">Hindi</p>
                <p className="studentResultRow">Science</p>
                <p className="studentResultRow">Social Science</p>
                <p className="studentResultRow">Maths</p>
                <p className="studentResultRow">Total</p>
                <p className="studentResultRow">Percentage</p>
                <p className="studentResultRow">Grade</p>
              </div>
            </div>
            <div className="marksHeading">
              <div>
                <p>
                  <b className="detailsStudentResult">Max Marks</b>
                </p>
              </div>
              <div>
                <p className="studentResultRow">100</p>
                <p className="studentResultRow">100</p>
                <p className="studentResultRow">100</p>
                <p className="studentResultRow">100</p>
                <p className="studentResultRow">100</p>
                <p className="studentResultRow">100</p>
                <p className="studentResultRow">100%</p>
                <p className="studentResultRow">-</p>
              </div>
            </div>
            <div className=">marksObtained">
              <div>
                <p>
                  <b className="detailsStudentResult">Marks Obtained </b>
                </p>
              </div>
              <div>
                {termTwo.map((item, i) => (
                  <p key={i}>
                    <p className="studentResultRow">
                      {item.englishTermTwoMarks}
                    </p>
                    <p className="studentResultRow">{item.hindiTermTwoMarks}</p>
                    <p className="studentResultRow">
                      {item.scienceTermTwoMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.socialScienceTermTwoMarks}
                    </p>
                    <p className="studentResultRow"> {item.mathTermTwoMarks}</p>
                    <p className="studentResultRow">{item.totalTermTwoMarks}</p>
                    <p className="studentResultRow">{item.percentageTermTwo}</p>
                    <p className="studentResultRow">{item.gradeTermTwo}</p>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="approvalStatusParent">
          <div>
            <button
              className="rejectBtn "
              onClick={termResultStatusApproveStatus}
            >
              Approve
            </button>
          </div>
          <div>
            <button
              className="rejectBtn"
              onClick={termResultStatusRejectStatus}
            >
              Reject
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ParentMessage />
      </>
    );
  }
};
export default TermTwoMarkSheet;
