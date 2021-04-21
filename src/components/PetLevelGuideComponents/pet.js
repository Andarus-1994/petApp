import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { petAbilities } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

function ShadowmoonDraenor({ pet, petOwned }) {
  const petsChar = useSelector((state) => state.pets);
  const [petAbilitiesState, setPetAbilities] = useState(null);
  const [petOwnedDetails, setPetOwnedDetails] = useState({
    loading: true,
    petDetails: [],
  });
  const idPet = petOwned.id;
  const ownedPet = petOwned.owned;
  const abilities = petOwned.abilities;
  const speed = petOwned.speed;
  const rarity = petOwned.rarity;
  useEffect(() => {
    if (petAbilitiesState === null) {
      petAbilities(pet.pets.abilities).then((resp) => {
        if (!resp.error) {
          console.log(resp);
          setPetAbilities(resp);
        }
      });
    }
    if (petOwnedDetails.petDetails.length === 0 && !petsChar.loading) {
      checkPetLevel25(idPet);
      console.log("intra");
    }

    console.log(petAbilitiesState);
    console.log(petOwnedDetails.petDetails);
  }, [petAbilitiesState, petOwnedDetails]);

  function checkPetLevel25(id) {
    const petsOwned = [];

    petsChar.pets.pets.map((pet) => {
      if (pet.species.id === id) {
        console.log("daa");
        petsOwned.push({
          level: pet.level,
          quality: pet.quality.type,
          speed: pet.stats.speed,
          breed: pet.stats.breed_id,
        });
      }
    });
    const level25Pets = petsOwned.filter((pet) => pet.level === 25);
    if (level25Pets.length > 0)
      setPetOwnedDetails({ loading: false, petDetails: [level25Pets[0]] });
    if (level25Pets.length === 0) {
      var maxLevelPet = 0;

      var j;
      for (var i = 0; i < petsOwned.length; i++) {
        if (maxLevelPet < petsOwned[i].level) {
          maxLevelPet = petsOwned[i];
          j = i;
        }
      }
      setPetOwnedDetails({ loading: false, petDetails: [petsOwned[j]] });
    }
    console.log(level25Pets);
    console.log(petsOwned);
  }

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
      {petOwnedDetails.petDetails && !petOwnedDetails.loading && ownedPet ? (
        petOwnedDetails.petDetails.map((detail) => (
          <div>
            <p className={detail.level === 25 ? "level" : "level required"}>
              Required Level 25<br></br> (Level {detail.level})
            </p>

            {speed === null ? (
              <p className="stats">No Stats Required </p>
            ) : speed > detail.speed ? (
              detail.breed === 5 || detail.breed === 15 ? (
                <p className="stats"> SS Breed</p>
              ) : (
                <p className="stats required">
                  Required Speed {speed} ({detail.speed}) - SS breed
                </p>
              )
            ) : (
              <p className="stats">Required SS Breed</p>
            )}

            {rarity !== detail.quality.toLowerCase() ? (
              <p className="rarity required">
                Required Quality {rarity.toUpperCase()} ({detail.quality})
              </p>
            ) : (
              <p className="stats"></p>
            )}
          </div>
        ))
      ) : (
        <div>
          <p className="level required">Level 25 required</p>
          {speed === null ? (
            <p className="stats">No Stats Required </p>
          ) : (
            <p className="stats required">Required Speed {speed})</p>
          )}
          <p className="stats required">Required Quality {rarity}</p>
        </div>
      )}
      {petAbilitiesState != null && petAbilitiesState.length === 6 ? (
        <div className="abilities">
          <div>
            <img
              src={petAbilitiesState[abilities[1]].assets[0].value}
              alt="noAbility"
            ></img>
            {pet.pets.abilities[abilities[1]].ability.name}
          </div>
          <div>
            <img
              src={petAbilitiesState[abilities[2]].assets[0].value}
              alt="noAbility"
            ></img>
            {pet.pets.abilities[abilities[2]].ability.name}
          </div>
          <div>
            <img
              src={petAbilitiesState[abilities[3]].assets[0].value}
              alt="noAbility"
            ></img>
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
        <div className="spaceOwned"></div>
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
