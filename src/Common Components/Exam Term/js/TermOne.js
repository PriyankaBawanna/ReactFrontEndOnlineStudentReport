import React, { useState } from "react";
const TermOne = () => {
  const [hindiMarks, setHindiMarks] = useState();
  const [englishMarks, setEnglishMarks] = useState();
  const [science, setScience] = useState();
  const [socialScienceMarks, setSocialScienceMarks] = useState();
  const [mathMarks, setMathMarks] = useState();
  const [Total, setTotalMarks] = useState();
  const [percentage, setPercentage] = useState("");
  const [grade, setGrade] = useState("");

  const addStudentMarks = () => {
    if (Total) {
      console.warn(
        "Student Marks",
        hindiMarks,
        englishMarks,
        science,
        socialScienceMarks,
        Total,
        percentage,
        grade
      );
      let StudentMarks = {
        hindiMarks,
        englishMarks,
        science,
        socialScienceMarks,
        Total,
        percentage,
        grade,
      };
      fetch("http://localhost:8085/addStudentMarksStudent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(StudentMarks),
      }).then((result) => {
        result.json().then((res) => {
          console.warn("Student Response", res);
        });
      });
    } else {
      alert("First Need to calculate Total Marks Of the Student ");
    }
  };

  const TotalMarks = () => {
    const TotalSum =
      Number(englishMarks) +
      Number(hindiMarks) +
      Number(mathMarks) +
      Number(science) +
      Number(socialScienceMarks);
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
      <h3>Term One </h3>
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
              value={englishMarks}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setEnglishMarks(e.target.value);
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
              value={hindiMarks}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setHindiMarks(e.target.value);
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
              value={science}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setScience(e.target.value);
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
              value={socialScienceMarks}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setSocialScienceMarks(e.target.value);
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
              value={mathMarks}
              type="text"
              className="inputMarks"
              onChange={(e) => {
                setMathMarks(e.target.value);
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
        <tr>
          <td>
            <button onClick={addStudentMarks}>Add Marks</button>
          </td>
        </tr>
      </table>
    </>
  );
};
export default TermOne;
