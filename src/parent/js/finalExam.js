import React, { useEffect, useState } from "react";
import "../css/parentDashboard.css";
import axios from "axios";
import ParentMessage from "./parentMessage";
const FinalExam = () => {
  //final Exam  Result
  const [termThree, setTermThree] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);

  const [approveStatus, setApproveStatus] = useState("Approve");
  const [rejectStatus, setRejectStatus] = useState("Reject");
  const [termThreeResultStatus, setTermTwoResultStatus] = useState("");
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
            .get(
              `http://localhost:8085/StudentResultTermThree/${studentRollNo}`
            )
            .then((res) => {
              setTermThree([...res.data]);
              setMarks(res.data[0].englishTermThreeMarks);
            });
        } else {
        }

        console.log("USer Response term two ", json);
      });
  }

  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  const parentEmail = parentDetails.parentEmail;
  console.log("parent Email ", parentEmail);

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
            axios
              .get(`http://localhost:8085/getResultStatus/${studentRollNo}`)
              .then((resp) => {
                console.log(resp.data);
              });
          } else {
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
  console.log("final", marks);
  console.log("final Term", termThree);
  if (marks) {
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
                {termThree.map((item, i) => (
                  <p key={i}>
                    <p className="studentResultRow">
                      {item.englishTermThreeMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.hindiTermThreeMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.scienceTermThreeMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.socialScienceTermThreeMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.mathTermThreeMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.totalTermThreeMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.percentageTermThree}
                    </p>
                    <p className="studentResultRow">{item.gradeTermThree}</p>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="approvalStatusParent">
            <div>
              <button
                className="rejectBtn"
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
export default FinalExam;
