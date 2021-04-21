import { NavLink } from "react-router-dom";
import Copyright from "../copyright.js";
import bgImg from "../../assets/Shadowlands/SLbackground.jpg";

function NavSL() {
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
              className="inactive disabled"
            >
              <li> Bastion WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/bastionAchievement"
              activeClassName="active"
              className="inactive disabled"
            >
              <li> Bastion Achievements</li>
            </NavLink>
          </ul>
        </nav>
        <nav>
          <ul className="nav">
            <h1>Revendreth</h1>
            <NavLink
              to="/shadowlands/revendrethdWQ"
              activeClassName="active"
              className="inactive disabled"
            >
              <li> Revendreth WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/revendrethdAchievement"
              activeClassName="active"
              className="inactive disabled"
            >
              <li> Revendreth Achievements</li>
            </NavLink>
          </ul>
        </nav>
        <div className="bigImage">
          <div className="overlayImage"></div>
          <img src={bgImg} alt="noImg"></img>
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
              className="inactive disabled"
            >
              <li> Maldraxxus WQ</li>
            </NavLink>
            <NavLink
              to="/shadowlands/maldraxxusAchievement"
              activeClassName="active"
              className="inactive disabled"
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
