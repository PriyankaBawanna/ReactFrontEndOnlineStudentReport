import axios from "axios";
import React, { useEffect, useState } from "react";
import ParentMessage from "./parentMessage";
import "../css/parentDashboard.css";

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

                <p></p>
              </div>
            </div>
            <div className=">marksObtained">
              <div>
                <p>
                  <b className="detailsStudentResult">Marks Obtained </b>
                </p>
              </div>
              <div>
                {termOne.map((item, i) => (
                  <p key={i}>
                    <p className="studentResultRow">
                      {item.englishTermOneMarks}
                    </p>
                    <p className="studentResultRow">{item.hindiTermOneMarks}</p>
                    <p className="studentResultRow">
                      {item.scienceTermOneMarks}
                    </p>
                    <p className="studentResultRow">
                      {item.socialScienceTermOneMarks}
                    </p>
                    <p className="studentResultRow"> {item.mathTermOneMarks}</p>
                    <p className="studentResultRow">{item.totalTermOneMarks}</p>
                    <p className="studentResultRow">{item.percentage}</p>
                    <p className="studentResultRow">{item.grade}</p>
                  </p>
                ))}
              </div>
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
