import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ScrollTop from "../router/scrollTop.js";
import Faryl from "./ArdenwealdWQs/faryl.js";

function NavArdenwealdWQs() {
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
              <li> Faryl</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/das"
              activeClassName="active"
              className="inactive"
            >
              <li> Nightfang</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/dsa"
              activeClassName="active"
              className="inactive"
            >
              <li> Glitterdust</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdWQ/dsaaa"
              activeClassName="active"
              className="inactive"
            >
              <li> Rascal</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <ScrollTop>
        <Switch>
          <Route path="/shadowlands/ardenwealdWQ/faryl">
            <Faryl />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default NavArdenwealdWQs;
