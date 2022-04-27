import React, { useState } from "react";
const TermTwo = () => {
  const [InputMarksHindi, setInputMarksHindi] = useState();
  const [InputMarksEnglish, setInputMarksEnglish] = useState();
  const [InputMarksScience, setInputMarksScience] = useState();
  const [InputMarksSocialScience, setInputMarksSocialScience] = useState();
  const [InputMarksMaths, setInputMarksMaths] = useState();
  const [Total, setTotalMarks] = useState();
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");
  const TotalMarks = () => {
    const TotalSum =
      Number(InputMarksEnglish) +
      Number(InputMarksHindi) +
      Number(InputMarksMaths) +
      Number(InputMarksScience) +
      Number(InputMarksSocialScience);
    setTotalMarks(TotalSum);
    console.log("total Marks ", TotalSum);
    const percentage = (TotalSum / 500) * 100;
    setPercentage(percentage);
    if (percentage < 29) {
      setGrade("FAIL");
    } else if (percentage >= 30 && percentage <= 45) {
      setGrade("c");
    } else if (percentage >= 46 && percentage <= 59) {
      setGrade("B");
    } else if (percentage >= 60 && percentage <= 79) {
      setGrade("A");
    } else if (percentage >= 80) {
      setGrade("A++");
    }
  };
  return (
    <>
      <h3>Term Two </h3>
      <table>
        <tr>
          <th>Subject</th>
          <th>MAX Marks</th>
          <th>Marks Obtained</th>
        </tr>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>
            <input
              name="inputMarks"
              value={InputMarksEnglish}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setInputMarksEnglish(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Hindi</td>
          <td>100</td>
          <td>
            <input
              name="inputMarks"
              value={InputMarksHindi}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setInputMarksHindi(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Science</td>
          <td>100</td>
          <td>
            <input
              name="inputMarks"
              value={InputMarksScience}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setInputMarksScience(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Social Science</td>
          <td>100</td>
          <td>
            <input
              name="inputMarks"
              value={InputMarksSocialScience}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setInputMarksSocialScience(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Maths</td>
          <td>100</td>
          <td>
            <input
              name="text"
              value={InputMarksMaths}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setInputMarksMaths(e.target.value);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <button onClick={TotalMarks}>Total</button>
          </td>
          <td>500</td>
          <td>{Total}</td>
        </tr>
        <tr>
          <td>
            <p>percentage</p>
          </td>

          <td>{percentage}%</td>
        </tr>
        <tr>
          <td>
            <p>Grade</p>
          </td>

          <td>{grade}</td>
        </tr>
      </table>
    </>
  );
};
export default TermTwo;
