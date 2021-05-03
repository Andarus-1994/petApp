import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Faryl/Faryl.jpg";
import location from "../../../assets/Shadowlands/Faryl/FarylSL.jpg";
import location2 from "../../../assets/Shadowlands/Faryl/FarylArden.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faLeaf } from "@fortawesome/free-solid-svg-icons";

function FarylWQ() {
  const [renderOnce, setRenderOnce] = useState(false);
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Ardenweald 51, 44");
  const [pet, setPet] = useState({
    id: 1238,
    owned: false,
    abilities: { 1: 0, 2: 4, 3: 2 },
    speed: null,
    rarity: "rare",
  });
  const [slot2pet1, setslot2pet1] = useState({
    id: 1625,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
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
  const [curentActiveSlot2, setCurentActiveSlot2] = useState({
    id: null,
    found: false,
  });

  const [requiredPetOne, setRequiredPetOne] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetOneSlot2, setRequiredPetOneSlot2] = useState({
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
    if (!petsChar.loading || !localStorage.favChar) {
      if (
        requiredPetOne.loading ||
        (curentActiveSlot2.id === slot2pet1.id && requiredPetOneSlot2.loading)
      )
        getPetDetails();

      setPet({
        ...pet,
        owned: checkOwnedPet(pet.id),
      });
      setslot2pet1({
        ...slot2pet1,
        owned: checkOwnedPet(slot2pet1.id),
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
        !curentActiveSlot2.found &&
        curentActiveSlot2.id === null &&
        slot2pet1.owned
      )
        ActivePetSlot2();

      setRenderOnce(true);
    }
  }, [petsChar, slot2pet1.owned, curentActiveSlot2, renderOnce]);

  function ActivePetSlot2() {
    if (slot2pet1.owned && checkPetLevel25(slot2pet1.id)) {
      return setCurentActiveSlot2({ id: slot2pet1.id, found: true });
    }

    return setCurentActiveSlot2({ id: slot2pet1.id, found: true });
  }

  function checkPetLevel25(id) {
    if (
      petsChar.pets.pets.find(
        (pet) => pet.species.id === id && pet.level === 25
      )
    ) {
      return true;
    } else return false;
  }

  function getPetDetails() {
    singlePetInfo(pet).then((res) => {
      setRequiredPetOne({ pets: res, petAbilities: [], loading: false });
    });
    if (curentActiveSlot2.id === slot2pet1.id) {
      singlePetInfo(slot2pet1).then((res) => {
        setRequiredPetOneSlot2({ pets: res, petAbilities: [], loading: false });
      });
    }

    if (curentActiveSlot2.id === null) {
      singlePetInfo(slot2pet1).then((res) => {
        setRequiredPetOneSlot2({ pets: res, petAbilities: [], loading: false });
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
    <div className="farylWQGuide">
      <h1>Airborne Defense Force (Faryl) Pet Battle Guide</h1>
      <h2>Ardenweald (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerFarylWQ">
        <div className="FightRequirements">
          <ul>
            {!requiredPetOne.loading && requiredPetOne.pets ? (
              <Pet pet={requiredPetOne} petOwned={pet} />
            ) : (
              ""
            )}
            {!requiredPetOneSlot2.loading && requiredPetOneSlot2.pets
              ? curentActiveSlot2.id === slot2pet1.id && (
                  <Pet pet={requiredPetOneSlot2} petOwned={slot2pet1} />
                )
              : ""}
            {!requiredPetOneSlot2.loading && requiredPetOneSlot2.pets
              ? curentActiveSlot2.id === null && (
                  <Pet pet={requiredPetOneSlot2} petOwned={slot2pet1} />
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
          </ul>
          <div className="FightInstructions">
            <h1>
              <FontAwesomeIcon className="leaf" icon={faLeaf} />
              Fight Instructions{" "}
              <FontAwesomeIcon className="leaf" icon={faLeaf} />
            </h1>
            <div className="turn">
              {" "}
              <p>Turn 1</p>
              <p>
                Start with <span>Curse of doom</span> ability.<br></br>
                <span className="important">
                  Important: If your pet gets asleep restart the battle
                </span>
              </p>
            </div>

            <div className="turn">
              {" "}
              <p>Turn 2 </p>
              <p>
                Cast <span>Haunt</span> and bring in{" "}
                <span className="hero">Fragment of Anger</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3</p>
              <p>
                Cast <span>Spiritfire Beam</span>
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 4</p>
              <p>
                Use <span>Soulrush</span>. (if you stun him, he will be swapped
                and will die anyway from the dot)
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 5+</p>
              <p>
                From now on just cast <span>Spiritfire Beam</span> off-cd until
                Brite swaps in, then just cast <span>Soulrush </span>
                and <span>Spiritfire Bolt</span> as filler.
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

export default FarylWQ;
