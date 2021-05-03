import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../../../PetLevelGuideComponents/pet.js";

function UndeadZolla() {
  const petsChar = useSelector((state) => state.pets);

  const [slot1pet1, setSlot1Pet1] = useState([
    [
      {
        id: 1145,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 1238,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
  ]);

  const [slot2pet1, setSlot2Pet1] = useState([
    [
      {
        id: 1351,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 2959,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 1625,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
  ]);

  const [slot3pet1, setSlot3Pet1] = useState([
    [
      {
        id: 1600,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 1574,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
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
      if (curentActiveSlot1[0].loading) {
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
        !curentActiveSlot1[1].loading &&
        !curentActiveSlot2[1].loading &&
        !curentActiveSlot3[1].loading &&
        requiredPetOneSlot1[1].loading &&
        requiredPetOneSlot2[1].loading &&
        requiredPetOneSlot3[1].loading &&
        slotsChecked &&
        active
      ) {
        getPetDetails();
      }
      curentStrategy(slot1pet1, slot2pet1, slot3pet1);
    }
  }, [
    petsChar.pets,

    slotsChecked,
    active,
    curentActiveSlot1[0].loading,

    curentActiveSlot2[0].loading,

    requiredPetOneSlot2[0].loading,

    requiredPetOneSlot1[0],

    requiredPetOneSlot1[0].loading,
  ]);

  async function getPetDetails() {
    console.log("testarea DETAILS");
    let newArray = [...requiredPetOneSlot1];
    console.log("testarea lenght", curentActiveSlot1);
    console.log("testarea Aray first", newArray);

    for (var i = 0; i < slot1pet1.length; i++) {
      if (newArray[i].loading && !curentActiveSlot1[i].loading) {
        for (var j = 0; j < slot1pet1[i].length; j++) {
          if (slot1pet1[i][j].id === curentActiveSlot1[i].id) {
            await singlePetInfo(slot1pet1[i][j]).then((res) => {
              newArray[i].pets = res;
              newArray[i].petAbilities = [];
              newArray[i].loading = false;
            });
            break;
          }
        }
      }
    }

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
      await singlePetInfo(slot1pet1[1][0]).then((res) => {
        newArray[1].pets = res;
        newArray[1].petAbilities = [];
        newArray[1].loading = false;
      });
    }

    setRequiredPetOneSlot1(newArray);

    let newArray2 = [...requiredPetOneSlot2];
    for (var i = 0; i < slot2pet1.length; i++) {
      if (newArray2[i].loading && !curentActiveSlot2[i].loading) {
        for (var j = 0; j < slot2pet1[i].length; j++) {
          if (slot2pet1[i][j].id === curentActiveSlot2[i].id) {
            await singlePetInfo(slot2pet1[i][j]).then((res) => {
              newArray2[i].pets = res;
              newArray2[i].petAbilities = [];
              newArray2[i].loading = false;
            });
            break;
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
    for (var i = 0; i < slot3pet1.length; i++) {
      if (newArray3[i].loading && !curentActiveSlot3[i].loading) {
        for (var j = 0; j < slot3pet1[i].length; j++) {
          if (slot3pet1[i][j].id === curentActiveSlot3[i].id) {
            await singlePetInfo(slot3pet1[i][j]).then((res) => {
              newArray3[i].pets = res;
              newArray3[i].petAbilities = [];
              newArray3[i].loading = false;
            });
            break;
          }
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
    /// if the person doesnt own the pets, strange positioning tho.
    if (newArray3[1].loading && !curentActiveSlot3[1].loading) {
      console.log("testarea");
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
      console.log("testarea CurentAct", newArray);
      if (newArray[i].loading) {
        newArray[i].loading = false;
        newArray[i].found = false;
        newArray[i].id = null;
      }
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
      if (newArray2[i].loading) {
        newArray2[i].loading = false;
        newArray2[i].found = false;
        newArray2[i].id = null;
      }
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

      if (newArray3[i].loading) {
        newArray3[i].loading = false;
        newArray3[i].found = false;
        newArray3[i].id = null;
      }
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
            checkPetLevel25(slot3[0][k].id)
          ) {
            console.log("setat str 1");
            return setCurentActiveStrategy(0);
          }
        }
      }
    }
    for (var i = 0; i < slot1[1].length; i++) {
      for (var j = 0; j < slot2[1].length; j++) {
        for (var k = 0; k < slot3[1].length; k++) {
          if (
            slot1[1][i].owned &&
            checkPetLevel25(slot1[1][i].id) &&
            slot2[1][j].owned &&
            checkPetLevel25(slot2[1][j].id) &&
            slot3[1][k].owned &&
            checkPetLevel25(slot3[1][k].id)
          ) {
            console.log("setat str 2");
            return setCurentActiveStrategy(1);
          }
        }
      }
    }

    for (var i = 0; i < slot1[0].length; i++) {
      for (var j = 0; j < slot2[0].length; j++) {
        for (var k = 0; k < slot3[0].length; k++) {
          if (slot1[0][i].owned && slot2[0][j].owned && slot3[0][k].owned) {
            console.log("setat str 1");
            return setCurentActiveStrategy(0);
          }
        }
      }
    }
    for (var i = 0; i < slot1[1].length; i++) {
      for (var j = 0; j < slot2[1].length; j++) {
        for (var k = 0; k < slot3[1].length; k++) {
          if (slot1[1][i].owned && slot2[1][j].owned && slot3[1][k].owned) {
            console.log("setat str 2");
            return setCurentActiveStrategy(1);
          }
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
    <div className="undeadZollaGuide">
      <h1>Zolla Undead Pet Battle Guide</h1>
      <h2>Bastion (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerUndeadZolla">
        <div className="FightRequirements">
          {curentActiveStrategy === 0 &&
            curentActiveSlot3[1].found &&
            checkPetLevel25(curentActiveSlot3[1].id) &&
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
            curentActiveSlot3[0].found &&
            checkPetLevel25(curentActiveSlot3[0].id) &&
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

              {(curentActiveSlot1[0].id === slot1pet1[0][0].id ||
                curentActiveSlot1[0].id === null) && (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 1</p>
                    <p>
                      Start with <span> Frost Nova</span> spell.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 2</p>
                    <p>
                      Use <span>Ice Tomb</span> dot ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 3</p>
                    <p>
                      Use <span>Pounce</span> ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 4</p>
                    <p>
                      Use <span>Pounce</span> ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 5</p>
                    <p>
                      Cast <span>Frost Nova</span> spell. Slasher is swapped in.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 6</p>
                    <p>
                      Use <span>Pounce</span> abilty.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 7</p>
                    <p>
                      Cast <span>Ice Tomb</span>.{" "}
                      <span className="hero">
                        {requiredPetOneSlot1[0].pets.name}
                      </span>{" "}
                      dies here.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 8</p>
                    <p>
                      Bring in{" "}
                      <span className="hero">
                        {requiredPetOneSlot2[0].pets.name}
                      </span>{" "}
                      and use <span>Dead Man's Party</span>.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 11+</p>
                    <p>
                      Use <span>Dead Man's Party</span> abilty until{" "}
                      <span className="hero">
                        {requiredPetOneSlot2[0].pets.name}
                      </span>{" "}
                      dies.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 16-17</p>
                    <p>
                      <span className="hero">
                        {requiredPetOneSlot2[0].pets.name}
                      </span>{" "}
                      dies. Bring in{" "}
                      <span className="hero">
                        {requiredPetOneSlot3[0].pets.name}
                      </span>{" "}
                      and cast <span>Call Darkness</span> to finish him off.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {curentActiveStrategy === 1 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>

              {curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 1</p>
                    <p>
                      Start with <span> Curse of Doom</span> dot ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 2+</p>
                    <p>
                      From now on <span>Shadow Shock</span> until{" "}
                      <span className="hero">
                        {requiredPetOneSlot1[1].pets.name}
                      </span>
                      enters in undead passive form then cast{" "}
                      <span>Unholy Ascension</span> .
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 7-8</p>
                    <p>
                      Bring in{" "}
                      <span className="hero">
                        {requiredPetOneSlot2[1].pets.name}
                      </span>{" "}
                      and cast <span>Seethe</span> until Battery dies.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 9</p>
                    <p>
                      Slasher comes in. Use <span>Seethe</span>.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 10</p>
                    <p>
                      Use <span> Seethe</span> ability again.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 11</p>
                    <p>
                      Use <span> Spirit Spikes</span> defense ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 12+</p>
                    <p>
                      Use <span> Seethe</span> until Slasher dies.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 14-15</p>
                    <p>
                      Pounder comes in. Keep using <span>Seethe</span> until{" "}
                      <span className="hero">
                        {requiredPetOneSlot2[1].pets.name}
                      </span>{" "}
                      dies.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 16</p>
                    <p>
                      Bring in{" "}
                      <span className="hero">
                        {requiredPetOneSlot3[1].pets.name}
                      </span>{" "}
                      and start with <span>Lift-Off</span>
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 17+</p>
                    <p>
                      Finish him off with <span>Touch of the Animus</span> and{" "}
                      <span>Plagued Blood</span>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {curentActiveStrategy === 0 && (
            <h3>
              TIP: Most of the times any level 25 undead will fit the third
              slot.
            </h3>
          )}
          {curentActiveStrategy === 1 && (
            <h3>TIP: Follow the instructions carefully!</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default UndeadZolla;
