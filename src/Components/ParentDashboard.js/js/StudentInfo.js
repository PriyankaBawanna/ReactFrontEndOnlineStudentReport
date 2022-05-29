import axios from "axios";
import React, { useEffect, useState } from "react";
const StudentInfo = () => {
  const [parentData, setParentData] = useState([]);

  const [studentRollNo, setstudentRollNo] = useState("");
  const [getData, setData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  let studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
  //   let studentRollNo = studentDetails.studentRollNo;
  const parentEmail = parentDetails.parentEmail;
  console.log("parent data 2 ", parentEmail);

  useEffect(() => {
    parentDetail();
    studentDetail();
    data();
  }, []);
  const parentDetail = () => {
    axios
      .get(`http://localhost:8085/ParentDetails/${parentEmail}`)
      .then((res) => {
        setParentData(res.data);
      });
  };

  async function data() {
    axios
      .get(`http://localhost:8085/ParentDetails/${parentEmail}`)
      .then((res) => {
        const json = res;
        setData(json);
        console.log("USer Response ", json);
        getData.map((obj) => {
          let STData = obj.studentRollNo;
          if (STData) {
            console.log("roll  ", STData);
            axios
              .get(`http://localhost:8085/StudentResult/${STData}`)
              .then((res) => {
                const dataStudent = res;
                console.log("data Studnet ", dataStudent);
                setStudentData(dataStudent);
              });
          } else {
            console.log("Student Roll number Nahi Hai ");
          }
        });
      });
  }

  //   const data = () => {
  //     if (parentEmail) {
  //       fetch(`http://localhost:8085/ParentDetails/${parentEmail}`).then(
  //         (result) => {
  //           result.json().then((res) => {
  //             setData(res);
  //             console.log("Parent Data in Response ", res);
  //             {
  //               getData.map((obj, i) => {
  //                 setstudentRollNo(obj.studentRollNo);
  //               });
  //             }
  //           });
  //         }
  //       );
  //     } else {
  //       console.log("PArent Email Nahi hai ");
  //     }
  //   };
  console.log("user Data ", getData);

  const studentDetail = () => {
    axios
      .get(`http://localhost:8085/StudentResult/${studentRollNo}`)
      .then((res) => {
        setStudentData([...res.data]);
      });
  };

  return (
    <>
      <div>
        <p> email {studentRollNo}</p>
        <div>
          {parentData.map((item, i) => (
            <p key={i}>
              <p>Student Roll Number :{item.studentRollNo}</p>
            </p>
          ))}
        </div>
        <div>
          {studentData.map((item, i) => (
            <p key={i}>
              <p>Student Name : {item.studentName}</p>
              <p>Student Email : {item.studentEmail}</p>
              <p>Student Roll Number :{item.studentRollNo}</p>
              <p>Student Standard: {item.studentStandard}</p>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
export default StudentInfo;
