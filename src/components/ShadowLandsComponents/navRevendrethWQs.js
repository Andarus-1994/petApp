import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../router/scrollTop.js";
import NotFound from "../notFound.js";
import Addius from "./RevendrethWQs/addius.js";
import Scorch from "./RevendrethWQs/scorch.js";
import Sylla from "./RevendrethWQs/sylla.js";
import Eyegor from "./RevendrethWQs/eyegor.js";
import RevendrethDefault from "./RevendrethWQs/revendrethDefault.js";
function NavArdenwealdWQs() {
  let history = useHistory();
  return (
    <Router>
      <div className="navRevendrethWQs">
        <nav>
          <ul>
            <NavLink to="/shadowlands/revendrethWQ" className="label">
              <li>Revendreth WQs</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethWQ/addius"
              activeClassName="active"
              className="inactive"
            >
              <li> Mind Games of Addius (Addius)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethWQ/scorch"
              activeClassName="active"
              className="inactive"
            >
              <li> Ashes will fall (Scorch)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethWQ/eyegor"
              activeClassName="active"
              className="inactive"
            >
              <li> Eyegor's Special Friends (Eyegor)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethWQ/sylla"
              activeClassName="active"
              className="inactive"
            >
              <li> Resilient Survivors (Sylla)</li>
            </NavLink>
          </ul>
          <div className="space"></div>
          <ul>
            <NavLink to="/shadowlands/ardenwealdWQ" className="label">
              <li>Other Zones World Quests</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ"
              activeClassName="active"
              className="inactive"
              onClick={() => {
                history.push("/shadowlands/ardenwealdWQ");
              }}
            >
              <li> Ardenweald</li>
            </NavLink>
            <NavLink
              to="/shadowlands/maldraxxusWQ"
              activeClassName="active"
              className="inactive"
              onClick={() => {
                history.push("/shadowlands/maldraxxusWQ");
              }}
            >
              <li> Maldraxxus</li>
            </NavLink>

            <NavLink
              to="/shadowlands/bastionWQ"
              activeClassName="active"
              className="inactive"
              onClick={() => {
                history.push("/shadowlands/bastionWQ");
              }}
            >
              <li> Bastion</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch>
          <Route path="/shadowlands/revendrethWQ/scorch">
            <Scorch />
          </Route>
          <Route path="/shadowlands/revendrethWQ/addius">
            <Addius />
          </Route>
          <Route path="/shadowlands/revendrethWQ/eyegor">
            <Eyegor />
          </Route>
          <Route path="/shadowlands/revendrethWQ/sylla">
            <Sylla />
          </Route>
          <Route path="/shadowlands/revendrethWQ/">
            <RevendrethDefault />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavArdenwealdWQs;
