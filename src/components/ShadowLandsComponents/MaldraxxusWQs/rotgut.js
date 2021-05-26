import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Rotgut/rotgut.jpg";
import location from "../../../assets/Shadowlands/Rotgut/rotgutSL.jpg";
import location2 from "../../../assets/Shadowlands/Rotgut/rotgutMaldraxxus.jpg";
import CommentSection from "../../commentSection.js";
function Rotgut() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Maldraxxus 34, 55");

  const [slot1pet1, setSlot1Pet1] = useState([
    [
      {
        id: 1934,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 2202,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
  ]);

  const [slot2pet1, setSlot2Pet1] = useState([
    [
      {
        id: 72,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 2833,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 1523,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 1721,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
  ]);

  const [slot3pet1, setSlot3Pet1] = useState([
    [
      {
        id: 200,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },

      {
        id: 479,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 1625,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
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
      if (
        curentActiveSlot1[0].loading &&
        curentActiveSlot1[1].loading &&
        curentActiveSlot2[0].loading &&
        curentActiveSlot2[1].loading
      ) {
        //checkIfOwned(slot3pet1);
        if (slotsChecked && !active) ActiveSlots();
      }
      if (
        !curentActiveSlot1[0].loading &&
        !curentActiveSlot1[1].loading &&
        !curentActiveSlot2[0].loading &&
        !curentActiveSlot2[1].loading &&
        !curentActiveSlot3[0].loading &&
        requiredPetOneSlot1[0].loading &&
        requiredPetOneSlot1[1].loading &&
        requiredPetOneSlot2[0].loading &&
        requiredPetOneSlot2[1].loading &&
        requiredPetOneSlot3[0].loading &&
        slotsChecked &&
        active
      ) {
        getPetDetails();
        curentStrategy(slot1pet1, slot2pet1, slot3pet1);
      }
    }
  }, [
    petsChar.pets.pets,
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
    if (newArray2[1].loading && !curentActiveSlot2[1].loading) {
      for (var j = 0; j < slot2pet1[1].length; j++) {
        if (newArray2[1].loading) {
          if (slot2pet1[1][j].id === curentActiveSlot2[1].id) {
            await singlePetInfo(slot2pet1[1][j]).then((res) => {
              newArray2[1].pets = res;
              newArray2[1].petAbilities = [];
              newArray2[1].loading = false;
            });
          }
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
    /// if the person doesnt own the pets, strange positioning tho.
    if (newArray2[1].loading && !curentActiveSlot2[1].loading) {
      console.log("testarea");
      await singlePetInfo(slot2pet1[1][0]).then((res) => {
        newArray2[1].pets = res;
        newArray2[1].petAbilities = [];
        newArray2[1].loading = false;
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
    if (newArray3[1].loading && !curentActiveSlot3[1].loading) {
      for (var j = 0; j < slot3pet1[1].length; j++) {
        if (newArray3[1].loading) {
          if (slot3pet1[1][j].id === curentActiveSlot3[1].id) {
            await singlePetInfo(slot3pet1[1][j]).then((res) => {
              newArray3[1].pets = res;
              newArray3[1].petAbilities = [];
              newArray3[1].loading = false;
            });
          }
        }
      }
    }

    if (newArray3[0].loading && !curentActiveSlot3[0].loading) {
      await singlePetInfo(slot3pet1[0][0]).then((res) => {
        newArray3[0].pets = res;
        newArray3[0].petAbilities = [];
        newArray3[0].loading = false;
      });
    }
    /// if the person doesnt own the pets, strange positioning tho.
    if (newArray3[1].loading && !curentActiveSlot3[1].loading) {
      await singlePetInfo(slot3pet1[1][0]).then((res) => {
        newArray3[1].pets = res;
        newArray3[1].petAbilities = [];
        newArray3[1].loading = false;
      });
    }
    setRequiredPetOneSlot3(newArray3);
  }

  function ActiveSlots() {
    let newArray = [...curentActiveSlot1];

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
    let newArray2 = [...curentActiveSlot2];

    for (var i = 0; i < slot2pet1.length; i++) {
      for (var j = 0; j < slot2pet1[i].length; j++) {
        if (slot2pet1[i][j].owned && checkPetLevel25(slot2pet1[i][j].id)) {
          newArray2[i].id = slot2pet1[i][j].id;
          newArray2[i].loading = false;
          newArray2[i].found = true;
          break;
        }
        if (slot2pet1[i][j].owned) {
          newArray2[i].id = slot2pet1[i][j].id;
          newArray2[i].loading = false;
          newArray2[i].found = true;
        }
      }
    }
    if (newArray2[0].loading) {
      newArray2[0].loading = false;
      newArray2[0].found = false;
      newArray2[0].id = null;
    }
    if (newArray2[1].loading) {
      newArray2[1].loading = false;
      newArray2[1].found = false;
      newArray2[1].id = null;
    }
    setCurentActiveSlot2(newArray2);

    let newArray3 = [...curentActiveSlot3];

    for (var i = 0; i < slot3pet1.length; i++) {
      for (var j = 0; j < slot3pet1[i].length; j++) {
        if (slot3pet1[i][j].owned && checkPetLevel25(slot3pet1[i][j].id)) {
          newArray3[i].id = slot3pet1[i][j].id;
          newArray3[i].loading = false;
          newArray3[i].found = true;
          break;
        }
        if (slot3pet1[i][j].owned) {
          newArray3[i].id = slot3pet1[i][j].id;
          newArray3[i].loading = false;
          newArray3[i].found = true;
        }
      }
    }
    if (newArray3[0].loading) {
      newArray3[0].loading = false;
      newArray3[0].found = false;
      newArray3[0].id = null;
    }
    if (newArray3[1].loading) {
      newArray3[1].loading = false;
      newArray3[1].found = false;
      newArray3[1].id = null;
    }
    setCurentActiveSlot3(newArray3);

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

  function curentStrategy(slot1, slot2, slot3) {
    for (var i = 0; i < slot1[0].length; i++) {
      for (var j = 0; j < slot2[0].length; j++) {
        for (var k = 0; k < slot3[0].length; k++) {
          if (
            slot1[0][i].owned &&
            checkPetLevel25(slot1[0][i].id) &&
            slot2[0][j].owned &&
            checkPetLevel25(slot2[0][j].id) &&
            slot3[0][k].owned &&
            checkPetLevel25(slot3[0][j].id)
          ) {
            console.log("setat str 1");
            return setCurentActiveStrategy(0);
          }
        }
      }
    }
    for (var i = 0; i < slot1[1].length; i++) {
      for (var j = 0; j < slot2[1].length; j++) {
        for (var k = 0; k < slot2[1].length; k++) {
          if (
            slot1[1][i].owned &&
            checkPetLevel25(slot1[1][i].id) &&
            slot2[1][j].owned &&
            checkPetLevel25(slot2[1][j].id) &&
            slot2[1][k].owned &&
            checkPetLevel25(slot2[1][k].id)
          ) {
            console.log("setat str 1");
            return setCurentActiveStrategy(1);
          }
        }
      }
    }

    //Default Strategy
    console.log("setat default");
    setCurentActiveStrategy(0);
  }

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  return (
    <div className="rotgutWQGuide">
      <h1>Rotgut Pet Battle Guide</h1>
      <h2>Maldraxxus (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerRotgutWQ">
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
              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? requiredPetOneSlot3[0].pets.id === slot3pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot3[0]}
                      petOwned={slot3pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? requiredPetOneSlot3[0].pets.id === slot3pet1[0][1].id && (
                    <Pet
                      pet={requiredPetOneSlot3[0]}
                      petOwned={slot3pet1[0][1]}
                    />
                  )
                : ""}
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
              {!requiredPetOneSlot2[1].loading && requiredPetOneSlot2[1].pets
                ? requiredPetOneSlot2[1].pets.id === slot2pet1[1][0].id && (
                    <Pet
                      pet={requiredPetOneSlot2[1]}
                      petOwned={slot2pet1[1][0]}
                    />
                  )
                : ""}

              {!requiredPetOneSlot2[1].loading && requiredPetOneSlot2[1].pets
                ? requiredPetOneSlot2[1].pets.id === slot2pet1[1][1].id && (
                    <Pet
                      pet={requiredPetOneSlot2[1]}
                      petOwned={slot2pet1[1][1]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[1].loading && requiredPetOneSlot2[1].pets
                ? requiredPetOneSlot2[1].pets.id === slot2pet1[1][2].id && (
                    <Pet
                      pet={requiredPetOneSlot2[1]}
                      petOwned={slot2pet1[1][2]}
                    />
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
          )}

          {curentActiveStrategy === 0 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>

              <div className="turn">
                {" "}
                <p>Turn 1</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Start with <span>Swarm of Flies</span> dot ability.
                  </p>
                ) : (
                  <p>
                    Start with <span>Swarm of Flies</span> dot ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2-4</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Use <span>Tongue Lash</span> ability until first pet enters
                    in undead passive.
                  </p>
                ) : (
                  <p>
                    Use <span>Tongue Lash</span> ability until first pet enters
                    in undead passive.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Cast <span>Bubble</span> defense ability. First pet dies
                    now.
                  </p>
                ) : (
                  <p>
                    Cast <span>Bubble</span> defense ability. First pet dies
                    now.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 6</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Second pet comes in. Re-apply <span> Swarm of flies</span>{" "}
                    and continue using <span>Tongue Lash</span> .
                  </p>
                ) : (
                  <p>
                    Second pet comes in. Re-apply <span> Swarm of flies</span>{" "}
                    and continue using <span>Tongue Lash</span> .
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 7-8</p>
                {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                  <p>
                    Bring{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}
                    </span>{" "}
                    in and use <span>Dodge</span> ability.
                  </p>
                ) : (
                  <p>
                    Bring{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}
                    </span>{" "}
                    in and use <span>Dodge</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 9</p>
                {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                  <p>
                    Use <span>Stampede</span>.
                  </p>
                ) : (
                  <p>
                    Use <span>Stampede</span> .
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 12</p>
                {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                  <p>
                    Second pet dies. Just cast <span>Flurry</span>.
                  </p>
                ) : (
                  <p>
                    Second pet dies. Just cast <span>Flurry</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                <p>Turn 13</p>
                {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                  <p>
                    Use <span>Flurry</span>.{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}{" "}
                    </span>{" "}
                    probably dies now.
                  </p>
                ) : (
                  <p>
                    Use <span>Flurry</span>.{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}{" "}
                    </span>
                    probably dies now.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 14</p>
                {curentActiveSlot3[0].id === slot3pet1[0][0].id ? (
                  <p>
                    Bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot3[0].pets.name}{" "}
                    </span>
                    and use <span>Dodge</span> ability.
                  </p>
                ) : (
                  <p>
                    Bring in{" "}
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot3[0].pets.name}
                    </span>{" "}
                    and use <span>Dodge</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 15</p>
                {curentActiveSlot3[0].id === slot3pet1[0][0].id ? (
                  <p>
                    Cast <span>Flurry</span> ability until the enemy pet dies.
                    <br></br> After he gets into the undead passive form cast{" "}
                    <span>Burrow</span> to prevent incoming damage.
                  </p>
                ) : (
                  <p>
                    Cast <span>Flurry</span> ability until the enemy pet dies.
                    <br></br> After he gets into the undead passive form cast{" "}
                    <span>Burrow</span> to prevent incoming damage.
                  </p>
                )}
              </div>

              <p className="tip">
                TIP: Use the Dodge ability if SECOND pet gets under 20% hp
                because <br></br>he will kill himself immediately and you will
                dodge the debuff.
              </p>
            </div>
          )}

          <h3>TIP: Any rabbit pet works with the abilities listed above.</h3>
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
        props={{ location: "shadowlands/MaldraxxusWQs/Rotgut" }}
      />
    </div>
  );
}

export default Rotgut;
