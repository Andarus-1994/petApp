import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../functions/serverFunctions.js";
import Pet from "./pet.js";
import location3 from "../../assets/Tarr/tarrTheTerrible.jpg";
import location from "../../assets/Tarr/TarrDraenorMap.jpg";
import location2 from "../../assets/Tarr/TarrNagrandDraenor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import CommentSection from "../commentSection.js";
function NagrandDraenor() {
  const [renderOnce, setRenderOnce] = useState(false);
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Nagrand 56, 10");
  const [pet, setPet] = useState({
    id: 1238,
    owned: false,
    abilities: { 1: 0, 2: 4, 3: 2 },
    speed: null,
    rarity: "rare",
  });
  const [slot3pet2, setslot3pet2] = useState({
    id: 1351,
    owned: false,
    abilities: { 1: 3, 2: 4, 3: 2 },
    speed: null,
    rarity: "rare",
  });

  const [slot3pet3, setslot3pet3] = useState({
    id: "none",
    owned: false,
    abilities: null,
    speed: null,
    rarity: "rare",
  });
  const [slot3pet4, setslot3pet4] = useState({
    id: "none",
    owned: false,
    abilities: null,
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
    });
    setslot3pet3({
      ...slot3pet3,
      owned: checkOwnedPet(slot3pet3.id),
    });
    setslot3pet4({
      ...slot3pet4,
      owned: checkOwnedPet(slot3pet4.id),
    });

    if (
      renderOnce &&
      !curentActiveSlot3.found &&
      curentActiveSlot3.id === null &&
      (slot3pet2.owned || slot3pet3.owned || slot3pet4.owned)
    )
      ActivePetSlot3();

    setRenderOnce(true);
  }, [
    petsChar,

    slot3pet4.owned,
    slot3pet3.owned,
    slot3pet2.owned,
    curentActiveSlot3,
    renderOnce,
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
    return setCurentActiveSlot3({ id: slot3pet2.id, found: true });
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
    <div className="nagrandDraenorLevelGuide">
      <h1>Tarr the Terrible Pet Battle Guide</h1>
      <h2>Nagrand (Draenor)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerNagrandLevel">
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
                Start with <span>Curse of doom</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 2 </p>
              <p>
                Use <span>Haunt</span> ability, he swaps in Gladiator Deathy.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3</p>
              <p>
                Bring <span className="hero">Macabre Marionette</span> in and
                cast <span>Siphon Life</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 4</p>
              <p>
                Use <span>Dead Man's Party</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 5</p>
              <p className="important">Your pet will get stunned. Just pass.</p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 6</p>
              <p>
                Use <span>Dead Man's Party</span> again.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 9</p>
              <p>
                Use <span>Dead Man's Party</span> again.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 12</p>
              <p>
                Cast <span>Siphon Life</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 13 or 14</p>
              <p>
                <span className="hero">Macabre Marionette</span> dies. Bring the
                leveling pet in, then swap back again to the{" "}
                <span className="hero">Unborn Val'kyr</span> and finish him off
                with <span>Shadow Slash</span> ability.
              </p>
            </div>
            <div className="tip">
              Extra-Tip:Whenever you see thie shield up cast Dead's Man Party.
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
      <CommentSection props={{ location: "defaultLevelingGuide/Tarr" }} />
    </div>
  );
}

export default NagrandDraenor;
