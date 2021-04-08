import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ScrollTop from "./scrollTop.js";
import Home from "../home.js";
import "../../scss/style.css";

function Nav() {
  return (
    <div className="Routes">
      <Router>
        <nav>
          <ul className="nav-links">
            <NavLink to="/" exact activeClassName="active" className="inactive">
              <li> Your Pets </li>
            </NavLink>
            <NavLink
              to="/guidepetlevel"
              activeClassName="active"
              className="inactive"
            >
              <li> Pet Leveling Guide</li>
            </NavLink>
          </ul>
        </nav>
        <ScrollTop>
          <Switch>
            <Route path="/guidepetlevel">
              <div>Guide here on the way</div>
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollTop>
      </Router>
    </div>
  );
}

export default Nav;
