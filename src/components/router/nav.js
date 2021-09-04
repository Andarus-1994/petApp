import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import ScrollTop from "./scrollTop.js";
import Home from "../home.js";
import NotFound from "../notFound.js";
import "../../scss/style.css";
import { retriveToken } from "../actions";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { retriveMediaProfile, searchChar, getPetsCharacter, getAllPets, loginAction, logoutAction } from "../actions";
import { login } from "../functions/userFunctions.js";
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
import LoginPage from "../loginPage.js";
import RegisterPage from "../registerPage.js";
import ValidateUser from "../validateUser.js";
import PetiusLogo from "../../assets/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
function Nav() {
    const allPets = useSelector((state) => state.allPets);
    const profile = useSelector((state) => state.profile);
    const favChar = JSON.parse(localStorage.getItem("favChar"));
    const searchedChar = useSelector((state) => state.foundChar);
    const loginStatus = useSelector((state) => state.login);
    const userToken = localStorage.getItem("userToken");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retriveToken());

        console.log("test", allPets);
        if (userToken && !loginStatus.login) {
            login().then((resp) => {
                if (resp.error) return;
                dispatch(loginAction(resp.Success));
            });
        }

        if (favChar && Object.keys(searchedChar.character).length === 0) {
            dispatch(retriveMediaProfile(favChar));
            dispatch(searchChar(favChar));
            dispatch(getPetsCharacter(favChar));
        } else if (Object.keys(searchedChar.character).length > 0 && !profile.error) {
            dispatch(getPetsCharacter(searchedChar.character));
        }
        if (!favChar && Object.keys(searchedChar.character).length === 0) {
            dispatch(retriveMediaProfile({ char: "", server: "", region: "" }));
        }
    }, [searchedChar.character, searchedChar.error, allPets.loading, userToken]);

    useMemo(() => {
        if (allPets.loading) {
            dispatch(getAllPets());
        }
    }, []);

    function logOut() {
        dispatch(logoutAction());
        localStorage.removeItem("userToken");
    }

    return (
        <div className="Routes">
            <Router>
                <div className="headerTop">
                    <NavLink to="/" className="logo" exact activeClassName="active" className="inactive">
                        <img src={PetiusLogo} alt="noImg" />
                    </NavLink>

                    <Profile />
                    <nav>
                        <ul className="nav-links">
                            <NavLink to="/" exact activeClassName="active" className="inactive">
                                <li>
                                    {" "}
                                    <FontAwesomeIcon className="paw" icon={faPaw} /> Your Pets{" "}
                                </li>
                            </NavLink>
                            <NavLink to="/guidepetlevel" activeClassName="active" className="inactive">
                                <li> Pet Power-Leveling </li>
                            </NavLink>
                            <NavLink to="/shadowlands/default" activeClassName="active" className="inactive">
                                <li className="new">Shadowlands</li>
                            </NavLink>
                            <NavLink to="/contact" activeClassName="active" className="inactive contact">
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </nav>
                    <div className="loginButtons">
                        {!loginStatus.login ? (
                            <NavLink to="/login" exact activeClassName="active" className="inactive">
                                Login
                            </NavLink>
                        ) : (
                            <p className="logedUser">
                                You are logged as <span>{loginStatus.user.user}</span>,<br></br>
                                {!loginStatus.user.verified && <p> Visit your email to verify your account!</p>}
                                <a onClick={logOut}>Logout</a>
                            </p>
                        )}
                    </div>
                </div>

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
                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                        <Route exact path="/register">
                            <RegisterPage />
                        </Route>
                        <Route exact path="/validateUser">
                            <ValidateUser />
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
