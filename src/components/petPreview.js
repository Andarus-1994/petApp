import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

function PetPreview({
  petId,
  petRequiredLevel,
  petRarity,
  petBreed,
  chosenAbilities,
}) {
  const allUserPets = useSelector((state) => state.pets);
  const allPets = useSelector((state) => state.allPets);
  const [petInfo, setPetInfo] = useState({
    loading: true,
    data: {},
    anyPet: false,
  });
  const [petUser, setPetUser] = useState({ loading: true, data: {} });

  useEffect(() => {
    console.log(allUserPets.pets);
    console.log(allPets);
    if (petInfo.loading && !allPets.loading) {
      if (petId === 0) {
        setPetInfo({ loading: false, data: {}, anyPet: true });
        return;
      }
      checkPetLevel25(petId);
      allPets.pets.map((pet) => {
        if (pet.id === petId) {
          setPetInfo({
            loading: false,
            data: {
              id: pet.id,
              name: pet.name,
              icon: pet.icon,
              abilities: pet.abilities,
              type: pet.battle_pet_type.type,
            },
            anyPet: false,
          });
        }
      });
    }
  }, [petInfo.loading, allPets.loading]);

  function checkPetLevel25(id) {
    const petsOwned = [];

    allUserPets.pets.pets.map((pet) => {
      if (pet.species.id === id) {
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
      setPetUser({ loading: false, data: level25Pets[0] });
    if (level25Pets.length === 0) {
      var maxLevelPet = 0;

      var j;
      for (var i = 0; i < petsOwned.length; i++) {
        if (maxLevelPet < petsOwned[i].level) {
          maxLevelPet = petsOwned[i];
          j = i;
        }
      }
      setPetUser({ loading: false, data: petsOwned[j] });
    }
  }

  function checkRarity(rarity) {
    console.log("rarity", rarity, petRarity);
    if (petRarity.toUpperCase() === "RARE") {
      if (rarity === "RARE") return true;

      return false;
    }
    if (petRarity.toUpperCase() === "UNCOMMON") {
      if (rarity === "RARE") return true;
      if (rarity === "UNCOMMON") return true;
      return false;
    }
    if (petRarity.toUpperCase() === "COMMON") {
      if (rarity === "RARE") return true;
      if (rarity === "UNCOMMON") return true;
      if (rarity === "COMMON") return true;
      return false;
    }
    if (petRarity.toUpperCase() === "POOR") {
      if (rarity === "RARE") return true;
      if (rarity === "UNCOMMON") return true;
      if (rarity === "COMMON") return true;
      if (rarity === "POOR") return true;
      return false;
    }
  }

  function checkBreed(breed) {
    console.log(breed);
    console.log(petBreed);

    if (petBreed === undefined) {
      return true;
    }
    if (petBreed === "P/P" && (breed === 4 || breed === 14)) return true;
    if (petBreed === "S/S" && (breed === 5 || breed === 15)) return true;
    if (petBreed === "H/H" && (breed === 6 || breed === 16)) return true;
    if (petBreed === "H/P" && (breed === 7 || breed === 17)) return true;
    if (petBreed === "P/S" && (breed === 8 || breed === 18)) return true;
    if (petBreed === "H/S" && (breed === 9 || breed === 19)) return true;
    if (petBreed === "P/B" && (breed === 10 || breed === 20)) return true;
    if (petBreed === "S/B" && (breed === 11 || breed === 21)) return true;
    if (petBreed === "H/B" && (breed === 12 || breed === 22)) return true;
    if (petBreed === "B/B" && (breed === 3 || breed === 13)) return true;
    return false;
  }

  return petInfo.loading ? (
    <div className="loadingSpinner"></div>
  ) : !petInfo.anyPet ? (
    petUser.data ? (
      <li className={petInfo.data.type.toLowerCase()}>
        <div className="iconPet">
          <a
            href={"https://www.wowhead.com/battle-pet/" + petId}
            target="_blank"
          >
            <img src={petInfo.data.icon}></img>
          </a>
        </div>
        <p className="petName">{petInfo.data.name}</p>

        <p
          className={
            petUser.data.level >= petRequiredLevel ? "level" : "required level"
          }
        >
          Required Level {petRequiredLevel} <br></br>(Level {petUser.data.level}
          )
        </p>
        {checkRarity(petUser.data.quality.toUpperCase()) ? (
          ""
        ) : (
          <p className="required">
            Required Quality {petRarity} ({petUser.data.quality}){" "}
          </p>
        )}
        {checkBreed(petUser.data.breed) ? (
          <p className="stats">No Stats Required</p>
        ) : (
          <p className="required">Required Breed {petBreed}</p>
        )}
        <div className="abilities">
          <div>
            <a
              href={
                "https://www.wowhead.com/pet-ability=" +
                petInfo.data.abilities[chosenAbilities[0]].ability.id
              }
              target="_blank"
            >
              <img
                src={petInfo.data.abilities[chosenAbilities[0]].ability.icon}
                alt="noAbility"
              ></img>
            </a>
            {petInfo.data.abilities[chosenAbilities[0]].ability.name}
          </div>
          <div>
            <a
              href={
                "https://www.wowhead.com/pet-ability=" +
                petInfo.data.abilities[chosenAbilities[1]].ability.id
              }
              target="_blank"
            >
              <img
                src={petInfo.data.abilities[chosenAbilities[1]].ability.icon}
                alt="noAbility"
              ></img>
            </a>
            {petInfo.data.abilities[chosenAbilities[1]].ability.name}
          </div>
          <div>
            <a
              href={
                "https://www.wowhead.com/pet-ability=" +
                petInfo.data.abilities[chosenAbilities[2]].ability.id
              }
              target="_blank"
            >
              <img
                src={petInfo.data.abilities[chosenAbilities[2]].ability.icon}
                alt="noAbility"
              ></img>
            </a>
            {petInfo.data.abilities[chosenAbilities[2]].ability.name}
          </div>
        </div>
        <p className={petUser.data ? "owned" : "notOwned"}>
          {petUser.data ? "Owned" : "Not owned"}
        </p>
        {petUser.data ? (
          <FontAwesomeIcon className="check" icon={faCheck} />
        ) : (
          <FontAwesomeIcon className="notChecked" icon={faTimes} />
        )}
        <p className="type">- {petInfo.data.type} -</p>
        {petInfo.data.type === "BEAST" ? <div className="swipe"></div> : ""}
        {petInfo.data.type === "BEAST" ? (
          <FontAwesomeIcon className="paw" icon={faPaw} />
        ) : (
          ""
        )}
        {petInfo.data.type === "ELEMENTAL" ? (
          <div className="fireIcon"></div>
        ) : (
          ""
        )}
        {petInfo.data.type === "UNDEAD" ? (
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
        {petInfo.data.type === "FLYING" ? (
          <div>
            <FontAwesomeIcon className="feather" icon={faFeatherAlt} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "CRITTER" ? (
          <div>
            <FontAwesomeIcon className="frog" icon={faFrog} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "MECHANICAL" ? (
          <div>
            <FontAwesomeIcon className="cogs" icon={faCogs} />
            <FontAwesomeIcon className="cog" icon={faCog} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "HUMANOID" ? (
          <div>
            <FontAwesomeIcon className="mask" icon={faMask} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "AQUATIC" ? (
          <div>
            <div className="waterDrop1"></div>
            <div className="waterDrop2"></div>
            <div className="waterDrop3"></div>
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "DRAGONKIN" ? (
          <div>
            <div className="dragonSign1"></div>
          </div>
        ) : (
          ""
        )}
      </li>
    ) : (
      <li className={petInfo.data.type.toLowerCase()}>
        <div className="iconPet">
          <a
            href={"https://www.wowhead.com/battle-pet/" + petId}
            target="_blank"
          >
            <img src={petInfo.data.icon}></img>
          </a>
        </div>
        <p className="petName">{petInfo.data.name}</p>

        <p className="level">Required Level {petRequiredLevel}</p>
        <div className="abilities">
          <div>
            <a
              href={
                "https://www.wowhead.com/pet-ability=" +
                petInfo.data.abilities[chosenAbilities[0]].ability.id
              }
              target="_blank"
            >
              <img
                src={petInfo.data.abilities[chosenAbilities[0]].ability.icon}
                alt="noAbility"
              ></img>
            </a>
            {petInfo.data.abilities[chosenAbilities[0]].ability.name}
          </div>
          <div>
            <a
              href={
                "https://www.wowhead.com/pet-ability=" +
                petInfo.data.abilities[chosenAbilities[1]].ability.id
              }
              target="_blank"
            >
              <img
                src={petInfo.data.abilities[chosenAbilities[1]].ability.icon}
                alt="noAbility"
              ></img>
            </a>
            {petInfo.data.abilities[chosenAbilities[1]].ability.name}
          </div>
          <div>
            <a
              href={
                "https://www.wowhead.com/pet-ability=" +
                petInfo.data.abilities[chosenAbilities[2]].ability.id
              }
              target="_blank"
            >
              <img
                src={petInfo.data.abilities[chosenAbilities[2]].ability.icon}
                alt="noAbility"
              ></img>
            </a>
            {petInfo.data.abilities[chosenAbilities[2]].ability.name}
          </div>
        </div>
        <p className={petUser.data ? "owned" : "notOwned"}>
          {petUser.data ? "Owned" : "Not owned"}
        </p>
        {petUser.data ? (
          <FontAwesomeIcon className="check" icon={faCheck} />
        ) : (
          <FontAwesomeIcon className="notChecked" icon={faTimes} />
        )}
        <p className="type">- {petInfo.data.type} -</p>
        {petInfo.data.type === "BEAST" ? <div className="swipe"></div> : ""}
        {petInfo.data.type === "BEAST" ? (
          <FontAwesomeIcon className="paw" icon={faPaw} />
        ) : (
          ""
        )}
        {petInfo.data.type === "ELEMENTAL" ? (
          <div className="fireIcon"></div>
        ) : (
          ""
        )}
        {petInfo.data.type === "UNDEAD" ? (
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
        {petInfo.data.type === "FLYING" ? (
          <div>
            <FontAwesomeIcon className="feather" icon={faFeatherAlt} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "CRITTER" ? (
          <div>
            <FontAwesomeIcon className="frog" icon={faFrog} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "MECHANICAL" ? (
          <div>
            <FontAwesomeIcon className="cogs" icon={faCogs} />
            <FontAwesomeIcon className="cog" icon={faCog} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "HUMANOID" ? (
          <div>
            <FontAwesomeIcon className="mask" icon={faMask} />
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "AQUATIC" ? (
          <div>
            <div className="waterDrop1"></div>
            <div className="waterDrop2"></div>
            <div className="waterDrop3"></div>
          </div>
        ) : (
          ""
        )}
        {petInfo.data.type === "DRAGONKIN" ? (
          <div>
            <div className="dragonSign1"></div>
          </div>
        ) : (
          ""
        )}
      </li>
    )
  ) : (
    <li className="anyPet">
      <div className="iconPet">
        <img alt="?"></img>
      </div>
      Any Pet
    </li>
  );
}

export default PetPreview;
