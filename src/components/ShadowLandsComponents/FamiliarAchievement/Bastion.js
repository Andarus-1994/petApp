import NavBastion from "./Bastion/navBastion.js";
import ReactGa from "react-ga";
import Copyright from "../../copyright.js";
import { useEffect } from "react";
function Bastion() {
  useEffect(() => {
    ReactGa.initialize("UA-194620693-1");
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <div className="familiarAchiev">
      <div className="containerFamiliar">
        <NavBastion />
      </div>
      <Copyright />
    </div>
  );
}

export default Bastion;
