import { useState } from "react";
import HomeLink from "../../../Components/Home/js/HomeLink";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";

const LoginPage = ({ setLoginUser }) => {
  //const history = useHistory();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    axios.post("http://localhost:8085/login", user).then((res) => {
      let LoginStatus = res.data.message;
      console.log("user data", res.data.user);
      alert(LoginStatus);

      if (LoginStatus === "Login Sucessfull") {
        setLoginUser(true);
        navigate("/SchoolAdmin", { replace: true });
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Handle change console log ");
    console.log("Handle change console log ", e.target.value);
    setUser({
      ...user,
      [name]: value,
    });
    switch (e.target.value) {
    }
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    // navigate("/SchoolAdmin", { replace: true });
  };

  return (
    <>
      <HomeLink />
      <form onSubmit={LoginHandler}>
        <h1>Login</h1>
        {console.log("user", user)}
        <div>
          <input
            name="email"
            value={user.email}
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="password"
            value={user.password}
            type="password"
            placeholder="enter the password "
            onChange={handleChange}
          />
          <button type="submit" onClick={login}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginPage;
