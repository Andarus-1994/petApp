import "../scss/style.css";
import { petAbility } from "./functions/serverFunctions.js";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faPaw,
  faFeatherAlt,
  faFrog,
  faCog,
  faCogs,
  faMask,
} from "@fortawesome/free-solid-svg-icons";

function ModalPet({ pet, closeModal }) {
  useEffect(() => {}, [pet]);

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
    <div>
      <div className="behindModal" onClick={closeModal}></div>
      <div className={"modalPet " + checkType(pet.battle_pet_type.type)}>
        <div className="icon">
          <a
            href={"https://www.wowhead.com/battle-pet/" + pet.id}
            target="_blank"
          >
            <img src={pet.icon} alt="NoIcon"></img>
          </a>
        </div>
        <h1>{pet.name}</h1>
        <h2> {pet.battle_pet_type.name}</h2>
        <p>"{pet.description}"</p>
        <ul>
          {pet.abilities ? (
            pet.abilities.map((ability, index) => (
              <li key={index}>
                <a
                  href={
                    "https://www.wowhead.com/pet-ability=" + ability.ability.id
                  }
                  target="_blank"
                >
                  <img src={ability.ability.icon} alt="noIcon"></img>
                </a>
                <h2>{ability.ability.name}</h2>
              </li>
            ))
          ) : (
            <p className="stats">No abilities</p>
          )}
        </ul>
        <p className="trade">{pet.is_tradable ? "Tradable" : "Non-tradable"}</p>
        <p className="type">{pet.source.type}</p>
        <p className="source">{pet.source.name}</p>
        {pet.battle_pet_type.type === "UNDEAD" ? (
          <div>
            <FontAwesomeIcon
              className="skull"
              icon={faSkull}
              style={{ top: 3 * pet.level + "%" }}
            />
            <FontAwesomeIcon className="skull1" icon={faSkull} />
            <FontAwesomeIcon className="skull2" icon={faSkull} />
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "MECHANICAL" ? (
          <div>
            <FontAwesomeIcon className="cogs" icon={faCogs} />
            <FontAwesomeIcon className="cog" icon={faCog} />
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "CRITTER" ? (
          <div>
            <FontAwesomeIcon className="frog" icon={faFrog} />
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "AQUATIC" ? (
          <div>
            <div className="waterDrop1"></div>
            <div className="waterDrop2"></div>
            <div className="waterDrop3"></div>
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "FLYING" ? (
          <div>
            <FontAwesomeIcon className="feather" icon={faFeatherAlt} />
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "DRAGONKIN" ? (
          <div>
            <div className="dragonSign1"></div>
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "BEAST" ? (
          <div className="swipe"></div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "BEAST" ? (
          <FontAwesomeIcon className="paw" icon={faPaw} />
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "HUMANOID" ? (
          <div>
            <FontAwesomeIcon className="mask" icon={faMask} />
          </div>
        ) : (
          ""
        )}
        {pet.battle_pet_type.type === "ELEMENTAL" ? (
          <div className="fireIcon"></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ModalPet;
