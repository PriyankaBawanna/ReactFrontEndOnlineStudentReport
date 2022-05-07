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

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const login = () => {
    const user = { email, password };
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

  const LoginHandler = (e) => {
    e.preventDefault();
    // navigate("/SchoolAdmin", { replace: true });
  };

  return (
    <>
      <HomeLink />

      <form onSubmit={LoginHandler}>
        <h1>Login</h1>

        <div>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
              let emailValidation = e.target.value;
              console.log("email Validation ", emailValidation);
              const regEx =
                /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
              if (regEx.test(emailValidation)) {
                console.log("emailValidation is Valid");
                setEmailError(false);
              } else if (
                !regEx.test(emailValidation) &&
                emailValidation !== ""
              ) {
                console.log("emailValidation is Not Valid");
                setEmailError(true);
              }
            }}
          />
          {emailError ? <span>Email not valid</span> : <span></span>}
        </div>
        <div>
          <input
            name="password"
            value={password}
            type="password"
            placeholder="enter the password "
            onChange={(e) => {
              setPassword(e.target.value);
              let passwordError = e.target.value;
              if (passwordError.length < 5) {
                setPasswordError(true);
              } else {
                setPasswordError(false);
              }
              setPassword(passwordError);
            }}
          />
          {passwordError ? (
            <span>Length must be greater than 5</span>
          ) : (
            <span></span>
          )}
        </div>
        <div>
          <button type="submit" onClick={login}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginPage;
