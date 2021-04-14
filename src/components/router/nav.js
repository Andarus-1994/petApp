import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ScrollTop from "./scrollTop.js";
import Home from "../home.js";
import NotFound from "../notFound.js";
import "../../scss/style.css";

import { retriveToken } from "../actions";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { retriveMediaProfile, searchChar, getPetsCharacter } from "../actions";
import Profile from "../profileHeaderTop.js";
import LevelGuide from "../PetLevelGuideComponents/levelGuide.js";

function Nav() {
  const profile = useSelector((state) => state.profile);
  const favChar = JSON.parse(localStorage.getItem("favChar"));
  const searchedChar = useSelector((state) => state.foundChar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retriveToken());
    console.log(searchedChar);
    if (favChar && Object.keys(searchedChar.character).length === 0) {
      dispatch(retriveMediaProfile(favChar));
      dispatch(searchChar(favChar));
      dispatch(getPetsCharacter(favChar));
    } else if (
      Object.keys(searchedChar.character).length > 0 &&
      !profile.error
    ) {
      console.log("nu merge");
      dispatch(getPetsCharacter(searchedChar.character));
    }
    if (!favChar && Object.keys(searchedChar.character).length === 0) {
      dispatch(retriveMediaProfile({ char: "", server: "", region: "" }));
    }
  }, [searchedChar.character, searchedChar.error]);

  return (
    <div className="Routes">
      <div className="headerTop">
        <h1>Petopia of Warcraft</h1>
        <Profile />
      </div>
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
              <LevelGuide />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </ScrollTop>
      </Router>
    </div>
  );
}

export default Nav;
