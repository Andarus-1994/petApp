import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faSyncAlt,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Nightfang/nightfang.jpg";
import location from "../../../assets/Shadowlands/Nightfang/nightfangSL.jpg";
import location2 from "../../../assets/Shadowlands/Nightfang/nightfangArdenweald.jpg";

function Nightfang() {
  const petsChar = useSelector((state) => state.pets);
  const foundChar = useSelector((state) => state.foundChar);
  const [coords] = useState("/way Ardenweald 40, 64");

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
    [
      {
        id: 1387,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
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

  /*
  let curentActiveSlot1 = [
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
  ];
  let curentActiveSlot2 = [
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
  ];
  let curentActiveSlot3 = [
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
  ];
*/
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
      if (curentActiveSlot1[0].loading && curentActiveSlot1[1].loading) {
        //checkIfOwned(slot3pet1);
        if (slotsChecked && !active) ActiveSlots();
      }
      if (
        !curentActiveSlot1[0].loading &&
        !curentActiveSlot1[1].loading &&
        requiredPetOneSlot1[0].loading &&
        requiredPetOneSlot1[1].loading &&
        slotsChecked &&
        active
      ) {
        getPetDetails();
      }
      curentStrategy(slot1pet1);
    }
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
    console.log("testarea DETAILS");
    let newArray = [...requiredPetOneSlot1];
    console.log("testarea lenght", curentActiveSlot1);
    console.log("testarea Aray first", newArray);

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

      if (newArray[1].loading && !curentActiveSlot1[1].loading) {
        for (var j = 0; j < slot1pet1[1].length; j++) {
          if (slot1pet1[1][j].id === curentActiveSlot1[1].id) {
            await singlePetInfo(slot1pet1[1][j]).then((res) => {
              newArray[1].pets = res;
              newArray[1].petAbilities = [];
              newArray[1].loading = false;
            });
          }
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
    /// if the person doesnt own the pets, strange positioning tho.
    if (newArray[1].loading && !curentActiveSlot1[1].loading) {
      await singlePetInfo(slot1pet1[1][0]).then((res) => {
        newArray[1].pets = res;
        newArray[1].petAbilities = [];
        newArray[1].loading = false;
      });
    }

    setRequiredPetOneSlot1(newArray);
  }

  function ActiveSlots() {
    let newArray = [...curentActiveSlot1];
    console.log("testarea ACTIVE");
    for (var i = 0; i < slot1pet1.length; i++) {
      for (var j = 0; j < slot1pet1[i].length; j++) {
        if (slot1pet1[i][j].owned && checkPetLevel25(slot1pet1[i][j].id)) {
          newArray[i].id = slot1pet1[i][j].id;
          newArray[i].loading = false;
          newArray[i].found = true;

          break;
        }
        if (slot1pet1[i][j].owned) {
          newArray[i].id = slot1pet1[i][j].id;
          newArray[i].loading = false;
          newArray[i].found = true;
        }
      }
    }
    console.log("testarea CurentAct", newArray);
    if (newArray[0].loading) {
      newArray[0].loading = false;
      newArray[0].found = false;
      newArray[0].id = null;
    }
    if (newArray[1].loading) {
      newArray[1].loading = false;
      newArray[1].found = false;
      newArray[1].id = null;
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

  function curentStrategy(slot1) {
    for (var i = 0; i < slot1[0].length; i++) {
      if (slot1[0][i].owned && checkPetLevel25(slot1[0][i].id)) {
        console.log("setat str 1");
        return setCurentActiveStrategy(0);
      }
    }
    for (var i = 0; i < slot1[1].length; i++) {
      if (slot1[1][i].owned && checkPetLevel25(slot1[1][i].id)) {
        console.log("setat str 1");
        return setCurentActiveStrategy(1);
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
    <div className="nightfangWQGuide">
      <h1>Lurking in the Shadows Pet Battle Guide</h1>
      <h2>Ardenweald (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerNightfangWQ">
        <div className="FightRequirements">
          {curentActiveStrategy === 0 &&
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

              <li className="anyPet">
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
          )}

          {curentActiveStrategy === 1 && (
            <ul>
              {!requiredPetOneSlot1[1].loading && requiredPetOneSlot1[1].pets
                ? requiredPetOneSlot1[1].pets.id === slot1pet1[1][0].id && (
                    <Pet
                      pet={requiredPetOneSlot1[1]}
                      petOwned={slot1pet1[1][0]}
                    />
                  )
                : ""}

              <li className={"anyPet"}>
                <div className="iconPet">
                  <img className="noImg" alt="?"></img>
                </div>
                <p>Any Pet</p>
                <p>No Stats Required</p>
                <p className="level">Any level 25 </p>
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
          )}

          {curentActiveStrategy === 0 && (
            <div className="FightInstructions">
              <h1>
                <FontAwesomeIcon className="leaf" icon={faLeaf} />
                Fight Instructions{" "}
                <FontAwesomeIcon className="leaf" icon={faLeaf} />
              </h1>

              <div className="turn">
                {" "}
                <p>Turn 1</p>
                {(curentActiveSlot1[0].id === slot1pet1[0][0].id ||
                  curentActiveSlot1[0].id === slot1pet1[0][0].id) && (
                  <p>
                    Start with <span>Call Lightning</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2-3</p>
                {(curentActiveSlot1[0].id === slot1pet1[0][0].id ||
                  curentActiveSlot1[0].id === slot1pet1[0][0].id) && (
                  <p>
                    Use <span>Haywire</span>.
                  </p>
                )}
              </div>
            </div>
          )}

          {curentActiveStrategy === 1 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>

              <div className="turn">
                {" "}
                <p>Turn 1</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                  <p>
                    Start with <span>Toxic Smoke</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                  <p>
                    Use <span>Wind-Up</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 3</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                  <p>
                    Use <span>Wind-Up</span> again.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 4</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                  <p>
                    Use <span>Explode</span> .
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                  <p>
                    Bring in any level 25 pet that does more than 250 damage.
                  </p>
                )}
              </div>
            </div>
          )}

          <h3>
            TIP: Worth doing the World Quest when the Calling is up in the zone.
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

export default Nightfang;
