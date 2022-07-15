import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/parentDashboard.css";
const StudentInfo = () => {
  const [parentData, setParentData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [standard, setStandard] = useState("");
  const [getData, setData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));

  const parentEmail = parentDetails.email;
  console.log("parent data 2 ", parentEmail);

  useEffect(() => {
    parentInfo();
  }, []);

  const parentInfo = () => {
    axios.get(`http://localhost:8085/userData/${parentEmail}`).then((resp) => {
      setParentData([...resp.data]);
      const rollNo = resp.data[0].rollNo;
      setStudentRollNo(rollNo);

      if (rollNo) {
        axios
          .get(`http://localhost:8085/StudentResult/${rollNo}`)
          .then((res) => {
            setStudentData([...res.data]);
            console.log("User response", [...res.data]);
            const Name = res.data[0].studentName;
            setName(Name);
            const Email = res.data[0].studentEmail;
            setEmail(Email);
            const studentStandard = res.data[0].studentStandard;
            setStandard(studentStandard);
          });
      }
    });
  };

  return (
    <>
      <div>
        <div className="studentData">
          <p className="studentDataRow">Student Name :{name} </p>
          <p className="studentDataRow">Student Email :{email}</p>
          <p className="studentDataRow">Roll Number :{studentRollNo}</p>
          <p className="studentDataRow">Standard:{standard} </p>
        </div>
      </div>
    </>
  );
};
export default StudentInfo;
