import { Link, useLocation } from "react-router-dom";
function HomeLink() {
  const location = useLocation();
  console.log("UseLocation in Header", location);
  return (
    <>
      <div>
        <Link to="/">Home Page </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Registration">Registration</Link>
      </div>
    </>
  );
}
export default HomeLink;
