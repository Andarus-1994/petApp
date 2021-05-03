import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import ScrollTop from "../router/scrollTop.js";
import NotFound from "../notFound.js";
import Dundley from "./MaldraxxusWQs/dundley.js";
import Jawbone from "./BastionWQs/jawbone.js";
import Thenia from "./BastionWQs/thenia.js";
import Stratios from "./BastionWQs/stratios.js";
import Zolla from "./BastionWQs/zolla.js";
import BastionDefault from "./BastionWQs/bastionDefault.js";

function NavBastionWQs() {
  let history = useHistory();
  return (
    <Router>
      <div className="navBastionWQs">
        <nav>
          <ul>
            <NavLink to="/shadowlands/ardenwealdWQ" className="label">
              <li>Bastion World Quests</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionWQ/stratios"
              activeClassName="active"
              className="inactive"
            >
              <li>Cliffs of Bastion (Stratios)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionWQ/zolla"
              activeClassName="active"
              className="inactive"
            >
              <li> Micro Defense Force (Zolla)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionWQ/jawbone"
              activeClassName="active"
              className="inactive"
            >
              <li> Mega Bite (Jawbone)</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionWQ/thenia"
              activeClassName="active"
              className="inactive"
            >
              <li> Thenia's Loyal Companions</li>
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
              to="/shadowlands/maldraxxusWQ"
              activeClassName="active"
              className="inactive"
              onClick={() => {
                history.push("/shadowlands/maldraxxusWQ");
              }}
            >
              <li> Maldraxxus</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch>
          <Route path="/shadowlands/bastionWQ/jawbone">
            <Jawbone />
          </Route>
          <Route path="/shadowlands/bastionWQ/thenia">
            <Thenia />
          </Route>
          <Route path="/shadowlands/bastionWQ/stratios">
            <Stratios />
          </Route>
          <Route path="/shadowlands/bastionWQ/zolla">
            <Zolla />
          </Route>
          <Route path="/shadowlands/bastionWQ/">
            <BastionDefault />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavBastionWQs;
