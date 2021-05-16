import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../../../router/scrollTop.js";

function NavRevendreth() {
  let history = useHistory();
  return (
    <Router>
      <div className="navBastionAchievement">
        <nav>
          <ul>
            <NavLink
              to="/shadowlands/revendrethAchievement/nowhere"
              className="label"
            >
              <li>Revendreth Achievement</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethAchievement/sylla/default"
              activeClassName="active"
              className="inactive"
            >
              <li>Sylla</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethAchievement/eyegor/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Eyegor</li>
            </NavLink>

            <NavLink
              to="/shadowlands/revendrethAchievement/addius/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Addius the Tormentor</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch></Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavRevendreth;
