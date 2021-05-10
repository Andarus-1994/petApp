import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Aquatic from "../../../../assets/FamilyIcons/aquatic.png";
import Beast from "../../../../assets/FamilyIcons/beast.png";
import Critter from "../../../../assets/FamilyIcons/critter.png";
import Dragon from "../../../../assets/FamilyIcons/dragonkin.png";
import Elemental from "../../../../assets/FamilyIcons/elemental.png";
import Flying from "../../../../assets/FamilyIcons/flying.png";
import Humanoid from "../../../../assets/FamilyIcons/humanoid.png";
import Magic from "../../../../assets/FamilyIcons/magic.png";
import Mech from "../../../../assets/FamilyIcons/mechanical.png";
import Undead from "../../../../assets/FamilyIcons/undead.png";
import location1 from "../../../../assets/Shadowlands/Thenia/theniaSL.jpg";
import location2 from "../../../../assets/Shadowlands/Thenia/theniaBastion.jpg";
import location3 from "../../../../assets/Shadowlands/Thenia/thenia.jpg";
import HumanoidThenia from "./TheniaFamily/humanoidThenia";
import FlyingThenia from "./TheniaFamily/flyingThenia";
import BeastsThenia from "./TheniaFamily/beastsThenia";
import CrittersThenia from "./TheniaFamily/crittersThenia";
import DragonkinThenia from "./TheniaFamily/dragonkinThenia";

function Thenia() {
  const [coords] = useState("/way Bastion 55, 56");
  return (
    <div className="containerAchiev">
      <div className="containerContent">
        <Router>
          <nav>
            <h2>Pet Family Types</h2>
            <ul>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/aquatic"
                activeClassName="active"
                className="inactive"
                className="disabled"
              >
                <li>
                  {" "}
                  <img src={Aquatic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/beast"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Beast} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/critters"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Critter} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/dragonkin"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Dragon} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/elemental"
                activeClassName="active"
                className="inactive"
                className="disabled"
              >
                <li>
                  {" "}
                  <img src={Elemental} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/flying"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Flying} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/humanoid"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Humanoid} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/magic"
                activeClassName="active"
                className="inactive"
                className="disabled"
              >
                <li>
                  {" "}
                  <img src={Magic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/mechanical"
                activeClassName="active"
                className="inactive"
                className="disabled"
              >
                <li>
                  {" "}
                  <img src={Mech} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/thenia/undead"
                activeClassName="active"
                className="inactive"
                className="disabled"
              >
                <li>
                  {" "}
                  <img src={Undead} alt="icon"></img>
                </li>
              </NavLink>
            </ul>
          </nav>
          <Switch>
            <Route path="/shadowlands/bastionAchievement/thenia/default">
              <h1>Choose a guide to follow up from the above menu!</h1>
            </Route>
            <Route path="/shadowlands/bastionAchievement/thenia/beast">
              <BeastsThenia />
            </Route>
            <Route path="/shadowlands/bastionAchievement/thenia/critters">
              <CrittersThenia />
            </Route>
            <Route path="/shadowlands/bastionAchievement/thenia/dragonkin">
              <DragonkinThenia />
            </Route>
            <Route path="/shadowlands/bastionAchievement/thenia/flying">
              <FlyingThenia />
            </Route>
            <Route path="/shadowlands/bastionAchievement/thenia/humanoid">
              <HumanoidThenia />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="locationImages">
        <h2>Localization:</h2>
        <button
          onClick={() => {
            navigator.clipboard.writeText(coords);
          }}
        >
          Copy Coordinates <FontAwesomeIcon icon={faClipboard} />
        </button>
        <img src={location1} alt="noImg"></img>
        <img src={location2} alt="noImg"></img>
        <img src={location3} alt="noImg"></img>
      </div>
    </div>
  );
}

export default Thenia;
