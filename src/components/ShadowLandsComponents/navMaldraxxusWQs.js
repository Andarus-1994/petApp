import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../router/scrollTop.js";
import NotFound from "../notFound.js";

import Gorgemouth from "./MaldraxxusWQs/gorgemouth.js";
import Dundley from "./MaldraxxusWQs/dundley.js";
import Maximilian from "./MaldraxxusWQs/maximillian.js";
import Rotgut from "./MaldraxxusWQs/rotgut.js";
import MaldraxxusDefault from "./MaldraxxusWQs/maldraxxusDefault.js";

function NavMaldraxxusWQs() {
  let history = useHistory();
  return (
    <Router>
      <div className="navMaldraxxusWQs">
        <nav>
          <ul>
            <NavLink to="/shadowlands/ardenwealdWQ" className="label">
              <li>Maldraxxus World Quests</li>
            </NavLink>
            <NavLink
              to="/shadowlands/maldraxxusWQ/gorgemouth"
              activeClassName="active"
              className="inactive"
            >
              <li> Failed Experiment (Gorgemouth)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/maldraxxusWQ/maximilian"
              activeClassName="active"
              className="inactive"
            >
              <li> Caregiver Maximillian</li>
            </NavLink>
            <NavLink
              to="/shadowlands/maldraxxusWQ/rotgut"
              activeClassName="active"
              className="inactive"
            >
              <li> Rotgut</li>
            </NavLink>
            <NavLink
              to="/shadowlands/maldraxxusWQ/dundley"
              activeClassName="active"
              className="inactive"
            >
              <li> Dundley Stickyfingers</li>
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
              to="/shadowlands/revendrethWQ"
              activeClassName="active"
              className="inactive"
              onClick={() => {
                history.push("/shadowlands/revendrethWQ");
              }}
            >
              <li> Revendreth</li>
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
          <Route path="/shadowlands/maldraxxusWQ/gorgemouth">
            <Gorgemouth />
          </Route>
          <Route path="/shadowlands/maldraxxusWQ/dundley">
            <Dundley />
          </Route>
          <Route path="/shadowlands/maldraxxusWQ/maximilian">
            <Maximilian />
          </Route>
          <Route path="/shadowlands/maldraxxusWQ/rotgut">
            <Rotgut />
          </Route>
          <Route path="/shadowlands/maldraxxusWQ/">
            <MaldraxxusDefault />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavMaldraxxusWQs;
