import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useLocation,
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
import location1 from "../../../../assets/Shadowlands/Maximilian/maximilianSL.jpg";
import location2 from "../../../../assets/Shadowlands/Maximilian/maximilianMaldraxxus.jpg";
import location3 from "../../../../assets/Shadowlands/Maximilian/maximilian.jpg";
import AquaticMaximillian from "./MaximillianFamily/aquaticMaximillian";
import BeastsMaximillian from "./MaximillianFamily/beastsMaximillian";
import CrittersMaximillian from "./MaximillianFamily/crittersMaximillian";
import DragonkinMaximillian from "./MaximillianFamily/dragonkinMaximillian";
import ElementalMaximillian from "./MaximillianFamily/elementalMaximillian";
import FlyingMaximillian from "./MaximillianFamily/flyingMaximillian";
import HumanoidMaximillian from "./MaximillianFamily/humanoidMaximillian";
import MagicMaximillian from "./MaximillianFamily/magicMaximillian";
import MechanicalMaximillian from "./MaximillianFamily/mechanicalMaximillian";
import UndeadMaximillian from "./MaximillianFamily/undeadMaximillian";

function Maximillian() {
  const [coords] = useState("/way Revendreth 40, 53");
  const location = useLocation();
  console.log(location);
  let classLocation = "";
  if (location.pathname.includes("maximillian")) {
    classLocation = "Maldraxxus";
  }
  return (
    <div className="containerAchiev">
      <div className="containerContent">
        <Router>
          <nav className={classLocation}>
            <h2>Pet Family Types</h2>
            <ul>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/aquatic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Aquatic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/beast"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Beast} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/critters"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Critter} alt="icon"></img>
                </li>
              </NavLink>

              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/dragonkin"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Dragon} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/elemental"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Elemental} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/flying"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Flying} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/humanoid"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Humanoid} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/magic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Magic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/mechanical"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Mech} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/maximillian/undead"
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
            <Route path="/shadowlands/familiarExorcist/maximillian/default">
              <h1>Choose a guide to follow up from the above menu!</h1>
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/aquatic">
              <AquaticMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/beast">
              <BeastsMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/critters">
              <CrittersMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/dragonkin">
              <DragonkinMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/elemental">
              <ElementalMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/flying">
              <FlyingMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/humanoid">
              <HumanoidMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/magic">
              <MagicMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/mechanical">
              <MechanicalMaximillian />
            </Route>
            <Route path="/shadowlands/familiarExorcist/maximillian/undead">
              <UndeadMaximillian />
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

export default Maximillian;
