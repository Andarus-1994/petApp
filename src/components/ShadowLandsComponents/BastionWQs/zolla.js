import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Zolla/zolla.jpg";
import location from "../../../assets/Shadowlands/Zolla/zollaSL.jpg";
import location2 from "../../../assets/Shadowlands/Zolla/zollaBastion.jpg";

function Zolla() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Bastion 51, 38");

  const [slot1pet1, setSlot1Pet1] = useState([
    [
      {
        id: 1349,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [],
  ]);

  const [slot2pet1, setSlot2Pet1] = useState([[], []]);

  let slot3pet1 = [[{}, {}], [{}]];

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
  const [requiredPetOneSlot3, setrequiredPetOneSlot3] = useState([
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

    setSlotsChecked(true);
  }

  const [slotsChecked, setSlotsChecked] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!petsChar.loading || !localStorage.favChar) {
      if (!slotsChecked) setOwnedReturnTrue();
      if (curentActiveSlot1[0].loading) {
        //checkIfOwned(slot3pet1);
        if (slotsChecked && !active) ActiveSlots();
      }
      if (
        !curentActiveSlot1[0].loading &&
        requiredPetOneSlot1[0].loading &&
        slotsChecked &&
        active
      ) {
        getPetDetails();
      }
      curentStrategy(slot1pet1, slot2pet1);
    }
  }, [
    petsChar.pets,

    slotsChecked,
    active,
    curentActiveSlot1[0].loading,

    requiredPetOneSlot1[0],

    requiredPetOneSlot1[0].loading,
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

    if (newArray[0].loading && !curentActiveSlot1[0].loading) {
      await singlePetInfo(slot1pet1[0][0]).then((res) => {
        newArray[0].pets = res;
        newArray[0].petAbilities = [];
        newArray[0].loading = false;
      });
    }

    setRequiredPetOneSlot1(newArray);
  }

  function ActiveSlots() {
    let newArray = [...curentActiveSlot1];

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

    if (newArray[0].loading) {
      newArray[0].loading = false;
      newArray[0].found = false;
      newArray[0].id = null;
    }

    setCurentActiveSlot1(newArray);

    setActive(true);
  }

  function checkIfOwned(petslotArray) {
    let newArray = [...petslotArray];
    for (var j = 0; j < petslotArray.length; j++) {
      for (var i = 0; i < petslotArray[j].length; i++) {
        newArray[j][i].owned = checkOwnedPet(petslotArray[j][i].id);
        newArray[j][i].loading = false;
      }
    }
    return newArray;
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

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  function curentStrategy(slot1, slot2) {
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
    <div className="stratiosWQGuide">
      <h1>Micro Defense Force Pet Battle Guide</h1>
      <h2>Bastion (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerStratiosWQ">
        <div className="FightRequirements">
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

              <li className="anyPet">
                <div className="iconPet">
                  <img className="noImg" alt="?"></img>
                </div>
                <p>Any Pet</p>
                <p>No Stats Required</p>
                <p className="level">Any level 25 </p>
              </li>
              <li className="anyPet">
                <div className="iconPet">
                  <img className="noImg" alt="?"></img>
                </div>
                <p>Any Pet</p>
                <p>No Stats Required</p>
                <p className="level">Any level </p>
              </li>
            </ul>
          )}

          {curentActiveStrategy === 0 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>

              {(curentActiveSlot1[0].id === slot1pet1[0][0].id ||
                curentActiveSlot1[0].id === null) && (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 1</p>
                    <p>
                      Start with <span>Ice Tomb</span> dot ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 2</p>
                    <p>
                      Use <span>Call Blizzard</span> weather ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 3+</p>
                    <p>
                      Cast <span>Ice Lance</span> until Pounder comes in.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 7-8</p>
                    <p>
                      Use <span>Call Blizzard</span> again.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 9+</p>
                    <p>
                      Cast <span>Ice Lance</span> until Pounder dies.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          <h3>TIP: Follow the instructions strictly.</h3>
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

export default Zolla;
