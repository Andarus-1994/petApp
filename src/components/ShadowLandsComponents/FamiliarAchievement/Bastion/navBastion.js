import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../../../router/scrollTop.js";
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
              to="/shadowlands/bastionAchievement/stratios"
              activeClassName="active"
              className="inactive"
              className="disabled"
            >
              <li>Stratios</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionAchievement/zolla"
              activeClassName="active"
              className="inactive"
            >
              <li> Zolla</li>
            </NavLink>

            <NavLink
              to="/shadowlands/bastionAchievement/thenia"
              activeClassName="active"
              className="inactive"
              className="disabled"
            >
              <li> Thenia</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch>
          <Route path="/shadowlands/bastionAchievement/zolla">
            <Zolla />
          </Route>
          <Route path="/shadowlands/bastionAchievement/">Default</Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavBastion;
