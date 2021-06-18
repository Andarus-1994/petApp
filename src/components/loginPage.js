import Copyright from "./copyright";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { login } from "./functions/userFunctions.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "./actions";
function LoginPage() {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [userErrors, setUserErrors] = useState({ email: "", password: "" });
  const [buttonLoading, setButtonLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const loginStatus = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("test2", loginStatus);
  }, [loginStatus]);

  function handleEmailInput(email) {
    setUserDetails({ ...userDetails, email: email.target.value });
  }
  function handlePasswordInput(e) {
    setUserDetails({ ...userDetails, password: e.target.value });
  }

  async function tryLogin() {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(userDetails.email)) {
      if (userDetails.email && userDetails.password) {
        setButtonLoading(true);
        setUserErrors({ email: "", password: "" });
        await login(userDetails).then((resp) => {
          console.log(resp);
          setButtonLoading(false);
          if (resp.error) {
            setServerError(resp.error);
          }
          if (!resp.error) {
            setServerError("");
            localStorage.setItem("userToken", resp.token);
            dispatch(loginAction(resp.user));
            setTimeout(() => {
              history.push("/");
            }, 700);
          }
        });
      }
    }
    if (!re.test(userDetails.email) && userDetails.password) {
      setUserErrors({
        ...userErrors,
        email: "Required email type!",
        password: "",
      });
      return;
    }
    if (!userDetails.email && !userDetails.password) {
      setUserErrors({
        email: "Email is required!",
        password: "Password is required!",
      });
      return;
    }
    if (!userDetails.email) {
      setUserErrors({ ...userErrors, email: "Email is required!" });
      return;
    }
    if (!userDetails.password) {
      setUserErrors({ ...userErrors, password: "Password is required!" });
      return;
    }
  }
  return (
    <div className="loginPage">
      <div className="containerLogin">
        <h2> Login</h2>
        <input
          placeholder="Email"
          onChange={handleEmailInput}
          value={userDetails.email}
          type="email"
        ></input>
        <label>{userErrors.email}</label>
        <input
          placeholder="Password"
          value={userDetails.password}
          onChange={handlePasswordInput}
          type="password"
        ></input>
        <label>{userErrors.password}</label>
        <div className="loginButtons">
          <button
            onClick={tryLogin}
            className={!buttonLoading ? "" : "disabled"}
          >
            {!buttonLoading ? "Login" : "Loading"}
          </button>
        </div>
        <label>{serverError}</label>
        <p>
          Not a member?{" "}
          <a
            onClick={() => {
              history.push("/register");
            }}
            title="Sign up now!"
          >
            Sign up now
          </a>
        </p>
      </div>
      <Copyright />
    </div>
  );
}

export default LoginPage;
