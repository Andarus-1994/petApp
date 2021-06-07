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
import { useEffect, useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  retriveMediaProfile,
  searchChar,
  getPetsCharacter,
  getAllPets,
} from "../actions";
import Profile from "../profileHeaderTop.js";
import LevelGuide from "../PetLevelGuideComponents/levelGuide.js";
import Contact from "../contact.js";
import Success from "../success.js";
import NavMenuShadowLands from "./../ShadowLandsComponents/navShadowLands.js";
import ArdenwealdWQs from "../ShadowLandsComponents/ardenwealdWQs.js";
import MaldraxxusWQs from "../ShadowLandsComponents/maldraxxusWQs.js";
import RevendrethWQs from "../ShadowLandsComponents/revendrethWQs.js";
import BastionWQs from "../ShadowLandsComponents/bastionWQs.js";
import BastionAchievement from "../ShadowLandsComponents/FamiliarAchievement/Bastion.js";

function Nav() {
  const allPets = useSelector((state) => state.allPets);
  const profile = useSelector((state) => state.profile);
  const favChar = JSON.parse(localStorage.getItem("favChar"));
  const searchedChar = useSelector((state) => state.foundChar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retriveToken());

    console.log("test", allPets);

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
  }, [searchedChar.character, searchedChar.error, allPets.loading]);

  useMemo(() => {
    if (allPets.loading) {
      dispatch(getAllPets());
    }
  }, []);

  return (
    <div className="Routes">
      <div className="headerTop">
        <h1>
          <span>Petius</span>, Pet Guides of Warcraft
        </h1>
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
              <li> Pet Power-Leveling </li>
            </NavLink>
            <NavLink
              to="/shadowlands/default"
              activeClassName="active"
              className="inactive"
            >
              <li className="new">Shadowlands</li>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="inactive"
            >
              <li> Contact</li>
            </NavLink>
          </ul>
        </nav>
        <ScrollTop>
          <Switch>
            <Route path="/shadowlands/default">
              <NavMenuShadowLands />
            </Route>

            <Route path="/shadowlands/ardenwealdWQ">
              <ArdenwealdWQs />
            </Route>
            <Route path="/shadowlands/bastionWQ">
              <BastionWQs />
            </Route>
            <Route path="/shadowlands/familiarExorcist">
              <BastionAchievement />
            </Route>
            <Route path="/shadowlands/maldraxxusWQ">
              <MaldraxxusWQs />
            </Route>
            <Route path="/shadowlands/revendrethWQ">
              <RevendrethWQs />
            </Route>

            <Route path="/guidepetlevel">
              <LevelGuide />
            </Route>
            <Route exact path="/success">
              <Success />
            </Route>
            <Route exact path="/contact">
              <Contact />
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
