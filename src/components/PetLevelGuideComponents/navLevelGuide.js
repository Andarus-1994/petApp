import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ScrollTop from "../router/scrollTop.js";
import ShadowmoonDraenorLevelGuide from "./shadowmoonDraenor.js";
import { useSelector, useDispatch } from "react-redux";
import DefaultLevelGuide from "./defaultLevelGuide.js";
import FrostFireRidgeLevelGuide from "./frostFireRidge.js";
import NagrandDraenorLevelGuide from "./nagrandDraenor.js";
import CourageousYon from "./CourageousYon.js";
import ThunderingPandarenSpirit from "./ThunderingPandarenSpirit.js";
import WhisperingPandarenSpirit from "./WhisperingPandarenSpirit.js";
function Nav() {
  const profile = useSelector((state) => state.profile);
  const favChar = JSON.parse(localStorage.getItem("favChar"));
  const searchedChar = useSelector((state) => state.foundChar);
  const dispatch = useDispatch();

  return (
    <Router>
      <nav>
        <ul className="nav-links-guide-leveling">
          <NavLink to="/guidepetlevel" className="label">
            <li>Guide Menu</li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/ashlei"
            activeClassName="active"
            className="inactive"
          >
            <li>
              {" "}
              Ashlei <br></br>(ShadowMoon Draenor)
            </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/gargra"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li>
              {" "}
              Gargra<br></br> (FrostFire Ridge Draenor){" "}
            </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/tarr"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li>
              {" "}
              Tarr the Terrible<br></br> (Nagrand Draenor){" "}
            </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/yon"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li>
              {" "}
              Courageous Yon <br></br>(Kun-lai Summit){" "}
            </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/thunderingPS"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li>
              {" "}
              Thundering Pandaren Spirit<br></br> (Kun-lai Summit){" "}
            </li>
          </NavLink>
          <NavLink
            to="/guidepetlevel/whisperingPS"
            exact
            activeClassName="active"
            className="inactive"
          >
            <li>
              {" "}
              Whispering Pandaren Spirit<br></br> (Jade Forest){" "}
            </li>
          </NavLink>
        </ul>
      </nav>
      <ScrollTop>
        <Switch>
          <Route path="/guidepetlevel/ashlei">
            <ShadowmoonDraenorLevelGuide />
          </Route>
          <Route path="/guidepetlevel/gargra">
            <FrostFireRidgeLevelGuide />
          </Route>
          <Route path="/guidepetlevel/tarr">
            <NagrandDraenorLevelGuide />
          </Route>
          <Route path="/guidepetlevel/yon">
            <CourageousYon />
          </Route>
          <Route path="/guidepetlevel/thunderingps">
            <ThunderingPandarenSpirit />
          </Route>
          <Route path="/guidepetlevel/whisperingps">
            <WhisperingPandarenSpirit />
          </Route>

          <Route path="/guidepetlevel">
            <DefaultLevelGuide />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default Nav;
