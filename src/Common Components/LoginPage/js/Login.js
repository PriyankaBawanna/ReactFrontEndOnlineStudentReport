import { useState } from "react";
import HomeLink from "../../../Components/Home/js/HomeLink";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //Login page for School Admin
  const navigate = useNavigate();
  // Email and password of school Admin
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  //if email and password not correct than for error message
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  //Post  login Details() of the School Admin
  const login = () => {
    const user = { email, password };
    axios.post("http://localhost:8085/login", user).then((res) => {
      let LoginStatus = res.data.message;
      console.log("user data", res.data.user);
      alert(LoginStatus);

      localStorage.setItem("userDetails", JSON.stringify(user));

      if (LoginStatus === "Login Sucessfull") {
        navigate("/SchoolAdmin", { replace: true });
      }
    });
  };
  //check Email format
  const handleInputChangeLogin = (e) => {
    const { value } = e.target;
    setEmail(value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setEmailError(false);
    } else if (!regEx.test(value) && value !== "") {
      setEmailError(true);
    }
  };
  //check password
  const handleInputChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (value.length < 5) {
      setPasswordError(true);
    } else setPasswordError(false);
  };

  return (
    <>
      <div className="userLogin">
        <h1 className="introLoginUser">School Admin Login </h1>
        <div className="loginInput">
          <div>
            <input
              name="email"
              value={email}
              type="email"
              className="inputLogin"
              placeholder="email"
              onChange={handleInputChangeLogin}
            />
            {emailError ? (
              <span className="loginError">Email not valid</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <input
              name="password"
              value={password}
              type="password"
              className="inputLogin"
              placeholder="enter the password "
              onChange={handleInputChangePassword}
            />
            {passwordError ? (
              <span className="loginError">Length must be greater than 5</span>
            ) : (
              <span></span>
            )}
          </div>
          <div>
            <button className="loginBtn" type="submit" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
