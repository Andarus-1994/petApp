import {
	BrowserRouter as Router,
	Route,
	Switch,
	NavLink,
	useHistory,
} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Aquatic from "../../../../assets/FamilyIcons/aquatic.png";
import Beast from "../../../../assets/FamilyIcons/beast.png";
import Critter from "../../../../assets/FamilyIcons/critter.png";
import Dragon from "../../../../assets/FamilyIcons/dragonkin.png";
import Elemental from "../../../../assets/FamilyIcons/elemental.png";
import Flying from "../../../../assets/FamilyIcons/flying.png";
import Humanoid from "../../../../assets/FamilyIcons/humanoid.png";
import Magic from "../../../../assets/FamilyIcons/magic.png";
import Mech from "../../../../assets/FamilyIcons/mechanical.png";
import Undead from "../../../../assets/FamilyIcons/undead.png";
import location1 from "../../../../assets/Shadowlands/Sylla/syllaSL.jpg";
import location2 from "../../../../assets/Shadowlands/Sylla/syllaRevendreth.jpg";
import location3 from "../../../../assets/Shadowlands/Sylla/sylla.jpg";
import HumanoidSylla from "./SyllaFamily/humanoidSylla";
import DragonkinSylla from "./SyllaFamily/dragonkinSylla";
import FlyingSylla from "./SyllaFamily/flyingSylla";
import CrittersSylla from "./SyllaFamily/crittersSylla";
import AquaticSylla from "./SyllaFamily/aquaticSylla";
import BeastsSylla from "./SyllaFamily/beastsSylla";
import ElementalSylla from "./SyllaFamily/elementalSylla";
import MagicSylla from "./SyllaFamily/magicSylla";
import MechanicalSylla from "./SyllaFamily/mechanicalSylla";
import UndeadSylla from "./SyllaFamily/undeadSylla";
function Sylla() {
	const [coords] = useState("/way Revendreth 40, 53");

	return (
		<div className="containerAchiev">
			<div className="containerContent">
				<Router>
					<nav>
						<h2>Pet Family Types</h2>
						<ul>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/aquatic"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Aquatic} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/beast"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Beast} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/critters"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Critter} alt="icon"></img>
								</li>
							</NavLink>

							<NavLink
								to="/shadowlands/familiarExorcist/sylla/dragonkin"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Dragon} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/elemental"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Elemental} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/flying"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Flying} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/humanoid"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Humanoid} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/magic"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Magic} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/mechanical"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Mech} alt="icon"></img>
								</li>
							</NavLink>
							<NavLink
								to="/shadowlands/familiarExorcist/sylla/undead"
								activeClassName="active"
								className="inactive"
							>
								<li>
									{" "}
									<img src={Undead} alt="icon"></img>
								</li>
							</NavLink>
						</ul>
					</nav>
					<Switch>
						<Route path="/shadowlands/familiarExorcist/sylla/default">
							<h1>Choose a guide to follow up from the above menu!</h1>
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/aquatic">
							<AquaticSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/beast">
							<BeastsSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/critters">
							<CrittersSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/dragonkin">
							<DragonkinSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/elemental">
							<ElementalSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/flying ">
							<FlyingSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/humanoid">
							<HumanoidSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/magic">
							<MagicSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/mechanical">
							<MechanicalSylla />
						</Route>
						<Route path="/shadowlands/familiarExorcist/sylla/undead">
							<UndeadSylla />
						</Route>
					</Switch>
				</Router>
			</div>
			<div className="locationImages">
				<h2>Localization:</h2>
				<button
					onClick={() => {
						navigator.clipboard.writeText(coords);
					}}
				>
					Copy Coordinates <FontAwesomeIcon icon={faClipboard} />
				</button>
				<img src={location1} alt="noImg"></img>
				<img src={location2} alt="noImg"></img>
				<img src={location3} alt="noImg"></img>
			</div>
		</div>
	);
}

export default Sylla;
