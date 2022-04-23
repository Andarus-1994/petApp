import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useLocation,
} from "react-router-dom";
import ScrollTop from "../../../router/scrollTop.js";
import Glitterdust from "../Ardenweald/navGlitterdust.js";
import Maximillian from "../Maldraxxus/navMaximiillian.js";
import Addius from "../Revendreth/navAddius.js";
import Eyegor from "../Revendreth/navEyegor.js";
import Sylla from "../Revendreth/navSylla.js";
import Stratios from "./navStratios.js";
import Thenia from "./navThenia.js";
import Zolla from "./navZolla.js";

function NavBastion() {
  return (
    <Router>
      <div className="navBastionAchievement">
        <nav>
          <ul>
            <NavLink
              to="/shadowlands/familiarExorcist/nowhere"
              className="label"
            >
              <li>Bastion Achievement</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/stratios/default"
              activeClassName="active"
              className="inactive"
            >
              <li>Stratios</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/zolla/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Zolla</li>
            </NavLink>

            <NavLink
              to="/shadowlands/familiarExorcist/thenia/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Thenia</li>
            </NavLink>
          </ul>
        </nav>
        <nav>
          <ul>
            <NavLink
              to="/shadowlands/familiarExorcist/nowhere"
              className="label"
            >
              <li>Revendreth Achievement</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/sylla/default"
              activeClassName="active"
              className="inactive"
            >
              <li>Sylla</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/eyegor/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Eyegor</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/addius/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Addius the Tormentor</li>
            </NavLink>
          </ul>
        </nav>
        <nav>
          <ul>
            <NavLink
              to="/shadowlands/familiarExorcist/nowhere"
              className="label"
            >
              <li>Maldraxxus Achievement</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/maximillian/default"
              activeClassName="active"
              className="inactive"
            >
              <li>Caregiver Maximillian</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/dundley/default"
              activeClassName="active"
              className="inactive"
              className="disabled"
            >
              <li> Dundley Stickyfingers</li>
            </NavLink>

            <NavLink
              to="/shadowlands/familiarExorcist/rotgut/default"
              activeClassName="active"
              className="inactive"
              className="disabled"
            >
              <li> Rotgut</li>
            </NavLink>
          </ul>
        </nav>
        <nav>
          <ul>
            <NavLink
              to="/shadowlands/familiarExorcist/nowhere"
              className="label"
            >
              <li>Ardenweald Achievement</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/glitterdust/default"
              activeClassName="active"
              className="inactive"
            >
              <li>Glitterdust</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/faryl/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Faryl</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch>
          <Route path="/shadowlands/familiarExorcist/zolla/">
            <Zolla />
          </Route>
          <Route path="/shadowlands/familiarExorcist/zolla/default">
            <Zolla />
          </Route>
          <Route path="/shadowlands/familiarExorcist/stratios/">
            <Stratios />
          </Route>
          <Route path="/shadowlands/familiarExorcist/stratios/default">
            <Stratios />
          </Route>
          <Route path="/shadowlands/familiarExorcist/thenia/">
            <Thenia />
          </Route>
          <Route path="/shadowlands/familiarExorcist/thenia/default">
            <Thenia />
          </Route>
          <Route path="/shadowlands/familiarExorcist/sylla/">
            <Sylla />
          </Route>
          <Route path="/shadowlands/familiarExorcist/sylla/default">
            <Sylla />
          </Route>
          <Route path="/shadowlands/familiarExorcist/eyegor/">
            <Eyegor />
          </Route>
          <Route path="/shadowlands/familiarExorcist/eyegor/default">
            <Eyegor />
          </Route>
          <Route path="/shadowlands/familiarExorcist/addius/">
            <Addius />
          </Route>
          <Route path="/shadowlands/familiarExorcist/addius/default">
            <Addius />
          </Route>
          <Route path="/shadowlands/familiarExorcist/maximillian/">
            <Maximillian />
          </Route>
          <Route path="/shadowlands/familiarExorcist/maximillian/default">
            <Maximillian />
          </Route>
          <Route path="/shadowlands/familiarExorcist/glitterdust/default">
            <Glitterdust />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavBastion;
