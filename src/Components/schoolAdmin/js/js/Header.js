import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  console.log("UseLocation in Header", location);
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/StudentList">StudentList</Link>
        <Link to="/TeacherList">TeacherList</Link>
      </div>
    </>
  );
}
export default Header;
