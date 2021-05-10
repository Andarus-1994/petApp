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
import location1 from "../../../../assets/Shadowlands/Stratios/stratiosSL.jpg";
import location2 from "../../../../assets/Shadowlands/Stratios/stratiosBastion.jpg";
import location3 from "../../../../assets/Shadowlands/Stratios/stratios.jpg";

import AquaticStratios from "./StratiosFamily/aquaticStratios";
import HumanoidStratios from "./StratiosFamily/humanoidStratios";
import FlyingStratios from "./StratiosFamily/flyingStratios";
import CrittersStratios from "./StratiosFamily/crittersStratios";
import DragonkinStratios from "./StratiosFamily/dragonkinStratios";
import ElementalStratios from "./StratiosFamily/elementalStratios";
import UndeadStratios from "./StratiosFamily/undeadStratios";
import MagicStratios from "./StratiosFamily/magicStratios";
import BeastsStratios from "./StratiosFamily/beastsStratios";
import MechanicalStratios from "./StratiosFamily/mechanicalStratios";

function Stratios() {
  const [coords] = useState("/way Bastion 35, 62");
  return (
    <div className="containerAchiev">
      <div className="containerContent">
        <Router>
          <nav>
            <h2>Pet Family Types</h2>
            <ul>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/aquatic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Aquatic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/beast"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Beast} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/critters"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Critter} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/dragonkin"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Dragon} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/elemental"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Elemental} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/flying"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Flying} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/humanoid"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Humanoid} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/magic"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Magic} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/mechanical"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Mech} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/stratios/undead"
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
            <Route path="/shadowlands/bastionAchievement/stratios/default">
              <h1>Choose a guide to follow up from the above menu!</h1>
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/aquatic">
              <AquaticStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/beast">
              <BeastsStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/critters">
              <CrittersStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/dragonkin">
              <DragonkinStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/elemental">
              <ElementalStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/flying">
              <FlyingStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/humanoid">
              <HumanoidStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/magic">
              <MagicStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/mechanical">
              <MechanicalStratios />
            </Route>
            <Route path="/shadowlands/bastionAchievement/stratios/undead">
              <UndeadStratios />
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

export default Stratios;
