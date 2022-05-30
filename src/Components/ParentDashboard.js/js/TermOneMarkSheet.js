import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";
import ParentMessage from "./ParentMessage";

const TermOneMarkSheet = () => {
  const [termOne, setTermOne] = useState([]);
  const [marks, setMarks] = useState("");

  const [parentInfo, setParentInfo] = useState([]);
  const [studentRollNo, setStudentRollNo] = useState("");

  const [termOneResultStatus, setTermOneResultStatus] = useState("");
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
            .get(`http://localhost:8085/StudentResultTermOne/${studentRollNo}`)
            .then((res) => {
              setTermOne([...res.data]);
              setMarks(res.data[0].englishTermOneMarks);
            });
        } else {
        }

        console.log("USer Response ", json);
      });
  }

  //get The login Parent Details into the local storage
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  const parentEmail = parentDetails.parentEmail;
  console.log("parent Email ", parentEmail);

  //const studentRollNo= parentDetails.studentRollNo;

  //if Result Status Approve than API Called and Approve Message Send To School Admin Email
  const termResultStatusApproveStatus = () => {
    setTermOneResultStatus("Approve");

    const approveStatusResult = { termOneResultStatus, studentRollNo };
    if (termOneResultStatus && studentRollNo) {
      axios

        .post(
          `http://localhost:8085/status/${studentRollNo}`,
          approveStatusResult
        )
        .then((res) => {
          alert(res.data.message);

          if (res.data.message === "Response Submitted") {
            axios
              .get(
                `http://localhost:8085/getResultStatusTermOne/${studentRollNo}`
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
    setTermOneResultStatus("Reject");
    const resultRejectStatus = { termOneResultStatus, studentRollNo };
    if (termOneResultStatus && studentRollNo) {
      axios

        .post(
          `http://localhost:8085/status/${studentRollNo}`,
          resultRejectStatus
        )
        .then((res) => {
          alert(res.data.message);

          if (res.data.message === "Response Submitted") {
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
    console.log("Term One Me response", termOne);
    return (
      <>
        <div className="markSheet">
          <b>Term One </b>
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
      </>
    );
  } else {
    return (
      <>
        <ParentMessage />;
      </>
    );
  }
};
export default TermOneMarkSheet;
