import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Pet from "./pet.js";
import location3 from "../../assets/Gargra/gargraFrostFireRidge.jpg";
import location from "../../assets/Gargra/gargraDraenorMap.jpg";
import location2 from "../../assets/Gargra/gargraFrostFireMap.jpg";

function FrostFireRidge() {
  const petsChar = useSelector((state) => state.pets);
  const [renderOnce, setRenderOnce] = useState(false);
  const [coords] = useState("/way FrostFire Ridge 68, 65");
  const [pet, setPet] = useState({
    id: 1387,
    owned: false,
    abilities: { 1: 0, 2: 4, 3: 5 },
    speed: null,
    rarity: "rare",
  });
  const [slot3pet2, setslot3pet2] = useState({
    id: 1672,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 5 },
    loading: true,
    speed: null,
    rarity: "rare",
  });

  const [slot3pet3, setslot3pet3] = useState({
    id: 1531,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
  });
  const [slot3pet4, setslot3pet4] = useState({
    id: 1233,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
  });
  const [curentActiveSlot3, setCurentActiveSlot3] = useState({
    id: null,
    found: false,
  });

  const [requiredPetOne, setRequiredPetOne] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetTwoSlot3, setRequiredPetTwoSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetThreeSlot3, setRequiredPetThreeSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetFourSlot3, setRequiredPetFourSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });

  useEffect(() => {
    console.log(petsChar.pets);
    if (
      requiredPetOne.loading ||
      (curentActiveSlot3.id === slot3pet2.id && requiredPetTwoSlot3.loading) ||
      (curentActiveSlot3.id === slot3pet3.id &&
        requiredPetThreeSlot3.loading) ||
      (curentActiveSlot3.id === slot3pet4.id && requiredPetFourSlot3.loading)
    )
      getPetDetails();

    setPet({
      ...pet,
      owned: checkOwnedPet(pet.id),
    });
    setslot3pet2({
      ...slot3pet2,
      owned: checkOwnedPet(slot3pet2.id),
      loading: false,
    });
    setslot3pet3({
      ...slot3pet3,
      owned: checkOwnedPet(slot3pet3.id),
      loading: false,
    });
    setslot3pet4({
      ...slot3pet4,
      owned: checkOwnedPet(slot3pet4.id),
      loading: false,
    });
    console.log(renderOnce);
    if (
      renderOnce &&
      !curentActiveSlot3.found &&
      curentActiveSlot3.id === null
    ) {
      ActivePetSlot3();
    }

    // if I find a pet in collection for slot 3

    // if I don't find any pet in collection for slot 3
    setRenderOnce(true);
    console.log(curentActiveSlot3.found);
  }, [
    petsChar,
    slot3pet4.owned,
    slot3pet3.owned,
    slot3pet2.owned,
    renderOnce,
    curentActiveSlot3,
  ]);

  function ActivePetSlot3() {
    console.log("activeaza pet slot");

    if (slot3pet2.owned && checkPetLevel25(slot3pet2.id)) {
      return setCurentActiveSlot3({ id: slot3pet2.id, found: true });
    }
    if (slot3pet3.owned && checkPetLevel25(slot3pet3.id)) {
      return setCurentActiveSlot3({ id: slot3pet3.id, found: true });
    }
    if (slot3pet4.owned && checkPetLevel25(slot3pet4.id)) {
      return setCurentActiveSlot3({ id: slot3pet4.id, found: true });
    }
    if (slot3pet2.owned) {
      return setCurentActiveSlot3({ id: slot3pet2.id, found: true });
    }
    if (slot3pet3.owned) {
      return setCurentActiveSlot3({ id: slot3pet3.id, found: true });
    }
    if (slot3pet4.owned) {
      return setCurentActiveSlot3({ id: slot3pet4.id, found: true });
    }
  }

  function checkPetLevel25(id) {
    if (
      petsChar.pets.pets.find(
        (pet) => pet.species.id === id && pet.level === 25
      )
    ) {
      console.log("merge aici da");
      return true;
    } else return false;
  }

  function defaultPetSlot3() {
    return setCurentActiveSlot3({ id: slot3pet2.id, found: true });
  }

  function getPetDetails() {
    singlePetInfo(pet).then((res) => {
      setRequiredPetOne({ pets: res, petAbilities: [], loading: false });
    });
    if (curentActiveSlot3.id === slot3pet2.id) {
      singlePetInfo(slot3pet2).then((res) => {
        setRequiredPetTwoSlot3({ pets: res, petAbilities: [], loading: false });
      });
    }
    if (curentActiveSlot3.id === slot3pet3.id) {
      singlePetInfo(slot3pet3).then((res) => {
        setRequiredPetThreeSlot3({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }
    if (curentActiveSlot3.id === slot3pet4.id) {
      singlePetInfo(slot3pet4).then((res) => {
        setRequiredPetFourSlot3({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }
    if (curentActiveSlot3.id === null) {
      singlePetInfo(slot3pet2).then((res) => {
        setRequiredPetTwoSlot3({ pets: res, petAbilities: [], loading: false });
      });
    }
  }

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  return (
    <div className="frostFireDraenorLevelGuide">
      <h1>Gargra Pet Battle Guide</h1>
      <h2>FrostFire Ridge (Draenor)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerFrostFireRidgeLevel">
        <div className="FightRequirements">
          <ul>
            {!requiredPetOne.loading && requiredPetOne.pets ? (
              <Pet pet={requiredPetOne} petOwned={pet} />
            ) : (
              ""
            )}
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
            {!requiredPetTwoSlot3.loading && requiredPetTwoSlot3.pets
              ? curentActiveSlot3.id === slot3pet2.id && (
                  <Pet pet={requiredPetTwoSlot3} petOwned={slot3pet2} />
                )
              : ""}
            {!requiredPetThreeSlot3.loading && requiredPetThreeSlot3.pets ? (
              curentActiveSlot3.id === slot3pet3.id ? (
                <Pet pet={requiredPetThreeSlot3} petOwned={slot3pet3} />
              ) : (
                "not"
              )
            ) : (
              ""
            )}
            {!requiredPetFourSlot3.loading && requiredPetFourSlot3.pets
              ? curentActiveSlot3.id === slot3pet4.id && (
                  <Pet pet={requiredPetFourSlot3} petOwned={slot3pet4} />
                )
              : ""}
            {!requiredPetTwoSlot3.loading && requiredPetTwoSlot3.pets
              ? curentActiveSlot3.id === null && (
                  <Pet pet={requiredPetTwoSlot3} petOwned={slot3pet2} />
                )
              : ""}
          </ul>
          <div className="FightInstructions">
            <h1>Fight Instructions</h1>
            <div className="turn">
              {" "}
              <p>Turn 1</p>
              <p>
                Use <span>Toxic Smoke</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 2 </p>
              <p>
                Use <span>Wind Up</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3</p>
              <p>
                Use <span>Toxic Smoke</span> again and first pet will die.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 4</p>
              <p>
                Second pet joins the fight. Use <span>Wind Up</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 5</p>
              <p>
                Use <span>Toxic Smoke</span> if isn't dead already.<br></br>
                <span className="important">
                  (It has 30% chance to dodge, so if he does just restart the
                  fight)
                </span>
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 6</p>
              <p>
                Third pet comes in. Use <span>Explode</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 7</p>
              <p>Swap in the leveling pet then swap it back out again.</p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 8+</p>
              <p>
                <span>Metal Fist</span> until last pet dies.
              </p>
            </div>
          </div>
          <h3>
            TIP: Use the <span>[Safari Hat]</span> toy for 10% increased XP.
          </h3>
        </div>
        <div className="locationImages">
          <h1>Localization: </h1>
          <button
            onClick={() => {
              navigator.clipboard.writeText(coords);
            }}
          >
            Copy Coordinates <FontAwesomeIcon icon={faClipboard} />
          </button>
          <a href={location} target="_blank" rel="noreferrer">
            {" "}
            <img src={location} alt="noImg"></img>
          </a>

          <a href={location2} target="_blank" rel="noreferrer">
            {" "}
            <img src={location2} alt="noImg"></img>
          </a>
          <a href={location3} target="_blank" rel="noreferrer">
            {" "}
            <img src={location3} alt="noImg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrostFireRidge;
