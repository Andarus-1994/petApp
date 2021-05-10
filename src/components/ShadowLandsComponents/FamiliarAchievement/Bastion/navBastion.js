import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../../../router/scrollTop.js";
import Stratios from "./navStratios.js";
import Thenia from "./navThenia.js";
import Zolla from "./navZolla.js";

function NavBastion() {
  let history = useHistory();
  return (
    <Router>
      <div className="navBastionAchievement">
        <nav>
          <ul>
            <NavLink
              to="/shadowlands/bastionAchievement/nowhere"
              className="label"
            >
              <li>Bastion Achievement</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionAchievement/stratios/default"
              activeClassName="active"
              className="inactive"
            >
              <li>Stratios</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionAchievement/zolla/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Zolla</li>
            </NavLink>

            <NavLink
              to="/shadowlands/bastionAchievement/thenia/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Thenia</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch>
          <Route path="/shadowlands/bastionAchievement/zolla/">
            <Zolla />
          </Route>
          <Route path="/shadowlands/bastionAchievement/zolla/default">
            <Zolla />
          </Route>
          <Route path="/shadowlands/bastionAchievement/stratios/">
            <Stratios />
          </Route>
          <Route path="/shadowlands/bastionAchievement/stratios/default">
            <Stratios />
          </Route>
          <Route path="/shadowlands/bastionAchievement/thenia/">
            <Thenia />
          </Route>
          <Route path="/shadowlands/bastionAchievement/thenia/default">
            <Thenia />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavBastion;
