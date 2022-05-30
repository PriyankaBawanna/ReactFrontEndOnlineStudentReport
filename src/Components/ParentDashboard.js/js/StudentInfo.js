import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/ParentDashboard.css";
const StudentInfo = () => {
  const [parentData, setParentData] = useState([]);

  const [studentRollNo, setStudentRollNo] = useState("");
  const [getData, setData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  let studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
  //   let studentRollNo = studentDetails.studentRollNo;
  const parentEmail = parentDetails.parentEmail;
  console.log("parent data 2 ", parentEmail);
  const newData = {};

  useEffect(() => {
    data();
  }, [studentRollNo]);

  async function data() {
    axios
      .get(`http://localhost:8085/ParentDetails/${parentEmail}`)
      .then((res) => {
        setParentData([...res.data]);
        const json = res.data[0].studentRollNo;

        if (json) {
          setStudentRollNo(res.data[0].studentRollNo);
          axios
            .get(`http://localhost:8085/StudentResult/${studentRollNo}`)
            .then((res) => {
              setStudentData([...res.data]);
            });
        } else {
        }

        console.log("USer Response ", json);
      });
  }

  console.log("Student Data ", studentData);
  return (
    <>
      <div>
        <div className="studentData">
          {studentData.map((item, i) => (
            <p key={i}>
              <p className="studentDataRow">
                Student Name : {item.studentName}
              </p>
              <p className="studentDataRow">
                Student Email : {item.studentEmail}
              </p>
              <p className="studentDataRow">
                Roll Number :{item.studentRollNo}
              </p>
              <p className="studentDataRow">Standard: {item.studentStandard}</p>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
export default StudentInfo;
