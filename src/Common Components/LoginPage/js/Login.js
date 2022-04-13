import { useState } from "react";
import HomeLink from "../../../Components/Home/js/HomeLink";
import axios from "axios";
import AdminRouters from "../../../Components/schoolAdmin/js/Router/AdminRouter";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const LoginPage = () => {
  //const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    axios.post("http://localhost:8085/login", user).then((res) => {
      let LoginStatus = res.data.message;
      alert(LoginStatus);
      if (LoginStatus === "Login Sucessfull") {
        console.log("login status true");
      }
    });
  };

  const handleValidSignUp = (e) => {
    e.preventDefault();
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
