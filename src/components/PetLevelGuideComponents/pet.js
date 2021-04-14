import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singlePetInfo, petAbility } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faBolt,
  faMeteor,
  faSkull,
  faPaw,
  faFeatherAlt,
  faFrog,
  faCogs,
  faCog,
  faMask,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function ShadowmoonDraenor({ pet, idPet, ownedPet, abilities }) {
  const petsChar = useSelector((state) => state.pets);

  useEffect(() => {}, []);

  function checkType(type) {
    if (type.toLowerCase() === "elemental") {
      return "elemental";
    }
    if (type.toLowerCase() === "critter") {
      return "critter";
    }
    if (type.toLowerCase() === "aquatic") {
      return "aquatic";
    }
    if (type.toLowerCase() === "magic") {
      return "magic";
    }
    if (type.toLowerCase() === "beast") {
      return "beast";
    }
    if (type.toLowerCase() === "dragonkin") {
      return "dragonkin";
    }
    if (type.toLowerCase() === "undead") {
      return "undead";
    }
    if (type.toLowerCase() === "flying") {
      return "flying";
    }
    if (type.toLowerCase() === "mechanical") {
      return "mechanical";
    }
    if (type.toLowerCase() === "humanoid") {
      return "humanoid";
    }
  }

  return (
    <li
      className={[checkType(pet.pets.battle_pet_type.type)]}
      style={{ animationDuration: 0.8 + "s" }}
    >
      <div className="iconPet">
        <img src={pet.pets.icon} alt="noImg"></img>
      </div>
      <div className="petName">{pet.pets.name}</div>{" "}
      <p className="level">Level 25 </p>
      <p className="stats">No Stats Required</p>
      {pet.petAbilities.length === 6 ? (
        <div className="abilities">
          <div>
            <img src={pet.petAbilities[abilities[1]]}></img>
            {pet.pets.abilities[abilities[1]].ability.name}
          </div>
          <div>
            <img src={pet.petAbilities[abilities[2]]}></img>
            {pet.pets.abilities[abilities[2]].ability.name}
          </div>
          <div>
            <img src={pet.petAbilities[abilities[3]]}></img>
            {pet.pets.abilities[abilities[3]].ability.name}
          </div>
        </div>
      ) : (
        <div className="loadingAbilities"></div>
      )}
      {petsChar.pets.pets.length > 0 ? (
        <div>
          <p className={ownedPet ? "owned" : "notOwned"}>
            {ownedPet ? "Owned" : "Not owned"}
          </p>
          {ownedPet ? (
            <FontAwesomeIcon className="check" icon={faCheck} />
          ) : (
            <FontAwesomeIcon className="notChecked" icon={faTimes} />
          )}
        </div>
      ) : (
        <div className="space"></div>
      )}
      <p className="type">- {pet.pets.battle_pet_type.type} -</p>
      {pet.pets.battle_pet_type.type === "BEAST" ? (
        <div className="swipe"></div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "BEAST" ? (
        <FontAwesomeIcon className="paw" icon={faPaw} />
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "ELEMENTAL" ? (
        <div className="fireIcon"></div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "UNDEAD" ? (
        <div>
          <FontAwesomeIcon
            className="skull"
            icon={faSkull}
            style={{ top: 3 * 7 + "%" }}
          />
          <FontAwesomeIcon className="skull1" icon={faSkull} />
          <FontAwesomeIcon className="skull2" icon={faSkull} />
        </div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "FLYING" ? (
        <div>
          <FontAwesomeIcon className="feather" icon={faFeatherAlt} />
        </div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "CRITTER" ? (
        <div>
          <FontAwesomeIcon className="frog" icon={faFrog} />
        </div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "MECHANICAL" ? (
        <div>
          <FontAwesomeIcon className="cogs" icon={faCogs} />
          <FontAwesomeIcon className="cog" icon={faCog} />
        </div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "HUMANOID" ? (
        <div>
          <FontAwesomeIcon className="mask" icon={faMask} />
        </div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "AQUATIC" ? (
        <div>
          <div className="waterDrop1"></div>
          <div className="waterDrop2"></div>
          <div className="waterDrop3"></div>
        </div>
      ) : (
        ""
      )}
      {pet.pets.battle_pet_type.type === "DRAGONKIN" ? (
        <div>
          <div className="dragonSign1"></div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

export default ShadowmoonDraenor;
