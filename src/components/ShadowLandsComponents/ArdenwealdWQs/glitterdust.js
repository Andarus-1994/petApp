import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faLeaf } from "@fortawesome/free-solid-svg-icons";

import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Glitterdust/glitterdust.jpg";
import location from "../../../assets/Shadowlands/Glitterdust/glitterdustSL.jpg";
import location2 from "../../../assets/Shadowlands/Glitterdust/glitterdustArdenweald.jpg";
import CommentSection from "../../commentSection.js";
function Glitterdust() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Ardenweald 58, 57");

  const [slot1pet1, setSlot1Pet1] = useState([
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
    [],
  ]);

  const [slot2pet1, setSlot2Pet1] = useState([
    [
      {
        id: 2165,
        owned: false,
        abilities: { 1: 0, 2: 1, 3: 2 },
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
        id: 1567,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
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
    requiredPetOneSlot1[1],
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
    /// if the person doesnt own the pets, strange positioning tho.

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
      await singlePetInfo(slot3pet1[0][0]).then((res) => {
        newArray3[0].pets = res;
        newArray3[0].petAbilities = [];
        newArray3[0].loading = false;
      });
    }
    /// if the person doesnt own the pets, strange positioning tho.

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
    /*
    for (var i = 0; i < slot1[1].length; i++) {
      for (var j = 0; j < slot2[1].length; j++) {
        for (var k = 0; k < slot3[0].length; k++) {
        if (
          slot1[1][i].owned &&
          checkPetLevel25(slot1[1][i].id) &&
          slot2[1][j].owned &&
          checkPetLevel25(slot2[1][j].id)
          &&
          slot3[0][k].owned &&
          checkPetLevel25(slot3[0][k].id)
        ) {
          console.log("setat str 1");
          return setCurentActiveStrategy(1);
        }
      }
    }
    }
*/
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
    <div className="glitterdustWQGuide">
      <h1>Natural Defenders Pet Battle Guide</h1>
      <h2>Ardenweald (Shadowlands)</h2>

      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerGlitterdustWQ">
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
            </ul>
          )}

          {curentActiveStrategy === 0 && (
            <div className="FightInstructions">
              <h1>
                <FontAwesomeIcon className="leaf" icon={faLeaf} />
                Fight Instructions{" "}
                <FontAwesomeIcon className="leaf" icon={faLeaf} />
              </h1>

              {(curentActiveSlot1[0].id === slot1pet1[0][0].id ||
                curentActiveSlot1[0].id === null) && (
                <div>
                  <div className="turn">
                    {" "}
                    <p>Turn 1</p>
                    <p>
                      Start with <span>Sandstorm </span> ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 2</p>
                    <p>
                      Use <span>Crush</span> ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 3</p>
                    <p>
                      Use <span>Deflection</span> block ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 4+</p>
                    <p>
                      Use <span>Sandstorm</span> ability off-cd and{" "}
                      <span>Crush</span> as a filler.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 7-8</p>
                    <p>
                      Runehoof comes in. Keep using <span>Sandstorm</span>{" "}
                      off-cd and <span>Crush</span> as filler.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 11-12</p>
                    <p>
                      <span className="hero">
                        {" "}
                        {requiredPetOneSlot1[0].pets.name}
                      </span>{" "}
                      dies . Bring in{" "}
                      <span className="hero">
                        {" "}
                        {requiredPetOneSlot2[0].pets.name}
                      </span>{" "}
                      and cast <span>Make it Rain</span>.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 13</p>
                    <p>
                      Use <span>Egg Barrage</span> ability.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 14</p>
                    <p>
                      Cast <span>Make it Rain</span>.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 15</p>
                    <p>
                      Use <span>Egg Barrage</span> again.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 16</p>
                    <p>
                      <span className="hero">
                        {" "}
                        {requiredPetOneSlot2[0].pets.name}
                      </span>{" "}
                      dies. Bring in{" "}
                      <span className="hero">
                        {" "}
                        {requiredPetOneSlot3[0].pets.name}
                      </span>{" "}
                      and cast <span>Moonfire</span> spell.
                    </p>
                  </div>
                  <div className="turn">
                    {" "}
                    <p>Turn 17</p>
                    <p>
                      Cast <span>Soulrush</span> and should be dead now.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {curentActiveStrategy === 1 && (
            <div className="FightInstructions">
              <h1>Fight Instructions</h1>
              <div className="effectRevendreth"></div>
              <div className="turn">
                {" "}
                <p>Turn 1</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Start with <span>Toxic Smoke</span>. Then choose effect 1.
                  </p>
                ) : (
                  <p>
                    Start with <span>Toxic Smoke</span>. Then choose effect 1.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Cast <span>Wind-Up</span> ability.
                  </p>
                ) : (
                  <p>
                    Cast <span>Wind-Up</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 3 </p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Use <span>Toxic Smoke</span> again.
                  </p>
                ) : (
                  <p>
                    Use <span>Toxic Smoke</span> again.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 4</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Cast <span>Wind-Up</span>.
                  </p>
                ) : (
                  <p>
                    Cast <span>Wind-Up</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5</p>
                {curentActiveSlot1[1].id === slot1pet1[1][0].id ? (
                  <p>
                    Use <span>Explode</span> and bring{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[1].pets.name}
                    </span>{" "}
                    to finish him off .
                  </p>
                ) : (
                  <p>
                    Use <span>Explode</span> and bring{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[1].pets.name}
                    </span>{" "}
                    to finish him off .
                  </p>
                )}
              </div>
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
        props={{ location: "shadowlands/ArdenwealdWQs/Glitterdust" }}
      />
    </div>
  );
}

export default Glitterdust;
