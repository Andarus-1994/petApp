import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
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
import location1 from "../../../../assets/Shadowlands/Eyegor/eyegorSL.jpg";
import location2 from "../../../../assets/Shadowlands/Eyegor/eyegorRevendreth.jpg";
import location3 from "../../../../assets/Shadowlands/Eyegor/eyegor.jpg";
import AquaticEyegor from "./EyegorFamily/aquaticEyegor";
import BeastsEyegor from "./EyegorFamily/beastsEyegor";
import CrittersEyegor from "./EyegorFamily/crittersEyegor";
import DragonkinEyegor from "./EyegorFamily/dragonkinEyegor";
import ElementalEyegor from "./EyegorFamily/elementalEyegor";
import FlyingEyegor from "./EyegorFamily/flyingEyegor";
import HumanoidEyegor from "./EyegorFamily/humanoidEyegor";
import MagicEyegor from "./EyegorFamily/magicEyegor";
import MechanicalEyegor from "./EyegorFamily/mechanicalEyegor";
import UndeadEyegor from "./EyegorFamily/undeadEyegor";
function Eyegor() {
  const [coords] = useState("/way Revendreth 40, 53");

  return (
    <div className="containerAchiev">
      <div className="containerContent">
        <Router>
          <nav>
            <h2>Pet Family Types</h2>
            <ul>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/aquatic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Aquatic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/beast"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Beast} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/critters"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Critter} alt="icon"></img>
                </li>
              </NavLink>

              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/dragonkin"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Dragon} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/elemental"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Elemental} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/flying"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Flying} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/humanoid"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Humanoid} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/magic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Magic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/mechanical"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Mech} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/eyegor/undead"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Undead} alt="icon"></img>
                </li>
              </NavLink>
            </ul>
          </nav>
          <Switch>
            <Route path="/shadowlands/familiarExorcist/eyegor/default">
              <h1>Choose a guide to follow up from the above menu!</h1>
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/aquatic">
              <AquaticEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/beast">
              <BeastsEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/critters">
              <CrittersEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/dragonkin">
              <DragonkinEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/elemental">
              <ElementalEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/flying">
              <FlyingEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/humanoid">
              <HumanoidEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/magic">
              <MagicEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/mechanical">
              <MechanicalEyegor />
            </Route>
            <Route path="/shadowlands/familiarExorcist/eyegor/undead">
              <UndeadEyegor />
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

export default Eyegor;
