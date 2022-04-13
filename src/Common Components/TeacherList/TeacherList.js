import React from "react";
import LinkRouter from "../../Components/schoolAdmin/js/Router/LinkRouter";

const TeacherList = () => {
  return (
    <>
      <div>
        <LinkRouter />
      </div>
      <table id="customers">
        <tr>
          <th>Teacher Name</th>
          <th>Teacher Id</th>
          <th>Mobile No</th>
          <th>Email Id </th>
        </tr>

        <tr>
          <td>Abc</td>
          <td>T-1ab</td>
          <td>1234567890</td>
          <td>teacher@gmail.com</td>
        </tr>
      </table>
    </>
  );
};
export default TeacherList;
