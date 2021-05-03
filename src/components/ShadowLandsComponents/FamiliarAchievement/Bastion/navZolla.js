import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
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
import location1 from "../../../../assets/Shadowlands/Zolla/zollaSL.jpg";
import location2 from "../../../../assets/Shadowlands/Zolla/zollaBastion.jpg";
import location3 from "../../../../assets/Shadowlands/Zolla/zolla.jpg";
import UndeadZolla from "./ZollaFamily/undeadZolla";
import DragonkinZolla from "./ZollaFamily/dragonkinZolla";
import CrittersZolla from "./ZollaFamily/crittersZolla";
import FlyingZolla from "./ZollaFamily/flyingZolla";
import ElementalZolla from "./ZollaFamily/elementalZolla";
import BeastsZolla from "./ZollaFamily/beastsZolla";
function Zolla() {
  return (
    <div className="containerAchiev">
      <div className="containerContent">
        <Router>
          <nav>
            <h2>Pet Family Types</h2>
            <ul>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/aquatic"
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
                to="/shadowlands/bastionAchievement/zolla/beast"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Beast} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/critters"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Critter} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/dragonkin"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Dragon} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/elemental"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Elemental} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/flying"
                activeClassName="active"
                className="inactive"
              >
                <li>
                  {" "}
                  <img src={Flying} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/humanoid"
                activeClassName="active"
                className="inactive"
                className="disabled"
              >
                <li>
                  {" "}
                  <img src={Humanoid} alt="icon"></img>
                </li>
              </NavLink>
              <NavLink
                to="/shadowlands/bastionAchievement/zolla/magic"
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
                to="/shadowlands/bastionAchievement/zolla/mechanical"
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
                to="/shadowlands/bastionAchievement/zolla/undead"
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
            <Route path="/shadowlands/bastionAchievement/zolla/aquatic">
              Aquatic
            </Route>
            <Route path="/shadowlands/bastionAchievement/zolla/beast">
              <BeastsZolla />
            </Route>
            <Route path="/shadowlands/bastionAchievement/zolla/critters">
              <CrittersZolla />
            </Route>
            <Route path="/shadowlands/bastionAchievement/zolla/dragonkin">
              <DragonkinZolla />
            </Route>
            <Route path="/shadowlands/bastionAchievement/zolla/elemental">
              <ElementalZolla />
            </Route>
            <Route path="/shadowlands/bastionAchievement/zolla/flying">
              <FlyingZolla />
            </Route>
            <Route path="/shadowlands/bastionAchievement/zolla/undead">
              <UndeadZolla />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="locationImages">
        <h2>Localization:</h2>
        <img src={location1} alt="noImg"></img>
        <img src={location2} alt="noImg"></img>
        <img src={location3} alt="noImg"></img>
      </div>
    </div>
  );
}

export default Zolla;
