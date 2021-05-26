import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Maximilian/maximilian.jpg";
import location from "../../../assets/Shadowlands/Maximilian/maximilianSL.jpg";
import location2 from "../../../assets/Shadowlands/Maximilian/maximilianMaldraxxus.jpg";
import CommentSection from "../../commentSection.js";
function Maximilian() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Maldraxxus 47, 50");

  const [slot1pet1, setSlot1Pet1] = useState([
    [
      {
        id: 2202,
        owned: false,
        abilities: { 1: 0, 2: 1, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 1155,
        owned: false,
        abilities: { 1: 0, 2: 1, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
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
    ],
    [
      {
        id: 1565,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
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
  ]);

  const [slot3pet1, setSlot3Pet1] = useState([
    [
      {
        id: 1466,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },

      {
        id: 1625,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 251,
        owned: false,
        abilities: { 1: 0, 2: 1, 3: 2 },
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
    console.log("testarea slot", slot1pet1);
    console.log("testarea  RREq", requiredPetOneSlot1);
    console.log("testarea active", curentActiveSlot1);
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

      console.log("testarea array mid", newArray);
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
    if (newArray[1].loading && !curentActiveSlot1[1].loading) {
      console.log("testarea");
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
    <div className="maximilianWQGuide">
      <h1>Caregiver Maximillian Pet Battle Guide</h1>
      <h2>Maldraxxus (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerMaximilianWQ">
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
              {!requiredPetOneSlot3[1].loading && requiredPetOneSlot3[1].pets
                ? requiredPetOneSlot3[1].pets.id === slot3pet1[1][0].id && (
                    <Pet
                      pet={requiredPetOneSlot3[1]}
                      petOwned={slot3pet1[1][0]}
                    />
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
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Start with <span>Gale Slash</span> ability.
                  </p>
                ) : (
                  <p>
                    Start with <span>Gale Slash</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Cast <span>Mummy Wrap</span> block ability.
                  </p>
                ) : (
                  <p>
                    Cast <span>Mummy Wrap</span> block ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 3-4</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Strike with <span>Infected Claw</span> ability.
                  </p>
                ) : (
                  <p>
                    Strike with <span>Infected Claw</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Cast <span>Gale Slash</span> again.
                  </p>
                ) : (
                  <p>
                    Cast <span>Gale Slash</span> again.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 6</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Bone Crusher comes in. Use <span>Mummy Wrap</span> to block
                    his charge.
                  </p>
                ) : (
                  <p>
                    Bone Crusher comes in. Use <span>Mummy Wrap</span> to block
                    his charge.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 7</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Cast <span>Gale Slash</span> .
                  </p>
                ) : (
                  <p>
                    Cast <span>Gale Slash</span> .
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 8</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Use <span>Infected Claw</span>.
                  </p>
                ) : (
                  <p>
                    Use <span>Infected Claw</span> .
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 9</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Here{" "}
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot1[0].pets.name}{" "}
                    </span>{" "}
                    dies. Bring in{" "}
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot2[0].pets.name}{" "}
                    </span>{" "}
                    and use <span>Wind-Up</span>.
                  </p>
                ) : (
                  <p>
                    Here{" "}
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot1[0].pets.name}{" "}
                    </span>{" "}
                    dies. Bring in{" "}
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot2[0].pets.name}{" "}
                    </span>
                    use <span>Wind-Up</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 10</p>
                {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                  <p>
                    Use <span>Wind-Up</span> again.
                  </p>
                ) : (
                  <p>
                    Use <span>Wind-Up</span> again.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 11</p>
                {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                  <p>
                    Cast <span>Toxic Smoke</span> and Bone Crusher dies. If not
                    re-cast <span>Toxic Smoke</span>.
                  </p>
                ) : (
                  <p>
                    Cast <span>Toxic Smoke</span> and Bone Crusher dies. If not
                    re-cast <span>Toxic Smoke</span>.
                  </p>
                )}
              </div>
              {curentActiveSlot3[0].id === slot3pet1[0][0].id ||
              curentActiveSlot3[0].id === null ? (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 12</p>
                    {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                      <p>
                        Chipper comes in. Cast <span>Explode</span> and bring{" "}
                        <span className="hero">
                          {" "}
                          {requiredPetOneSlot3[0].pets.name}{" "}
                        </span>{" "}
                        in.
                      </p>
                    ) : (
                      <p>
                        Chipper comes in. Cast <span>Explode</span> and bring{" "}
                        <span className="hero">
                          {" "}
                          {requiredPetOneSlot3[0].pets.name}{" "}
                        </span>
                        in.
                      </p>
                    )}
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 13</p>
                    {curentActiveSlot3[0].id === slot3pet1[0][0].id ? (
                      <p>
                        Use <span>Prowl</span>.
                      </p>
                    ) : (
                      <p>
                        Use <span>Prowl</span>.
                      </p>
                    )}
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 14</p>
                    {curentActiveSlot3[0].id === slot3pet1[0][0].id ? (
                      <p>
                        Cast <span>Arcane Dash</span>.
                      </p>
                    ) : (
                      <p>
                        Cast <span>Arcane Dash</span>.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 12</p>
                    {curentActiveSlot2[0].id === slot2pet1[0][0].id ? (
                      <p>
                        Chipper comes in. Cast <span>Explode</span> and bring{" "}
                        <span className="hero">
                          {" "}
                          {requiredPetOneSlot3[0].pets.name}{" "}
                        </span>
                        in.
                      </p>
                    ) : (
                      <p>
                        Chipper comes in. Cast <span>Explode</span> and bring{" "}
                        <span className="hero">
                          {" "}
                          {requiredPetOneSlot3[0].pets.name}
                        </span>{" "}
                        in.
                      </p>
                    )}
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 13</p>
                    {curentActiveSlot3[0].id === slot3pet1[0][1].id ? (
                      <p>
                        Use <span>Enrage</span> ability.
                      </p>
                    ) : (
                      <p>
                        Use <span>Enrage</span> ability.
                      </p>
                    )}
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 14</p>
                    {curentActiveSlot3[0].id === slot3pet1[0][1].id ? (
                      <p>
                        Cast <span>Soulrush</span> ability.
                      </p>
                    ) : (
                      <p>
                        Cast <span>Soulrush</span> ability.
                      </p>
                    )}
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 15</p>
                    {curentActiveSlot3[0].id === slot3pet1[0][1].id ? (
                      <p>
                        Finish him with a <span>Spiritfire Bolt</span> spell.
                      </p>
                    ) : (
                      <p>
                        Finish him with a <span>Spiritfire Bolt</span> spell.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <p className="tip">
                TIP: If Iron Starlette enters in passive form, cast explode
                immediately. <br></br>Also if your pet gets critted just redo
                the fight.
              </p>
            </div>
          )}

          {curentActiveStrategy === 1 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>

              <div className="turn">
                {" "}
                <p>Turn 1</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Start with <span>Sanstorm</span> ability.
                  </p>
                ) : (
                  <p>
                    Start with <span>Sanstorm</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>Just pass.</p>
                ) : (
                  <p>Just pass.</p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 3</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Use <span>Deflection</span> block ability.
                  </p>
                ) : (
                  <p>
                    Use <span>Deflection</span> block ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 4</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    From now on <span>Sandstorm</span> off-cd and{" "}
                    <span>Crush</span> as filler.
                  </p>
                ) : (
                  <p>
                    From now on <span>Sandstorm</span> off-cd and{" "}
                    <span>Crush</span> as filler.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 7-8</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Bloog dies and Bone Crusher comes in. Use{" "}
                    <span>Deflection</span> to block his charge.
                    <span className="important">
                      {" "}
                      Always keep <span>Deflection</span> for Bone Crusher's
                      first hit.
                    </span>
                  </p>
                ) : (
                  <p>
                    Bloog dies and Bone Crusher comes in. Use{" "}
                    <span>Deflection</span> to block his charge.
                    <span className="important">
                      {" "}
                      Always keep <span>Deflection</span> for Bone Crusher's
                      first hit.
                    </span>
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 9</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Use <span>Crush</span> until{" "}
                    <span className="hero">
                      {requiredPetOneSlot1[1].pets.name}
                    </span>{" "}
                    dies.
                  </p>
                ) : (
                  <p>
                    Use <span>Crush</span> until{" "}
                    <span className="hero">
                      {requiredPetOneSlot1[1].pets.name}
                    </span>{" "}
                    dies.
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 10</p>
                {curentActiveSlot2[1].id === slot2pet1[1][0].id ? (
                  <p>
                    Bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[1].pets.name}
                    </span>{" "}
                    and cast <span>Wind-Up</span>.
                  </p>
                ) : (
                  <p>
                    Bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[1].pets.name}{" "}
                    </span>{" "}
                    and cast <span>Wind-Up</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 11</p>
                {curentActiveSlot2[1].id === slot2pet1[1][0].id ? (
                  <p>
                    Cast <span>Extra Plating</span>
                  </p>
                ) : (
                  <p>
                    Cast <span>Extra Plating</span>
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 12</p>
                {curentActiveSlot2[1].id === slot2pet1[1][0].id ? (
                  <p>
                    Cast <span>Wind-Up</span> until Bone Crusher dies.
                    <span className="important">
                      If your pet gets stunned, finish the second part of
                      Wind-Up ability and then just spam Puncture Wound.
                    </span>
                  </p>
                ) : (
                  <p>
                    Cast <span>Wind-Up</span> until Bone Crusher dies.
                    <span className="important">
                      If your pet gets stunned, finish the second part of
                      Wind-Up ability and then just spam Metal Fist.
                    </span>
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 13</p>
                {curentActiveSlot2[1].id === slot2pet1[1][0].id ? (
                  <p>
                    Chipper comes in. Use <span>Puncture Wound</span>.
                  </p>
                ) : (
                  <p>
                    Chipper comes in. Use <span>Metal Fist</span> .
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 14</p>
                {curentActiveSlot3[1].id === slot3pet1[1][0].id ? (
                  <p>
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot3[1].pets.name}{" "}
                    </span>
                    comes in. Just pass.
                  </p>
                ) : (
                  <p>
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot3[1].pets.name}{" "}
                    </span>
                    comes in. Just pass.
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 15</p>
                {curentActiveSlot3[1].id === slot3pet1[1][0].id ? (
                  <p>
                    Cast <span>Corrosion</span>.
                  </p>
                ) : (
                  <p>
                    Cast <span>Corrosion</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 16</p>
                {curentActiveSlot3[1].id === slot3pet1[1][0].id ? (
                  <p>
                    Cast <span>Expunge</span>.
                  </p>
                ) : (
                  <p>
                    Cast <span>Expunge</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 17</p>
                {curentActiveSlot3[1].id === slot3pet1[1][0].id ? (
                  <p>
                    Finish him off with an <span>Ooze Touch</span>.
                  </p>
                ) : (
                  <p>
                    Finish him off with an <span>Ooze Touch</span>.
                  </p>
                )}
              </div>

              <p className="tip">TIP: Be aware of Yellow notes.</p>
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
      <CommentSection
        props={{ location: "shadowlands/MaldraxxusWQs/Maximillian" }}
      />
    </div>
  );
}

export default Maximilian;
