import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";
import axios from "axios";
import ParentMessage from "./ParentMessage";
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
  } else {
    return (
      <>
        <ParentMessage />
      </>
    );
  }
};
export default FinalExam;
