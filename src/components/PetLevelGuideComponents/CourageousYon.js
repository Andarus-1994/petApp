import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  singlePetInfo,
  petAbility,
  petAbilities,
} from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Pet from "./pet.js";
import location3 from "../../assets/Yon/curageousYon.jpg";
import location from "../../assets/Yon/curageousYonPandaria.jpg";
import location2 from "../../assets/Yon/curageousYonKunLai.jpg";
import CommentSection from "../commentSection.js";
function CourageousYon() {
  const petsChar = useSelector((state) => state.pets);
  const [renderOnce, setRenderOnce] = useState(false);
  const [coords, setCoords] = useState("/way Kun-Lai Summit 65, 94");
  const [slot1pet1, setslot1pet1] = useState({
    id: 2833,
    owned: false,
    abilities: { 1: 3, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
  });

  const [slot1pet2, setslot1pet2] = useState({
    id: 1155,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: null,
    rarity: "rare",
  });

  const [curentActiveSlot1, setCurentActiveSlot1] = useState({
    id: null,
    found: false,
  });

  const [requiredPetOneSlot1, setRequiredPetOneSlot1] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetTwoSlot1, setRequiredPetTwoSlot1] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });

  useEffect(() => {
    if (
      curentActiveSlot1.id === null ||
      (curentActiveSlot1.id === slot1pet1.id && requiredPetOneSlot1.loading) ||
      (curentActiveSlot1.id === slot1pet2.id && requiredPetTwoSlot1.loading)
    )
      getPetDetails();

    setslot1pet1({
      ...slot1pet1,
      owned: checkOwnedPet(slot1pet1.id),
      loading: false,
    });
    setslot1pet2({
      ...slot1pet2,
      owned: checkOwnedPet(slot1pet2.id),
      loading: false,
    });

    if (
      renderOnce &&
      !curentActiveSlot1.found &&
      curentActiveSlot1.id === null
    ) {
      ActivePetSlot1();
    }

    // if I find a pet in collection for slot 3

    // if I don't find any pet in collection for slot 3
    setRenderOnce(true);
  }, [
    petsChar,
    slot1pet1.owned,
    slot1pet2.owned,
    renderOnce,
    curentActiveSlot1,
  ]);

  function ActivePetSlot1() {
    if (slot1pet1.owned && checkPetLevel25(slot1pet1.id)) {
      return setCurentActiveSlot1({ id: slot1pet1.id, found: true });
    }
    if (slot1pet2.owned && checkPetLevel25(slot1pet2.id)) {
      return setCurentActiveSlot1({ id: slot1pet2.id, found: true });
    }

    if (slot1pet1.owned) {
      return setCurentActiveSlot1({ id: slot1pet1.id, found: true });
    }
    if (slot1pet2.owned) {
      return setCurentActiveSlot1({ id: slot1pet2.id, found: true });
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
    return setCurentActiveSlot1({ id: slot1pet1.id, found: true });
  }

  function getPetDetails() {
    if (curentActiveSlot1.id === slot1pet1.id) {
      singlePetInfo(slot1pet1).then((res) => {
        setRequiredPetOneSlot1({ pets: res, petAbilities: [], loading: false });
      });
    }
    if (curentActiveSlot1.id === slot1pet2.id) {
      singlePetInfo(slot1pet2).then((res) => {
        setRequiredPetTwoSlot1({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }

    if (curentActiveSlot1.id === null) {
      singlePetInfo(slot1pet1).then((res) => {
        setRequiredPetOneSlot1({ pets: res, petAbilities: [], loading: false });
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
    <div className="YonKunLaiLevelGuide">
      <h1>Courageous Yon Pet Battle Guide</h1>
      <h2> Kun-lai Summit (Pandaria)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerYonPandariaLevel">
        <div className="FightRequirements">
          <ul>
            {!requiredPetOneSlot1.loading && requiredPetOneSlot1.pets
              ? curentActiveSlot1.id === slot1pet1.id && (
                  <Pet pet={requiredPetOneSlot1} petOwned={slot1pet1} />
                )
              : ""}
            {!requiredPetTwoSlot1.loading && requiredPetTwoSlot1.pets
              ? curentActiveSlot1.id === slot1pet2.id && (
                  <Pet pet={requiredPetTwoSlot1} petOwned={slot1pet2} />
                )
              : ""}

            {!requiredPetOneSlot1.loading && requiredPetOneSlot1.pets
              ? curentActiveSlot1.id === null && (
                  <Pet pet={requiredPetOneSlot1} petOwned={slot1pet1} />
                )
              : ""}
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
          </ul>
          <div className="FightInstructions">
            <h1>Fight Instructions</h1>
            <div className="turn">
              {" "}
              <p>Turn 1</p>
              <p>
                Cast <span>Sand Storm</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 2 </p>
              <p>Just Pass.</p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3</p>
              <p>
                Use <span>Deflection</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 4</p>
              <p>Swap in the leveling pet 1.</p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 5</p>
              <p>Swap in the leveling pet 2.</p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 6</p>
              <p>
                Swap back to{" "}
                {curentActiveSlot1.id === slot1pet2.id ? (
                  <span className="hero">Anubisath Idol</span>
                ) : (
                  <span className="hero">Void-Scarred Anubisath</span>
                )}
                .
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 7+</p>
              <p>
                Cast{" "}
                {curentActiveSlot1.id === slot1pet2.id ? (
                  <span>Crush</span>
                ) : (
                  <span>Spirit Fire Bolt</span>
                )}{" "}
                and <span>SandStorm</span> off-cd.
                <br></br> Deflection on Piqua's Lift Off / Lapin's Burrow /
                Bleat's Chew
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
          <a href={location} target="_blank">
            {" "}
            <img src={location} alt="noImg"></img>
          </a>

          <a href={location2} target="_blank">
            {" "}
            <img src={location2} alt="noImg"></img>
          </a>
          <a href={location3} target="_blank">
            {" "}
            <img src={location3} alt="noImg"></img>
          </a>
        </div>
      </div>
      <CommentSection
        props={{ location: "defaultLevelingGuide/CourageousYon" }}
      />
    </div>
  );
}

export default CourageousYon;
