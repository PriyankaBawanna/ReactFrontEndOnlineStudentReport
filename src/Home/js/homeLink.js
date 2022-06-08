import { Link, useLocation } from "react-router-dom";
function HomeLink() {
  const location = useLocation();
  console.log("UseLocation in Header", location);
  //links to Teacher Parent And School Admin Login Which i show in The Home page
  return (
    <nav className="homePageRoute">
      <Link to="/UserLogin" className="loginLink">
        User Login
      </Link>
    </nav>
  );
}
export default HomeLink;
