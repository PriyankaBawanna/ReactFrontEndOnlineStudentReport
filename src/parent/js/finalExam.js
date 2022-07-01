import React, { useEffect, useState } from "react";
import "../css/parentDashboard.css";
import axios from "axios";
import ParentMessage from "./parentMessage";
//result of the last examination
const FinalExam = () => {
  //final Exam  Result
  const [termThree, setTermThree] = useState([]);

  const [approveStatus, setApproveStatus] = useState("Approve");
  const [rejectStatus, setRejectStatus] = useState("Reject");
  const [termThreeResultStatus, setTermTwoResultStatus] = useState("");
  const [parentInfo, setParentInfo] = useState([]);

  const [studentRollNo, setStudentRollNo] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    data();
  }, [studentRollNo]);

  //obtaining login parent email
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  const parentEmail = parentDetails.email;
  console.log("parent data 2 ", parentEmail);

  //obtaining Student data based on the biases of parent details

  const data = () => {
    axios.get(`http://localhost:8085/userData/${parentEmail}`).then((resp) => {
      setParentInfo([...resp.data]);
      const rollNo = resp.data[0].rollNo;
      setStudentRollNo(rollNo);

      if (rollNo) {
        axios
          .get(`http://localhost:8085/StudentResult/${studentRollNo}`)
          .then((res) => {
            setTermThree([...res.data]);
            console.log("User response", [...res.data]);
            setMarks(res.data[0].englishTermOneMarks);
          });
      }
    });
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

  //if parent reject the result
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
