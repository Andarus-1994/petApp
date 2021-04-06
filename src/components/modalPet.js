import "../scss/style.css";
import { petAbility } from "./functions/serverFunctions.js";
import { useEffect, useState } from "react";
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
  faCog,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

function ModalPet({ pet, closeModal }) {
  const [petAbilities, setPetAbilities] = useState([]);
  const [loadAbilities, setLoadAbilities] = useState(true);

  useEffect(() => {
    if (petAbilities.length < 6) {
      petAbility(pet.abilities[petAbilities.length]).then((resp) => {
        if (!resp.error)
          setPetAbilities([...petAbilities, resp.assets[0].value]);
      });
      if (petAbilities.length === 5) setLoadAbilities(false);
    }
  }, [petAbilities, pet]);

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
  }

  return (
    <div>
      <div className="behindModal" onClick={closeModal}></div>
      <div className={"modalPet " + checkType(pet.battle_pet_type.name)}>
        <div className="icon">
          <img src={pet.icon} alt="NoIcon"></img>
        </div>
        <h1>{pet.creature.name}</h1>
        <h2> {pet.battle_pet_type.name}</h2>
        <p>"{pet.description}"</p>
        <ul>
          {!loadAbilities ? (
            petAbilities.map((ability, index) => (
              <li key={index}>
                <img src={ability}></img>
                <h2>{pet.abilities[index].ability.name}</h2>
              </li>
            ))
          ) : (
            <div className="loadingAbilities"></div>
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
