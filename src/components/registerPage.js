import { useState } from "react";
import Copyright from "./copyright";
import { registerUser } from "./functions/userFunctions";
import { useHistory } from "react-router-dom";
function RegisterPage() {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    email: "",
    user: "",
    password: "",
    confirmPassword: "",
    role: "casual",
  });
  const [requiredErrors, setRequiredErrors] = useState({
    email: "",
    user: "",
    password: "",
    confirmPassword: "",
  });
  const [buttonLoading, setButtonLoading] = useState(false);
  const [samePasswordError, setSamePasswordError] = useState("");
  const [successRegister, setSuccessRegister] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  function handleEmailInput(e) {
    setUserDetails({ ...userDetails, email: e.target.value });
  }
  function handleUserInput(e) {
    setUserDetails({ ...userDetails, user: e.target.value });
  }
  function handlePasswordInput(e) {
    setUserDetails({ ...userDetails, password: e.target.value });
  }
  function handlePasswordConfirmationInput(e) {
    setUserDetails({ ...userDetails, confirmPassword: e.target.value });
  }
  function checkPassword() {
    if (userDetails.password === userDetails.confirmPassword) {
      setSamePasswordError("");
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      setSamePasswordError("The Confirmation Password is different!");
    }
  }
  async function RegisterUser() {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(userDetails.email)) {
      if (
        userDetails.email &&
        userDetails.user &&
        userDetails.password &&
        userDetails.confirmPassword &&
        !samePasswordError
      ) {
        console.log("User Register");
        setRequiredErrors({
          email: "",
          user: "",
          password: "",
          confirmPassword: "",
        });
        setButtonLoading(true);
        await registerUser(userDetails).then((resp) => {
          console.log(resp);
          setButtonLoading(false);
          if (resp.user) {
            setSuccessRegister(true);
          }
          if (resp.error) {
            console.log(JSON.parse(resp.error));
            if (JSON.parse(resp.error).password) {
              setRequiredErrors({
                ...requiredErrors,
                password: JSON.parse(resp.error).password[0],
              });
            }
            if (resp.error.email) {
              setRequiredErrors({ ...requiredErrors, email: resp.error.email });
            }
          }
        });
        return;
      }

      if (
        !userDetails.email &&
        !userDetails.user &&
        !userDetails.password &&
        !userDetails.confirmPassword
      ) {
        setRequiredErrors({
          email: "Email is required",
          user: "User is required",
          password: "Password is required",
          confirmPassword: "Confirmation Password is required",
        });
        return;
      }
      if (!userDetails.email && !userDetails.user && !userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          user: "User is required",
          password: "Password is required",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.email && !userDetails.user) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          user: "User is required",
          password: "",
          confirmPassword: "",
        });
        return;
      }

      if (!userDetails.email && !userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          password: "Password is required",
          user: "",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.user && !userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "",
          user: "User is required",
          password: "Password is required",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.user) {
        setRequiredErrors({
          ...requiredErrors,
          email: "",
          user: "User is required",
          password: "",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.email) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          user: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "",
          user: "",
          password: "Password is required",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "",
          user: "",
          password: "",
          confirmPassword: "Confirmation Password is required",
        });
        return;
      }
    }
    if (!re.test(userDetails.email)) {
      if (
        userDetails.email &&
        userDetails.user &&
        userDetails.password &&
        userDetails.confirmPassword
      ) {
        setRequiredErrors({
          email: "Input required as EMAIL type.",
          user: "",
          password: "",
          confirmPassword: "",
        });
      }
      if (
        !userDetails.email &&
        !userDetails.user &&
        !userDetails.password &&
        !userDetails.confirmPassword
      ) {
        setRequiredErrors({
          email: "Email is required",
          user: "User is required",
          password: "Password is required",
          confirmPassword: "Confirmation Password is required",
        });
        return;
      }
      if (!userDetails.email && !userDetails.user && !userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          user: "User is required",
          password: "Password is required",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.email && !userDetails.user) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          user: "User is required",
          password: "",
          confirmPassword: "",
        });
        return;
      }

      if (!userDetails.email && !userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          password: "Password is required",
          user: "",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.user && !userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Input required as EMAIL type.",
          user: "User is required",
          password: "Password is required",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.user) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Input required as EMAIL type.",
          user: "User is required",
          password: "",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.email) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Email is required",
          user: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "Input required as EMAIL type.",
          user: "",
          password: "Password is required",
          confirmPassword: "",
        });
        return;
      }
      if (!userDetails.password) {
        setRequiredErrors({
          ...requiredErrors,
          email: "",
          user: "",
          password: "",
          confirmPassword: "Confirmation Password is required",
        });
        return;
      }
    }
  }

  return (
    <div className="registerPage">
      {successRegister ? (
        <div className="containerRegister">
          <h1>A mail has been sent on your adress for validation!</h1>
          <p>Please log in to your email to validate your account!</p>
        </div>
      ) : (
        <div className="containerRegister">
          <h2> Register</h2>
          <input
            value={userDetails.email}
            onChange={handleEmailInput}
            placeholder="Email"
            type="email"
          ></input>
          <label>{requiredErrors.email}</label>
          <input
            value={userDetails.user}
            onChange={handleUserInput}
            placeholder="Username"
          ></input>
          <label>{requiredErrors.user}</label>

          <input
            value={userDetails.password}
            onChange={handlePasswordInput}
            placeholder="Password"
            type={!viewPassword ? "password" : "text"}
            onMouseLeave={() => setViewPassword(false)}
            onMouseEnter={() => setViewPassword(true)}
          ></input>

          <label>{requiredErrors.password}</label>
          <input
            value={userDetails.confirmPassword}
            onChange={handlePasswordConfirmationInput}
            placeholder="Password Confirmation"
            type={!viewPassword ? "password" : "text"}
            onMouseLeave={() => setViewPassword(false)}
            onMouseEnter={() => setViewPassword(true)}
            onBlur={checkPassword}
          ></input>
          <label>{requiredErrors.confirmPassword}</label>
          <label>{samePasswordError}</label>
          <div className="registerButtons">
            <button
              className={!buttonLoading ? "" : "disabled"}
              onClick={RegisterUser}
            >
              {buttonLoading ? "Loading" : "Register"}
            </button>
          </div>
        </div>
      )}
      <Copyright />
    </div>
  );
}

export default RegisterPage;
