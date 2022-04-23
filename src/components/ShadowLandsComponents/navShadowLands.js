import { NavLink } from "react-router-dom";
import Copyright from "../copyright.js";
import bgImg from "../../assets/Shadowlands/SLbackground.jpg";
import { useEffect } from "react";
import ReactGa from "react-ga";

function NavSL() {
  useEffect(() => {
    ReactGa.initialize("UA-194620693-1");
    ReactGa.pageview(window.location.pathname);
    document.title = "Shadowlands Pet Guides";
    window.scrollTo({
      top: 270,
      left: 0,
    });
  }, []);
  return (
    <div className="shadowlands">
      <h1>Shadowlands Pet Guides</h1>
      <div className="containerNavSL">
        <nav className="first">
          <ul className="nav">
            <h1>Bastion</h1>
            <NavLink
              to="/shadowlands/bastionWQ"
              activeClassName="active"
              className="inactive"
            >
              <li> Bastion WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist"
              activeClassName="active"
              className="inactive"
            >
              <li> Bastion Achievements</li>
            </NavLink>
          </ul>
        </nav>
        <nav>
          <ul className="nav">
            <h1>Revendreth</h1>
            <NavLink
              to="/shadowlands/revendrethWQ"
              activeClassName="active"
              className="inactive"
            >
              <li> Revendreth WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/sylla/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Revendreth Achievements</li>
            </NavLink>
          </ul>
        </nav>
        <div className="bigImage">
          <div className="overlayImage"></div>
          <img src={bgImg} alt="noImg"></img>
          <NavLink to="/shadowlands/familiarExorcist" activeClassName="active">
            Family Exorcist
          </NavLink>
          <div className="overlayImage2"></div>
        </div>
        <nav>
          <ul className="nav">
            <h1>Ardenweald</h1>
            <NavLink
              to="/shadowlands/ardenwealdWQ"
              activeClassName="active"
              className="inactive"
            >
              <li> ArdenWeald WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/ardenwealdAchievement"
              activeClassName="active"
              className="inactive disabled"
            >
              <li> ArdenWeald Achievements</li>
            </NavLink>
          </ul>
        </nav>
        <nav>
          <ul className="nav">
            <h1>Maldraxxus</h1>
            <NavLink
              to="/shadowlands/maldraxxusWQ"
              activeClassName="active"
              className="inactive"
            >
              <li> Maldraxxus WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/familiarExorcist/maximillian/default"
              activeClassName="active"
              className="inactive"
            >
              <li> Maldraxxus Achievements</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Copyright />
    </div>
  );
}

export default NavSL;
