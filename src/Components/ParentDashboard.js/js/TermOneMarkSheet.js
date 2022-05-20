import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";

const TermOneMarkSheet = () => {
  const [termOne, setTermOne] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);

  const [termOneResultStatus, setTermOneResultStatus] = useState("");
  useEffect(() => {
    termOneResult();
    studentDetails();
  }, []);

  //Term One Result
  const termOneResult = () => {
    fetch(`http://localhost:8085/StudentResultTermOne/${studentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setTermOne(res);
        });
      }
    );
  };
  //get The login Parent Details into the local storage
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  const studentRollNo = parentDetails.studentRollNo;

  //const studentRollNo= parentDetails.studentRollNo;
  const studentDetails = () => {
    fetch(`http://localhost:8085/StudentResult/${studentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setStudentDetail(res);
        });
      }
    );
  };

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
            const studentRollNo = parentDetails.studentRollNo;
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
};
export default TermOneMarkSheet;
