import { combineReducers } from "redux";
import Token from "./token.js";
import ProfileMedia from "./profile.js";
import SearchChar from "./search.js";
import PetsCharacter from "./pets.js";
import AllPets from "./allpets.js";
const allReducers = combineReducers({
  token: Token,
  profile: ProfileMedia,
  foundChar: SearchChar,
  pets: PetsCharacter,
  allPets: AllPets,
});

export default allReducers;
