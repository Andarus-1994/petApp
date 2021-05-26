import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singlePetInfo } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Pet from "./pet.js";
import location3 from "../../assets/ThunderingPS/ThunderingPandarenSpirit.jpg";
import location from "../../assets/ThunderingPS/TPSPandaria.jpg";
import location2 from "../../assets/ThunderingPS/TPSKunLai.jpg";
import CommentSection from "../commentSection.js";
function ThunderingPandarenSpirit() {
  const petsChar = useSelector((state) => state.pets);
  const [renderOnce, setRenderOnce] = useState(false);
  const [coords] = useState("/way Kun-Lai Summit 65, 94");
  const [slot2pet1, setslot2pet1] = useState({
    id: 200,
    owned: false,
    abilities: { 1: 3, 2: 4, 3: 2 },
    loading: true,
    speed: 335,
    rarity: "rare",
  });

  const [slot2pet2, setslot2pet2] = useState({
    id: 72,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: 335,
    rarity: "rare",
  });

  const [slot2pet3, setslot2pet3] = useState({
    id: 137,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: 335,
    rarity: "rare",
  });

  const [slot2pet4, setslot2pet4] = useState({
    id: 479,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 2 },
    loading: true,
    speed: 335,
    rarity: "rare",
  });

  const [slot3pet1, setslot3pet1] = useState({
    id: 844,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 5 },
    loading: true,
    speed: null,
    rarity: "rare",
  });

  const [curentActiveSlot2, setCurentActiveSlot2] = useState({
    id: null,
    found: false,
  });
  const [curentActiveSlot3, setCurentActiveSlot3] = useState({
    id: null,
    found: false,
  });

  const [requiredPetOneSlot2, setRequiredPetOneSlot2] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetTwoSlot2, setRequiredPetTwoSlot2] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });

  const [requiredPetThreeSlot2, setRequiredPetThreeSlot2] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetFourSlot2, setRequiredPetFourSlot2] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });

  const [requiredPetOneSlot3, setRequiredPetOneSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  useEffect(() => {
    if (
      curentActiveSlot2.id === null ||
      (curentActiveSlot2.id === slot2pet1.id && requiredPetOneSlot2.loading) ||
      (curentActiveSlot2.id === slot2pet2.id && requiredPetTwoSlot2.loading) ||
      (curentActiveSlot2.id === slot2pet3.id &&
        requiredPetThreeSlot2.loading) ||
      (curentActiveSlot2.id === slot2pet4.id && requiredPetFourSlot2.loading) ||
      curentActiveSlot3.id === null ||
      (curentActiveSlot3.id === slot3pet1.id && requiredPetOneSlot3.loading)
    )
      getPetDetails();

    setslot2pet1({
      ...slot2pet1,
      owned: checkOwnedPet(slot2pet1.id),
      loading: false,
    });
    setslot2pet2({
      ...slot2pet2,
      owned: checkOwnedPet(slot2pet2.id),
      loading: false,
    });
    setslot2pet3({
      ...slot2pet3,
      owned: checkOwnedPet(slot2pet3.id),
      loading: false,
    });
    setslot2pet4({
      ...slot2pet4,
      owned: checkOwnedPet(slot2pet4.id),
      loading: false,
    });

    setslot3pet1({
      ...slot3pet1,
      owned: checkOwnedPet(slot3pet1.id),
      loading: false,
    });

    if (
      renderOnce &&
      !curentActiveSlot2.found &&
      curentActiveSlot2.id === null
    ) {
      ActivePetSlot2();
    }
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
  }, [
    petsChar,
    slot2pet1.owned,
    slot2pet2.owned,
    slot2pet3.owned,
    slot2pet4.owned,
    renderOnce,
    curentActiveSlot2,
  ]);

  function ActivePetSlot2() {
    if (slot2pet1.owned && checkPetLevel25(slot2pet1.id)) {
      return setCurentActiveSlot2({ id: slot2pet1.id, found: true });
    }
    if (slot2pet2.owned && checkPetLevel25(slot2pet2.id)) {
      return setCurentActiveSlot2({ id: slot2pet2.id, found: true });
    }
    if (slot2pet3.owned && checkPetLevel25(slot2pet3.id)) {
      return setCurentActiveSlot2({ id: slot2pet3.id, found: true });
    }
    if (slot2pet4.owned && checkPetLevel25(slot2pet4.id)) {
      return setCurentActiveSlot2({ id: slot2pet4.id, found: true });
    }

    if (slot2pet1.owned) {
      return setCurentActiveSlot2({ id: slot2pet1.id, found: true });
    }
    if (slot2pet2.owned) {
      return setCurentActiveSlot2({ id: slot2pet2.id, found: true });
    }
    if (slot2pet3.owned) {
      return setCurentActiveSlot2({ id: slot2pet3.id, found: true });
    }
    if (slot2pet4.owned) {
      return setCurentActiveSlot2({ id: slot2pet4.id, found: true });
    }
  }

  function ActivePetSlot3() {
    if (slot3pet1.owned && checkPetLevel25(slot3pet1.id)) {
      return setCurentActiveSlot3({ id: slot3pet1.id, found: true });
    }

    if (slot3pet1.owned) {
      return setCurentActiveSlot3({ id: slot3pet1.id, found: true });
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
    return setCurentActiveSlot2({ id: slot2pet1.id, found: true });
  }

  function getPetDetails() {
    if (curentActiveSlot2.id === slot2pet1.id) {
      singlePetInfo(slot2pet1).then((res) => {
        setRequiredPetOneSlot2({ pets: res, petAbilities: [], loading: false });
      });
    }
    if (curentActiveSlot3.id === slot3pet1.id) {
      singlePetInfo(slot3pet1).then((res) => {
        setRequiredPetOneSlot3({ pets: res, petAbilities: [], loading: false });
      });
    }
    if (curentActiveSlot2.id === slot2pet2.id) {
      singlePetInfo(slot2pet2).then((res) => {
        setRequiredPetTwoSlot2({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }

    if (curentActiveSlot2.id === slot2pet3.id) {
      singlePetInfo(slot2pet3).then((res) => {
        setRequiredPetThreeSlot2({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }

    if (curentActiveSlot2.id === slot2pet4.id) {
      singlePetInfo(slot2pet4).then((res) => {
        setRequiredPetFourSlot2({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }

    if (curentActiveSlot2.id === null) {
      singlePetInfo(slot2pet1).then((res) => {
        setRequiredPetOneSlot2({ pets: res, petAbilities: [], loading: false });
      });
    }
    if (curentActiveSlot3.id === null) {
      singlePetInfo(slot3pet1).then((res) => {
        setRequiredPetOneSlot3({ pets: res, petAbilities: [], loading: false });
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
    <div className="ThunderingPSKunLaiLevelGuide">
      <h1>Thundering Pandaren Spirit Pet Battle Guide</h1>
      <h2> Kun-lai Summit (Pandaria)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerThunderingPSPandariaLevel">
        <div className="FightRequirements">
          <ul>
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
            {!requiredPetOneSlot2.loading && requiredPetOneSlot2.pets
              ? curentActiveSlot2.id === slot2pet1.id && (
                  <Pet pet={requiredPetOneSlot2} petOwned={slot2pet1} />
                )
              : ""}
            {!requiredPetTwoSlot2.loading && requiredPetTwoSlot2.pets
              ? curentActiveSlot2.id === slot2pet2.id && (
                  <Pet pet={requiredPetTwoSlot2} petOwned={slot2pet2} />
                )
              : ""}
            {!requiredPetThreeSlot2.loading && requiredPetThreeSlot2.pets
              ? curentActiveSlot2.id === slot2pet3.id && (
                  <Pet pet={requiredPetThreeSlot2} petOwned={slot2pet3} />
                )
              : ""}
            {!requiredPetFourSlot2.loading && requiredPetFourSlot2.pets
              ? curentActiveSlot2.id === slot2pet4.id && (
                  <Pet pet={requiredPetFourSlot2} petOwned={slot2pet4} />
                )
              : ""}

            {!requiredPetOneSlot2.loading && requiredPetOneSlot2.pets
              ? curentActiveSlot2.id === null && (
                  <Pet pet={requiredPetOneSlot2} petOwned={slot2pet1} />
                )
              : ""}
            {!requiredPetOneSlot3.loading && requiredPetOneSlot3.pets
              ? curentActiveSlot3.id === slot3pet1.id && (
                  <Pet pet={requiredPetOneSlot3} petOwned={slot3pet1} />
                )
              : ""}

            {!requiredPetOneSlot3.loading && requiredPetOneSlot3.pets
              ? curentActiveSlot3.id === null && (
                  <Pet pet={requiredPetOneSlot3} petOwned={slot3pet1} />
                )
              : ""}
          </ul>
          <div className="FightInstructions">
            <h1>Fight Instructions</h1>
            <div className="turn">
              {" "}
              <p>Turn 1</p>
              <p>
                Pass, your leveling pet will get stunned. Swap in the{" "}
                <span className="hero">
                  {!requiredPetFourSlot2.loading && requiredPetFourSlot2.pets
                    ? requiredPetFourSlot2.pets.name
                    : !requiredPetThreeSlot2.loading &&
                      requiredPetThreeSlot2.pets
                    ? requiredPetThreeSlot2.pets.name
                    : !requiredPetTwoSlot2.loading && requiredPetTwoSlot2.pets
                    ? requiredPetTwoSlot2.pets.name
                    : !requiredPetOneSlot2.loading && requiredPetOneSlot2.pets
                    ? requiredPetOneSlot2.pets.name
                    : "loading"}
                </span>
                .
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 2 </p>
              <p>
                Use <span>Dodge</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3</p>
              <p>
                Use <span>Flurry</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 4-5</p>
              <p>
                Use <span>Borrow</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 6</p>
              <p>
                Use <span>Flurry</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 7</p>
              <p>
                Use <span>Dodge</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 8-9</p>
              <p>
                Use <span>Flurry</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 10-11</p>
              <p>
                Use <span>Burrow</span> ability. Pandaren Earth Spirit dies.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 12</p>
              <p>
                When Sludgy comes in cast <span>Dodge</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 13</p>
              <p>
                Use <span>Flurry</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 14</p>
              <p>
                Swap to{" "}
                <span className="hero">
                  {!requiredPetOneSlot3.loading && requiredPetOneSlot3.pets
                    ? requiredPetOneSlot3.pets.name
                    : ""}
                </span>
                .
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 15 - 17</p>
              <p>
                Cast <span>Breath</span> until Sludgy dies.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 18</p>
              <p>
                Darnak comes in. Use <span>Bombing Run</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 19</p>
              <p>
                Use <span>Decoy</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 20-21</p>
              <p>
                Cast <span>Breath</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 22</p>
              <p>
                Cast <span>Bombing Run</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 23-24</p>
              <p>
                Cast <span>Breath</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn ~25</p>
              <p>
                <span className="hero">
                  {!requiredPetOneSlot3.loading && requiredPetOneSlot3.pets
                    ? requiredPetOneSlot3.pets.name
                    : ""}
                </span>{" "}
                dies. Swap in{" "}
                <span className="hero">
                  {!requiredPetFourSlot2.loading && requiredPetFourSlot2.pets
                    ? requiredPetFourSlot2.pets.name
                    : !requiredPetThreeSlot2.loading &&
                      requiredPetThreeSlot2.pets
                    ? requiredPetThreeSlot2.pets.name
                    : !requiredPetTwoSlot2.loading && requiredPetTwoSlot2.pets
                    ? requiredPetTwoSlot2.pets.name
                    : !requiredPetOneSlot2.loading && requiredPetOneSlot2.pets
                    ? requiredPetOneSlot2.pets.name
                    : "loading"}
                </span>{" "}
                and use <span>Dodge</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 25+</p>
              <p>
                Use <span>Flurry</span> until the target dies.
              </p>
            </div>
            <p className="tip">
              Long fight but worth the XP and chance for one of the four
              Pandaren Spirit pets.
            </p>
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
          <a href={location} target="_blank" rel="noopener noreferrer">
            {" "}
            <img src={location} alt="noImg"></img>
          </a>

          <a href={location2} target="_blank" rel="noopener noreferrer">
            {" "}
            <img src={location2} alt="noImg"></img>
          </a>
          <a href={location3} target="_blank" rel="noopener noreferrer">
            {" "}
            <img src={location3} alt="noImg"></img>
          </a>
        </div>
      </div>
      <CommentSection
        props={{
          location: "defaultLevelingGuide/ThunderingPandarenSpirit",
        }}
      />
    </div>
  );
}

export default ThunderingPandarenSpirit;
