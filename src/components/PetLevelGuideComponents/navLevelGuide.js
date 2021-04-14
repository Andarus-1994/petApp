import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ShadowmoonDraenorLevelGuide from "./shadowmoonDraenor.js";
import { useSelector, useDispatch } from "react-redux";
import DefaultLevelGuide from "./defaultLevelGuide.js";
import FrostFireRidgeLevelGuide from "./frostFireRidge.js";
function Nav() {
  const profile = useSelector((state) => state.profile);
  const favChar = JSON.parse(localStorage.getItem("favChar"));
  const searchedChar = useSelector((state) => state.foundChar);
  const dispatch = useDispatch();

  return (
    <Router>
      <nav>
        <ul className="nav-links-guide-leveling">
          <NavLink
            to="/guidepetlevel/ashlei"
            activeClassName="active"
            className="inactive"
          >
            <li> Ashlei (ShadowMoon Draenor)</li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/gargra"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li> Gargra (FrostFire Ridge Draenor) </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/silvermoon"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li> Pandaria </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/silvermoon"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li> Silvermoon </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/orgrimmar"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li> Orgrimmar </li>
          </NavLink>
        </ul>
      </nav>
      <Switch>
        <Route path="/guidepetlevel/ashlei">
          <ShadowmoonDraenorLevelGuide />
        </Route>
        <Route path="/guidepetlevel/gargra">
          <FrostFireRidgeLevelGuide />
        </Route>

        <Route path="/guidepetlevel/pandaria">pandaria</Route>
        <Route path="/guidepetlevel">
          <DefaultLevelGuide />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
