import { Link, useLocation } from "react-router-dom";
function HomeLink() {
  const location = useLocation();
  console.log("UseLocation in Header", location);
  //links to Teacher Parent And School Admin Login Which i show in The Home page
  return (
    <nav className="homePageRoute">
      <Link to="/TeacherLogin" className="loginLink">
        Teacher Login
      </Link>
      <Link to="/ParentLogin" className="loginLink">
        Parent Login
      </Link>
      <Link to="/UserLogin" className="loginLink">
        Login
      </Link>
      <Link to="/Login" className="loginLink">
        School Admin Login
      </Link>

      <Link to="/Registration" className="loginLink">
        School Admin Registration
      </Link>
    </nav>
  );
}
export default HomeLink;
