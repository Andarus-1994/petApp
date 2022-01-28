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
import location1 from "../../../../assets/Shadowlands/Addius/addiusSL.jpg";
import location2 from "../../../../assets/Shadowlands/Addius/addiusRevendreth.jpg";
import location3 from "../../../../assets/Shadowlands/Addius/addius.jpg";
import AquaticEyegor from "./EyegorFamily/aquaticEyegor";
import AquaticAddius from "./AddiusFamily/aquaticAddius";
import BeastsAddius from "./AddiusFamily/beastsAddius";
import CrittersAddius from "./AddiusFamily/crittersAddius";
import DragonkinAddius from "./AddiusFamily/dragonkinAddius";
import ElementalAddius from "./AddiusFamily/elementalAddius";
import FlyingAddius from "./AddiusFamily/flyingAddius";
import HumanoidAddius from "./AddiusFamily/humanoidAddius";
import MagicAddius from "./AddiusFamily/magicAddius";
import MechanicalAddius from "./AddiusFamily/mechanicalAddius";
import UndeadAddius from "./AddiusFamily/undeadAddius";
function Addius() {
  const [coords] = useState("/way Revendreth 40, 53");

  return (
    <div className="containerAchiev">
      <div className="containerContent">
        <Router>
          <nav>
            <h2>Pet Family Types</h2>
            <ul>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/aquatic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Aquatic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/beast"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Beast} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/critters"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Critter} alt="icon"></img>
                </li>
              </NavLink>

              <NavLink
                to="/shadowlands/familiarExorcist/addius/dragonkin"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Dragon} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/elemental"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Elemental} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/flying"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Flying} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/humanoid"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Humanoid} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/magic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Magic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/mechanical"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Mech} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/familiarExorcist/addius/undead"
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
            <Route path="/shadowlands/familiarExorcist/addius/default">
              <h1>Choose a guide to follow up from the above menu!</h1>
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/aquatic">
              <AquaticAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/beast">
              <BeastsAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/critters">
              <CrittersAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/dragonkin">
              <DragonkinAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/elemental">
              <ElementalAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/flying">
              <FlyingAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/humanoid">
              <HumanoidAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/magic">
              <MagicAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/mechanical">
              <MechanicalAddius />
            </Route>
            <Route path="/shadowlands/familiarExorcist/addius/undead">
              <UndeadAddius />
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

export default Addius;
