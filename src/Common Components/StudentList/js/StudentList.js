import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/StudentList.css";
const StudentList = () => {
  const state = useSelector((state) => state.getStudentDetailsReducer.items);

  useEffect(() => {
    dispatch(getStudentDetails(state));
    console.log("State on User Repo ", state);
  }, []);
  return (
    <>
      <table id="customers">
        <tr>
          <th>{state.studentName}</th>
          <th>{state.studentEmail}</th>
          <th>{state.studentStandard}</th>
          <th>{state.studentRollNo}</th>
        </tr>
      </table>
    </>
  );
};
export default StudentList;
