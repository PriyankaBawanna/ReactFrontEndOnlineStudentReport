import React, { useContext, useEffect, useState } from "react";
import "../css/ParentDashboard.css";

import { UserContext } from "../../../Common Components/LoginPage/js/ParentLogin";
const TermOneMarkSheet = () => {
  const [termOne, setTermOne] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const studentRollNumber = useContext(UserContext);

  useEffect(() => {
    termOneResult();
    studentDetails();
  }, []);
  const termOneResult = () => {
    fetch(
      `http://localhost:8085/StudentResultTermThree/${getStudentRollNo}`
    ).then((result) => {
      result.json().then((res) => {
        setTermOne(res);
      });
    });
  };
  console.log("TermOne Data ", termOne);
  let parentDetails = JSON.parse(localStorage.getItem("parentDetails"));
  console.log("Getting Student Details ", parentDetails);
  const getStudentRollNo = parentDetails.studentRollNo;

  const studentDetails = () => {
    fetch(`http://localhost:8085/StudentResult/${getStudentRollNo}`).then(
      (result) => {
        result.json().then((res) => {
          setStudentDetail(res);
        });
      }
    );
  };
  console.log("student details is Term One ", studentDetail);
  return (
    <>
      <div className="markSheet">
        <>
          <div className="studentInfo">
            <table id="customers">
              <tbody>
                {studentDetail.map((item, i) => (
                  <tr key={i}>
                    <p>Student Name : {item.studentName}</p>
                    <p>Student Email : {item.studentEmail}</p>
                    <p>Student Standard :{item.studentStandard}</p>
                    <p>Student Roll Number : {item.studentRollNo}</p>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3>Term One</h3>
          <table>
            <tr>
              <th>Subject</th>
              <th>MAX Marks</th>
              <th>Marks Obtained</th>
            </tr>
            <tr>
              <td>English</td>
              <td>100</td>
              <td></td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>100</td>
              <td></td>
            </tr>
            <tr>
              <td>Science</td>
              <td>100</td>
              <td></td>
            </tr>
            <tr>
              <td>Social Science</td>
              <td>100</td>
              <td></td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>100</td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td>500</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <p>percentage</p>
              </td>

              <td>%</td>
            </tr>
            <tr>
              <td>
                <p>Grade</p>
              </td>
            </tr>
          </table>
          <div>
            {termOne.map((data, j) => {
              <p key={j}>
                <p>Student Name {data.studentName}</p>

                <p>{data.studentStandard}</p>
                <p>{data.studentRollNo}</p>

                <p>{data.totalTermOneMarks}</p>
                <p>{data.totalTermTwoMarks}</p>
                <p>{data.totalTermThreeMarks}</p>
              </p>;
            })}
          </div>
        </>
      </div>
    </>
  );
};
export default TermOneMarkSheet;
