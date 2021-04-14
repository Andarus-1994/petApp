import { combineReducers } from "redux";
import Token from "./token.js";
import ProfileMedia from "./profile.js";
import SearchChar from "./search.js";
import PetsCharacter from "./pets.js";
const allReducers = combineReducers({
  token: Token,
  profile: ProfileMedia,
  foundChar: SearchChar,
  pets: PetsCharacter,
});

export default allReducers;
