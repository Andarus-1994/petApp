import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../router/scrollTop.js";
import ArdenwealdDefault from "./ArdenwealdWQs/ardenwealdDefault.js";
import Faryl from "./ArdenwealdWQs/faryl.js";
import Glitterdust from "./ArdenwealdWQs/glitterdust.js";
import Nightfang from "./ArdenwealdWQs/nightfang.js";
import Rascal from "./ArdenwealdWQs/rascal.js";

function NavArdenwealdWQs() {
  let history = useHistory();
  return (
    <Router>
      <div className="navArdenwealdWQs">
        <nav>
          <ul>
            <NavLink to="/shadowlands/ardenwealdWQ" className="label">
              <li>Ardenweald WQs</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/faryl"
              activeClassName="active"
              className="inactive"
            >
              <li> Airborne Defense Force (Faryl)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/nightfang"
              activeClassName="active"
              className="inactive"
            >
              <li> Lurking in the Shadows (Nightfang)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/glitterdust"
              activeClassName="active"
              className="inactive"
            >
              <li>Natural Defenders (Glitterdust)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/rascal"
              activeClassName="active"
              className="inactive"
            >
              <li> Ardenweald's Tricksters (Rascal)</li>
            </NavLink>
          </ul>
          <div className="space"></div>
          <ul>
            <NavLink to="/shadowlands/ardenwealdWQ" className="label">
              <li>Other Zones World Quests</li>
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
          <Route path="/shadowlands/ardenwealdWQ/faryl">
            <Faryl />
          </Route>
          <Route path="/shadowlands/ardenwealdWQ/glitterdust">
            <Glitterdust />
          </Route>
          <Route path="/shadowlands/ardenwealdWQ/nightfang">
            <Nightfang />
          </Route>
          <Route path="/shadowlands/ardenwealdWQ/rascal">
            <Rascal />
          </Route>
          <Route path="/shadowlands/ardenwealdWQ/">
            <ArdenwealdDefault />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavArdenwealdWQs;
