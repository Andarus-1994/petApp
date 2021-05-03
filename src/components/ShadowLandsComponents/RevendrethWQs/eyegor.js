import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Eyegor/eyegor.jpg";
import location from "../../../assets/Shadowlands/Eyegor/eyegorSL.jpg";
import location2 from "../../../assets/Shadowlands/Eyegor/eyegorRevendreth.jpg";

function Eyegor() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Revendreth 67, 66");

  const [slot1pet1, setSlot1Pet1] = useState([
    [
      {
        id: 1178,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [],
  ]);

  const [slot2pet1, setSlot2Pet1] = useState([
    [
      {
        id: 1387,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },

      {
        id: 1672,
        owned: false,
        abilities: { 1: 0, 2: 1, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [],
  ]);

  const [slot3pet1, setSlot3Pet1] = useState([
    [
      {
        id: 1238,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [],
  ]);

  const [curentActiveSlot1, setCurentActiveSlot1] = useState([
    {
      id: null,
      found: false,
      loading: true,
    },
    {
      id: null,
      found: false,
      loading: true,
    },
  ]);
  const [curentActiveSlot2, setCurentActiveSlot2] = useState([
    {
      id: null,
      found: false,
      loading: true,
    },
    {
      id: null,
      found: false,
      loading: true,
    },
  ]);
  const [curentActiveSlot3, setCurentActiveSlot3] = useState([
    {
      id: null,
      found: false,
      loading: true,
    },
    {
      id: null,
      found: false,
      loading: true,
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
  const [requiredPetOneSlot2, setRequiredPetOneSlot2] = useState([
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
  /*
  useEffect(() => {
    console.log("treces slotsCheck", setOwnedPetsInArray(slot1pet1, 2));
  }, [petsChar]);
*/

  function setOwnedReturnTrue() {
    setSlot1Pet1(checkIfOwned(slot1pet1));
    setSlot2Pet1(checkIfOwned(slot2pet1));
    setSlot3Pet1(checkIfOwned(slot3pet1));
    setSlotsChecked(true);
  }

  const [slotsChecked, setSlotsChecked] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!petsChar.loading || !localStorage.favChar) {
      if (!slotsChecked) setOwnedReturnTrue();
      if (curentActiveSlot1[0].loading && curentActiveSlot1[1].loading) {
        //checkIfOwned(slot3pet1);
        if (slotsChecked && !active) ActiveSlots();
      }
      if (
        !curentActiveSlot1[0].loading &&
        !curentActiveSlot2[0].loading &&
        !curentActiveSlot3[0].loading &&
        requiredPetOneSlot1[0].loading &&
        requiredPetOneSlot2[0].loading &&
        requiredPetOneSlot3[0].loading &&
        slotsChecked &&
        active
      ) {
        getPetDetails();
      }
      curentStrategy(slot1pet1, slot2pet1);
    }
    console.log("req", requiredPetOneSlot1);
    console.log("curentAct", curentActiveSlot1);
    console.log("slot", slot1pet1);
  }, [
    petsChar.pets,

    slotsChecked,
    active,
    curentActiveSlot1[0].loading,
    curentActiveSlot1[1].loading,
    curentActiveSlot2[0].loading,
    curentActiveSlot2[1].loading,
    requiredPetOneSlot2[0].loading,
    requiredPetOneSlot2[1].loading,
    requiredPetOneSlot1[0],
    requiredPetOneSlot1[1],
    requiredPetOneSlot2[1].pets,
    requiredPetOneSlot1[1].loading,
    requiredPetOneSlot1[0].loading,

    /*
    requiredPetOneSlot1[0].loading,
    requiredPetOneSlot1[1].loading,
    requiredPetOneSlot2[0].pets,
    requiredPetOneSlot2[1].pets,
*/
  ]);

  async function getPetDetails() {
    let newArray = [...requiredPetOneSlot1];

    if (newArray[0].loading && !curentActiveSlot1[0].loading) {
      for (var j = 0; j < slot1pet1[0].length; j++) {
        if (slot1pet1[0][j].id === curentActiveSlot1[0].id) {
          await singlePetInfo(slot1pet1[0][j]).then((res) => {
            newArray[0].pets = res;
            newArray[0].petAbilities = [];
            newArray[0].loading = false;
          });
          break;
        }
      }
    }
    console.log("testarea NEW", newArray);

    console.log("testarea FINAL", newArray);

    if (newArray[0].loading && !curentActiveSlot1[0].loading) {
      console.log("testarea NOTHING");
      await singlePetInfo(slot1pet1[0][0]).then((res) => {
        newArray[0].pets = res;
        newArray[0].petAbilities = [];
        newArray[0].loading = false;
      });
    }
    /// if the person doesnt own the pets, strange positioning tho.

    setRequiredPetOneSlot1(newArray);

    let newArray2 = [...requiredPetOneSlot2];

    if (newArray2[0].loading && !curentActiveSlot2[0].loading) {
      for (var j = 0; j < slot2pet1[0].length; j++) {
        if (slot2pet1[0][j].id === curentActiveSlot2[0].id) {
          await singlePetInfo(slot2pet1[0][j]).then((res) => {
            newArray2[0].pets = res;
            newArray2[0].petAbilities = [];
            newArray2[0].loading = false;
          });
          break;
        }
      }
    }

    if (newArray2[0].loading && !curentActiveSlot2[0].loading) {
      console.log("testarea NOTHING");
      await singlePetInfo(slot2pet1[0][0]).then((res) => {
        newArray2[0].pets = res;
        newArray2[0].petAbilities = [];
        newArray2[0].loading = false;
      });
    }

    setRequiredPetOneSlot2(newArray2);

    let newArray3 = [...requiredPetOneSlot3];

    if (newArray3[0].loading && !curentActiveSlot3[0].loading) {
      for (var j = 0; j < slot3pet1[0].length; j++) {
        if (slot3pet1[0][j].id === curentActiveSlot3[0].id) {
          await singlePetInfo(slot3pet1[0][j]).then((res) => {
            newArray3[0].pets = res;
            newArray3[0].petAbilities = [];
            newArray3[0].loading = false;
          });
          break;
        }
      }
    }

    if (newArray3[0].loading && !curentActiveSlot3[0].loading) {
      console.log("testarea NOTHING");
      await singlePetInfo(slot3pet1[0][0]).then((res) => {
        newArray3[0].pets = res;
        newArray3[0].petAbilities = [];
        newArray3[0].loading = false;
      });
    }

    setRequiredPetOneSlot3(newArray3);
  }

  function ActiveSlots() {
    let newArray = [...curentActiveSlot1];
    console.log("testarea ACTIVE");

    for (var j = 0; j < slot1pet1[0].length; j++) {
      if (slot1pet1[0][j].owned && checkPetLevel25(slot1pet1[0][j].id)) {
        newArray[0].id = slot1pet1[0][j].id;
        newArray[0].loading = false;
        newArray[0].found = true;

        break;
      }
      if (slot1pet1[0][j].owned) {
        newArray[0].id = slot1pet1[0][j].id;
        newArray[0].loading = false;
        newArray[0].found = true;
      }
    }

    console.log("testarea CurentAct", newArray);
    if (newArray[0].loading) {
      newArray[0].loading = false;
      newArray[0].found = false;
      newArray[0].id = null;
    }

    setCurentActiveSlot1(newArray);
    let newArray2 = [...curentActiveSlot2];

    for (var j = 0; j < slot2pet1[0].length; j++) {
      if (slot2pet1[0][j].owned && checkPetLevel25(slot2pet1[0][j].id)) {
        newArray2[0].id = slot2pet1[0][j].id;
        newArray2[0].loading = false;
        newArray2[0].found = true;
        break;
      }
      if (slot2pet1[0][j].owned) {
        newArray2[0].id = slot2pet1[0][j].id;
        newArray2[0].loading = false;
        newArray2[0].found = true;
      }
    }

    if (newArray2[0].loading) {
      newArray2[0].loading = false;
      newArray2[0].found = false;
      newArray2[0].id = null;
    }

    setCurentActiveSlot2(newArray2);

    let newArray3 = [...curentActiveSlot3];

    for (var j = 0; j < slot3pet1[0].length; j++) {
      if (slot3pet1[0][j].owned && checkPetLevel25(slot3pet1[0][j].id)) {
        newArray3[0].id = slot3pet1[0][j].id;
        newArray3[0].loading = false;
        newArray3[0].found = true;
        break;
      }
      if (slot3pet1[0][j].owned) {
        newArray3[0].id = slot3pet1[0][j].id;
        newArray3[0].loading = false;
        newArray3[0].found = true;
      }
    }

    if (newArray3[0].loading) {
      newArray3[0].loading = false;
      newArray3[0].found = false;
      newArray3[0].id = null;
    }

    setCurentActiveSlot3(newArray3);

    setActive(true);
  }

  function checkIfOwned(petslotArray) {
    let newArray = [...petslotArray];

    for (var i = 0; i < petslotArray[0].length; i++) {
      newArray[0][i].owned = checkOwnedPet(petslotArray[0][i].id);
      newArray[0][i].loading = false;
    }

    return newArray;
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

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  function curentStrategy(slot1, slot2) {
    for (var i = 0; i < slot1[0].length; i++) {
      for (var j = 0; j < slot2[0].length; j++) {
        if (
          slot1[0][i].owned &&
          checkPetLevel25(slot1[0][i].id) &&
          slot2[0][j].owned &&
          checkPetLevel25(slot2[0][j].id)
        ) {
          console.log("setat str 1");
          return setCurentActiveStrategy(0);
        }
      }
    }
    for (var i = 0; i < slot1[1].length; i++) {
      for (var j = 0; j < slot2[1].length; j++) {
        if (
          slot1[1][i].owned &&
          checkPetLevel25(slot1[1][i].id) &&
          slot2[1][j].owned &&
          checkPetLevel25(slot2[1][j].id)
        ) {
          console.log("setat str 1");
          return setCurentActiveStrategy(1);
        }
      }
    }

    //Default Strategy
    console.log("setat default");
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
    <div className="eyegorWQGuide">
      <h1>Addius Pet Battle Guide</h1>
      <h2>Revendreth (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerEyegorWQ">
        <div className="FightRequirements">
          {curentActiveStrategy === 0 &&
            curentActiveSlot2[1].found &&
            checkPetLevel25(curentActiveSlot2[1].id) &&
            checkPetLevel25(curentActiveSlot1[1].id) &&
            curentActiveSlot1[1].found && (
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
            curentActiveSlot2[0].found &&
            checkPetLevel25(curentActiveSlot2[0].id) &&
            checkPetLevel25(curentActiveSlot1[0].id) &&
            curentActiveSlot1[0].found && (
              <button
                className="stratAviable "
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
                ? requiredPetOneSlot1[0].pets.id === slot1pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot1[0]}
                      petOwned={slot1pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[0].loading && requiredPetOneSlot2[0].pets
                ? requiredPetOneSlot2[0].pets.id === slot2pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot2[0]}
                      petOwned={slot2pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[0].loading && requiredPetOneSlot2[0].pets
                ? requiredPetOneSlot2[0].pets.id === slot2pet1[0][1].id && (
                    <Pet
                      pet={requiredPetOneSlot2[0]}
                      petOwned={slot2pet1[0][1]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? requiredPetOneSlot3[0].pets.id === slot3pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot3[0]}
                      petOwned={slot3pet1[0][0]}
                    />
                  )
                : ""}
            </ul>
          )}

          {curentActiveStrategy === 0 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>
              <div className="effectRevendreth"></div>
              {(curentActiveSlot1[0].id === slot1pet1[0][0].id ||
                curentActiveSlot1[0].id === null) && (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 1</p>
                    <p>
                      Start with <span>Call Lightning</span> ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 2-3</p>
                    <p>
                      Use <span>Haywire</span> and it kills Boneclaw.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 4</p>
                    <p>
                      Cast <span>Fel Immolate</span>.{" "}
                      <span className="hero">
                        {requiredPetOneSlot1[0].pets.name}
                      </span>{" "}
                      dies, bring in{" "}
                      <span className="hero">
                        {requiredPetOneSlot2[0].pets.name}
                      </span>
                    </p>
                  </div>
                  {(curentActiveSlot2[0].id === slot2pet1[0][0].id ||
                    curentActiveSlot2[0].id === null) && (
                    <div>
                      <div className="turn">
                        {" "}
                        <p>Turn 5</p>
                        <p>
                          Use <span>Toxic Smoke</span> dot ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 6</p>
                        <p>
                          Use <span>Wind-Up</span> just ONCE.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 7</p>
                        <p>
                          Use <span>Toxic Smoke</span> again. Spindler should be
                          dead by now and Rocko joins the fight.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 8</p>
                        <p>
                          Swap to{" "}
                          <span className="hero">
                            {requiredPetOneSlot3[0].pets.name}
                          </span>{" "}
                          and cast <span>Curse of Doom</span> dot ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 9</p>
                        <p>
                          Cast <span>Shadow Slash</span>.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 10</p>
                        <p>
                          Cast <span>Shadow Slash</span>.<br></br>
                          You can even pass if you think you can bring him under
                          2k with this.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 11</p>
                        <p>
                          Use <span>Unholy Ascension</span> which swaps in{" "}
                          <span className="hero">
                            {requiredPetOneSlot2[0].pets.name}
                          </span>{" "}
                          .
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 12</p>
                        <p>
                          Cast <span>Wind-Up</span> until he dies.
                        </p>
                      </div>
                    </div>
                  )}
                  {curentActiveSlot2[0].id === slot2pet1[0][1].id && (
                    <div>
                      <div className="turn">
                        {" "}
                        <p>Turn 5</p>
                        <p>
                          Use <span>Wind-Up</span> ability ONCE.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 6</p>
                        <p>
                          Use <span>Metal Fist</span> ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 7</p>
                        <p>
                          Use <span>Metal Fist</span> ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 8</p>
                        <p>
                          Swap to{" "}
                          <span className="hero">
                            {requiredPetOneSlot3[0].pets.name}
                          </span>{" "}
                          and cast <span>Curse of Doom</span> dot ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 9</p>
                        <p>
                          Use <span>Shadow Slash</span> ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 10</p>
                        <p>
                          Use <span>Shadow Slash</span> ability. <br></br>
                          You can even pass if you think you can bring him under
                          2k with this.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 11</p>
                        <p>
                          Cast <span>Unholy Ascension</span> ability.
                        </p>
                      </div>
                      <div className="turn">
                        {" "}
                        <p>Turn 12</p>
                        <p>
                          Bring in{" "}
                          <span className="hero">
                            {requiredPetOneSlot2[0].pets.name}
                          </span>{" "}
                          and use <span>Wind-Up</span> until he dies.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <p className="tip">
                Tips: If your pet gets critted restart. <br></br> The idea
                behing killing last pet is to one shot him from 2k hp so he
                doesn't heal up.{" "}
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

export default Eyegor;
