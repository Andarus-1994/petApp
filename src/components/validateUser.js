import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { validateUser } from "./functions/userFunctions";
import Copyright from "./copyright";
function ValidateUser() {
  let query = useQuery();
  const [answer, setAnswer] = useState(false);
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    console.log(query.get("t"));
    verifyUser();
  }, []);

  async function verifyUser() {
    await validateUser({ token: query.get("t") }).then((resp) => {
      console.log(resp);
      if (resp.success) setAnswer(true);
      if (resp.error) {
        setAnswer(false);
        setMessageError(resp.error);
      }
    });
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <div className="validateUser">
      {messageError ? (
        <h1 className="errorAlone">{messageError}</h1>
      ) : answer ? (
        <div>
          <h1>Your account has been verified!</h1>
          <h2>You can try to login now.</h2>
        </div>
      ) : (
        <h2>Loading</h2>
      )}

      <Copyright />
    </div>
  );
}

export default ValidateUser;
