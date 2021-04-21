import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "./pet.js";
import location3 from "../../assets/WhisperingPS/WhisperingPandarenSpirit.jpg";
import location from "../../assets/WhisperingPS/WPSPandaria.jpg";
import location2 from "../../assets/WhisperingPS/WPSJadeForest.jpg";

function WhisperingPandarenSpirit() {
  const petsChar = useSelector((state) => state.pets);
  const [renderOnce, setRenderOnce] = useState(false);
  const [coords] = useState("/way The Jade Forest 29, 36");
  const [slot1pet1, setslot1pet1] = useState([
    {
      id: 1155,
      owned: false,
      abilities: { 1: 0, 2: 1, 3: 2 },
      loading: true,
      speed: null,
      rarity: "rare",
    },
    {
      id: 1152,
      owned: false,
      abilities: { 1: 3, 2: 4, 3: 5 },
      loading: true,
      speed: null,
      rarity: "rare",
    },
  ]);

  const [slot3pet1, setslot3pet1] = useState([
    {
      id: 1167,
      owned: false,
      abilities: { 1: 3, 2: 1, 3: 5 },
      loading: true,
      speed: null,
      rarity: "rare",
    },
    {
      id: 1721,
      owned: false,
      abilities: { 1: 3, 2: 4, 3: 5 },
      loading: true,
      speed: null,
      rarity: "rare",
    },
    {
      id: 1165,
      owned: false,
      abilities: { 1: 3, 2: 1, 3: 5 },
      loading: true,
      speed: null,
      rarity: "rare",
    },
  ]);

  const [curentActiveSlot1, setCurentActiveSlot1] = useState([
    {
      id: null,
      found: false,
    },
    {
      id: null,
      found: false,
    },
  ]);
  const [curentActiveSlot3, setCurentActiveSlot3] = useState([
    {
      id: null,
      found: false,
    },
    {
      id: null,
      found: false,
    },
  ]);

  const [requiredPetOneSlot1, setRequiredPetOneSlot1] = useState([
    {
      pets: {},
      petAbilities: [],
      loading: true,
    },
    {
      pets: {},
      petAbilities: [],
      loading: true,
    },
  ]);
  const [requiredPetOneSlot3, setRequiredPetOneSlot3] = useState([
    {
      pets: {},
      petAbilities: [],
      loading: true,
    },
    {
      pets: {},
      petAbilities: [],
      loading: true,
    },
  ]);

  const [curentActiveStrategy, setCurentActiveStrategy] = useState(null);

  useEffect(() => {
    if (
      curentActiveSlot1[0].id === null ||
      (curentActiveSlot1[0].id === slot1pet1[0].id &&
        requiredPetOneSlot1[0].loading) ||
      curentActiveSlot3[0].id === null ||
      (curentActiveSlot3[0].id === slot3pet1[0].id &&
        requiredPetOneSlot3[0].loading)
    )
      getPetDetails();

    if (
      !requiredPetOneSlot1[0].loading &&
      !requiredPetOneSlot3[0].loading &&
      requiredPetOneSlot1[1].loading &&
      requiredPetOneSlot3[1].loading
    )
      getPetDetails2();

    setslot1pet1(setOwnedPetsInArray(slot1pet1, 2));
    setslot3pet1(setOwnedPetsInArray(slot3pet1, 3));

    if (
      renderOnce &&
      !curentActiveSlot1[0].found &&
      curentActiveSlot1[0].id === null &&
      !curentActiveSlot1[1].found &&
      curentActiveSlot1[1].id === null
    ) {
      ActivePetSlot1();
    }
    if (
      renderOnce &&
      !curentActiveSlot3[0].found &&
      curentActiveSlot3[0].id === null &&
      !curentActiveSlot3[1].found &&
      curentActiveSlot3[1].id === null
    ) {
      ActivePetSlot3();
    }

    // if I find a pet in collection for slot 3
    // if I don't find any pet in collection for slot 3

    setRenderOnce(true);
  }, [
    petsChar,
    renderOnce,
    curentActiveSlot1[0],
    curentActiveSlot3[0],
    curentActiveSlot1[1],
    curentActiveSlot3[1],
    requiredPetOneSlot1[0].loading,
    requiredPetOneSlot3[0].loading,
  ]);

  useMemo(() => {
    curentStrategy(slot1pet1, slot3pet1);
    console.log(curentActiveStrategy);
    console.log(curentActiveSlot1);
    console.log(requiredPetOneSlot1);
    console.log(requiredPetOneSlot3);
    console.log(curentActiveSlot3);
  }, [
    curentActiveSlot3[0],
    curentActiveSlot1[0],
    curentActiveSlot3[1],
    curentActiveSlot1[1],
    requiredPetOneSlot1[0].loading,
    requiredPetOneSlot3[0].loading,
  ]);

  function setOwnedPetsInArray(slotpet, number) {
    let slot1pet1Array = [...slotpet];
    for (var i = 0; i < number; i++) {
      slot1pet1Array[i] = {
        ...slotpet[i],
        owned: checkOwnedPet(slotpet[i].id),
        loading: false,
      };
    }
    console.log(slot1pet1Array);
    return slot1pet1Array;
  }

  function setCurentActivePetsInArray(curentActiveSlot, slotpet, number) {
    let slot1pet1Array = [...curentActiveSlot];
    slot1pet1Array[number] = {
      ...curentActiveSlot[number],
      id: slotpet.id,
      found: true,
    };
    return slot1pet1Array;
  }

  function ActivePetSlot1() {
    let initialArray = [...curentActiveSlot1];
    if (slot1pet1[0].owned && checkPetLevel25(slot1pet1[0].id)) {
      initialArray = setCurentActivePetsInArray(
        curentActiveSlot1,
        slot1pet1[0],
        0
      );
      setCurentActiveSlot1(
        setCurentActivePetsInArray(curentActiveSlot1, slot1pet1[0], 0)
      );
    }
    console.log("starts array");
    console.log(initialArray);
    if (
      slot1pet1[0].owned &&
      checkArraysEqual(initialArray, curentActiveSlot1)
    ) {
      console.log("dsadadadsadasdasda");
      initialArray = setCurentActivePetsInArray(
        curentActiveSlot1,
        slot1pet1[0],
        0
      );
      setCurentActiveSlot1(
        setCurentActivePetsInArray(curentActiveSlot1, slot1pet1[0], 0)
      );
    }
    if (slot1pet1[1].owned && checkPetLevel25(slot1pet1[1].id)) {
      console.log("ends array slot 1");
      console.log(initialArray);
      return setCurentActiveSlot1(
        setCurentActivePetsInArray(initialArray, slot1pet1[1], 1)
      );
    }
    if (slot1pet1[1].owned) {
      console.log("ends array slot 1");
      console.log(initialArray);
      return setCurentActiveSlot1(
        setCurentActivePetsInArray(initialArray, slot1pet1[1], 1)
      );
    }
    console.log("ends array slot 1");
    console.log(initialArray);
  }
  function checkArraysEqual(arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;
  }
  function ActivePetSlot3() {
    let initialArray = [...curentActiveSlot3];
    if (slot3pet1[0].owned && checkPetLevel25(slot3pet1[0].id)) {
      initialArray = setCurentActivePetsInArray(
        curentActiveSlot3,
        slot3pet1[0],
        0
      );
      setCurentActiveSlot3(
        setCurentActivePetsInArray(curentActiveSlot3, slot3pet1[0], 0)
      );
    }

    if (
      slot3pet1[0].owned &&
      checkArraysEqual(initialArray, curentActiveSlot3)
    ) {
      console.log("vaaaaaaaaar");
      initialArray = setCurentActivePetsInArray(
        curentActiveSlot1,
        slot3pet1[0],
        0
      );
      setCurentActiveSlot3(
        setCurentActivePetsInArray(curentActiveSlot3, slot3pet1[0], 0)
      );
    }

    if (slot3pet1[1].owned && checkPetLevel25(slot3pet1[1].id)) {
      return setCurentActiveSlot3(
        setCurentActivePetsInArray(initialArray, slot3pet1[1], 1)
      );
    }
    if (slot3pet1[1].owned) {
      return setCurentActiveSlot3(
        setCurentActivePetsInArray(initialArray, slot3pet1[1], 1)
      );
    }
    if (slot3pet1[2].owned && checkPetLevel25(slot3pet1[2].id)) {
      return setCurentActiveSlot3(
        setCurentActivePetsInArray(initialArray, slot3pet1[2], 2)
      );
    }
    if (slot3pet1[2].owned) {
      return setCurentActiveSlot3(
        setCurentActivePetsInArray(initialArray, slot3pet1[2], 2)
      );
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

  function setRequiredPetInArray(curentActiveSlot, response, number) {
    let slotArray = [...curentActiveSlot];
    slotArray[number] = {
      ...curentActiveSlot[number],
      pets: response,
      petAbilities: [],
      loading: false,
    };
    return slotArray;
  }

  function getPetDetails() {
    console.log("details");
    if (curentActiveSlot1[0].id === slot1pet1[0].id) {
      console.log("details 1");
      singlePetInfo(slot1pet1[0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 0)
        );
      });
    }
    if (curentActiveSlot3[0].id === slot3pet1[0].id) {
      console.log("details 2");
      singlePetInfo(slot3pet1[0]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 0)
        );
      });
    }

    if (curentActiveSlot1[0].id === null) {
      console.log("details 3");
      singlePetInfo(slot1pet1[0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 0)
        );
      });
    }
    if (curentActiveSlot3[0].id === null) {
      console.log("details 4");
      singlePetInfo(slot3pet1[0]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 0)
        );
      });
    }
  }

  function getPetDetails2() {
    console.log("getPetDetails 2");
    console.log(requiredPetOneSlot1);
    if (curentActiveSlot1[1].id === slot1pet1[1].id) {
      singlePetInfo(slot1pet1[1]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 1)
        );
      });
    }
    if (curentActiveSlot3[1].id === slot3pet1[1].id) {
      console.log("intra aici slot 3 active pet 1 -2");
      singlePetInfo(slot3pet1[1]).then((res) => {
        console.log(setRequiredPetInArray(requiredPetOneSlot3, res, 1));
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 1)
        );
      });
    }

    if (curentActiveSlot3[1].id === slot3pet1[2].id) {
      console.log("intra aici slot 3 active");
      singlePetInfo(slot3pet1[2]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 2)
        );
      });
    }

    if (curentActiveSlot1[1].id === null) {
      console.log("intra aici dad");
      singlePetInfo(slot1pet1[1]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 1)
        );
      });
    }
    if (curentActiveSlot3[1].id === null) {
      console.log("intra aici das");
      singlePetInfo(slot3pet1[1]).then((res) => {
        console.log(setRequiredPetInArray(requiredPetOneSlot3, res, 1));
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 1)
        );
      });
    }

    console.log("full round get Pet Details ");
  }

  function curentStrategy(slot1, slot2) {
    console.log("intra in strategy");
    console.log(slot1);
    console.log(slot2);
    if (
      slot1[0].owned &&
      checkPetLevel25(slot1[0].id) &&
      slot2[0].owned &&
      checkPetLevel25(slot2[0].id)
    ) {
      console.log("setat str 0");
      return setCurentActiveStrategy(0);
    }
    if (
      slot1[1].owned &&
      checkPetLevel25(slot1[1].id) &&
      slot2[1].owned &&
      checkPetLevel25(slot2[1].id)
    ) {
      console.log("setat str 1");
      return setCurentActiveStrategy(1);
    }

    //Default Strategy
    console.log("default");
    return setCurentActiveStrategy(0);
  }

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  return (
    <div className="WhisperingPSJadeForestLevelGuide">
      <h1>Whispering Pandaren Spirit Pet Battle Guide</h1>
      <h2>The Jade Forest (Pandaria)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerWhisperingPSPandariaLevel">
        <div className="FightRequirements">
          {curentActiveStrategy === 0 &&
            slot1pet1[1].owned &&
            checkPetLevel25(slot1pet1[1].id) &&
            slot3pet1[1].owned &&
            checkPetLevel25(slot3pet1[1].id) && (
              <button
                className="stratAviable"
                onClick={() => {
                  setCurentActiveStrategy(1);
                }}
              >
                <FontAwesomeIcon icon={faSyncAlt} /> Strategy 2 Available for
                your Collection.
              </button>
            )}
          {curentActiveStrategy === 1 &&
            slot1pet1[0].owned &&
            checkPetLevel25(slot1pet1[0].id) &&
            slot3pet1[0].owned &&
            checkPetLevel25(slot3pet1[0].id) && (
              <button
                className="stratAviable"
                onClick={() => {
                  setCurentActiveStrategy(0);
                }}
              >
                <FontAwesomeIcon icon={faSyncAlt} /> Strategy 1 Available for
                your Collection.
              </button>
            )}
          {curentActiveStrategy === 0 && (
            <ul>
              {!requiredPetOneSlot1[0].loading && requiredPetOneSlot1[0].pets
                ? curentActiveSlot1[0].id === slot1pet1[0].id && (
                    <Pet pet={requiredPetOneSlot1[0]} petOwned={slot1pet1[0]} />
                  )
                : ""}
              {!requiredPetOneSlot1[0].loading && requiredPetOneSlot1[0].pets
                ? curentActiveSlot1[0].id === null && (
                    <Pet pet={requiredPetOneSlot1[0]} petOwned={slot1pet1[0]} />
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

              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? curentActiveSlot3[0].id === slot3pet1[0].id && (
                    <Pet pet={requiredPetOneSlot3[0]} petOwned={slot3pet1[0]} />
                  )
                : ""}

              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? curentActiveSlot3[0].id === null && (
                    <Pet pet={requiredPetOneSlot3[0]} petOwned={slot3pet1[0]} />
                  )
                : ""}
            </ul>
          )}
          {curentActiveStrategy === 1 && (
            <ul>
              {!requiredPetOneSlot1[1].loading && requiredPetOneSlot1[1].pets
                ? curentActiveSlot1[1].id === slot1pet1[1].id && (
                    <Pet pet={requiredPetOneSlot1[1]} petOwned={slot1pet1[1]} />
                  )
                : ""}
              {!requiredPetOneSlot1[1].loading && requiredPetOneSlot1[1].pets
                ? curentActiveSlot1[1].id === null && (
                    <Pet pet={requiredPetOneSlot1[1]} petOwned={slot1pet1[1]} />
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

              {!requiredPetOneSlot3[1].loading && requiredPetOneSlot3[1].pets
                ? curentActiveSlot3[1].id === slot3pet1[1].id && (
                    <Pet pet={requiredPetOneSlot3[1]} petOwned={slot3pet1[1]} />
                  )
                : ""}
              {!requiredPetOneSlot3[1].loading && requiredPetOneSlot3[1].pets
                ? curentActiveSlot3[1].id === slot3pet1[2].id && (
                    <Pet pet={requiredPetOneSlot3[1]} petOwned={slot3pet1[2]} />
                  )
                : ""}

              {!requiredPetOneSlot3[1].loading && requiredPetOneSlot3[1].pets
                ? curentActiveSlot3[1].id === null && (
                    <Pet pet={requiredPetOneSlot3[1]} petOwned={slot3pet1[1]} />
                  )
                : ""}
            </ul>
          )}
          {curentActiveStrategy === 0 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>
              <div className="turn">
                {" "}
                <p>Turn 1</p>
                <p>
                  Use <span>Deflection</span>.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2 </p>
                <p>
                  Cast <span>Sandstorm</span> ability.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 3+</p>
                <p>
                  Use <span>Deflection</span> / <span>Sandstorm</span> whenever
                  they are ready, <span>Crush</span> as a filler.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 7-9</p>
                <p>
                  Whispertail joins the fight, use <span>Sandstorm</span> /{" "}
                  <span>Crush</span> until{" "}
                  <span className="hero">Anubisath Idol</span> dies.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 10</p>
                <p>
                  Switch to leveling pet and then switch to{" "}
                  <span className="hero">Emerald Proto-Whelp</span>.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 11</p>
                <p>
                  Cast <span>Emerald pressence</span>.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 12-14</p>
                <p>
                  Use <span>Emerald Bite</span> until Whispertail dies.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 15</p>
                <p>
                  Pandaren Air Spirit comes in. From here on, cast{" "}
                  <span>Emerald Pressence</span> when there is 1 turn left of
                  your buff, <span>Emerald Dream</span> if u have under 50% hp,{" "}
                  <span>Emerald Bite</span> as a filler.
                </p>
              </div>

              <p className="tip">
                Most of the cases you will get lucky and kill first 2 pets with
                only Anubisath Idol.
              </p>
            </div>
          )}
          {curentActiveStrategy === 1 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>
              <div className="turn">
                {" "}
                <p>Turn 1+</p>
                <p>
                  Use <span>Ancient Blessing</span> off-cooldown, otherwise{" "}
                  <span>Arcane Explosion</span> or Pass if you are stunned until{" "}
                  <span className="hero">Chrominius</span> dies.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5-7 </p>
                <p>
                  Bring in the leveling pet then swap to{" "}
                  {curentActiveSlot3[1].id === slot3pet1[1].id && (
                    <span className="hero">
                      {requiredPetOneSlot3[1].pets.name}
                    </span>
                  )}
                  .
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 8</p>
                <p>
                  Cast <span>Arcane Storm</span>.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 9+</p>
                <p>
                  Cast <span>Mana Surge</span> until fight ends.
                </p>
              </div>

              <p className="tip">
                Simple strategy that grants substantial XP to your leveling pet.
              </p>
            </div>
          )}
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
    </div>
  );
}

export default WhisperingPandarenSpirit;
