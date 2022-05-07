import React from "react";
import "../css/ParentDashboard.css";
const FinalExam = () => {
  return (
    <>
      <div className="markSheet">
        <div className="studentInfo">
          <p>Student Name :</p>
          <p>Student Roll No :</p>
        </div>
        <>
          <h3> Final Exam</h3>
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

              <td></td>
            </tr>
            <tr></tr>
          </table>
        </>
      </div>
    </>
  );
};
export default FinalExam;
