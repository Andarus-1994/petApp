import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Dundley/dundley.jpg";
import location from "../../../assets/Shadowlands/Dundley/dundleySL.jpg";
import location2 from "../../../assets/Shadowlands/Dundley/dundleyMaldraxxus.jpg";
import CommentSection from "../../commentSection.js";
function Dundley() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Maldraxxus 63, 46");
  const [slot1pet1, setslot1pet1] = useState([
    [
      {
        id: 1913,
        owned: false,
        abilities: { 1: 3, 2: 1, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 118,
        owned: false,
        abilities: { 1: 3, 2: 1, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
  ]);

  const [slot2pet1, setslot2pet1] = useState([
    [
      {
        id: 1567,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 5 },
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
  ]);

  const [slot3pet1, setslot3pet1] = useState([
    [
      {
        id: 1523,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {},
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

  useEffect(() => {
    /*
    if (
      !requiredPetOneSlot1[0].loading &&
      !requiredPetOneSlot3[0].loading &&
      requiredPetOneSlot1[1].loading &&
      requiredPetOneSlot3[1].loading
    )
      getPetDetails2();

*/
    setslot1pet1(setOwnedPetsInArray(slot1pet1, 2));
    setslot2pet1(setOwnedPetsInArray(slot2pet1, 2));
    setslot3pet1(setOwnedPetsInArray(slot3pet1, 3));

    if (
      !curentActiveSlot1[0].found &&
      curentActiveSlot1[0].id === null
      /*&&
      !curentActiveSlot1[1].found &&
      curentActiveSlot1[1].id === null */
    ) {
      ActivePetSlot1();
    }
    if (
      !curentActiveSlot2[0].found &&
      curentActiveSlot2[0].id === null
      /*&&
        !curentActiveSlot1[1].found &&
        curentActiveSlot1[1].id === null */
    ) {
      ActivePetSlot2();
    }
    if (
      !curentActiveSlot3[0].found &&
      curentActiveSlot3[0].id === null /*&&
      !curentActiveSlot3[1].found &&
      curentActiveSlot3[1].id === null
      for strategy 2 */
    ) {
      ActivePetSlot3();
    }

    // if I find a pet in collection for slot 3
    // if I don't find any pet in collection for slot 3
  }, [
    petsChar,

    /*
    curentActiveSlot1[1],
    curentActiveSlot3[1],
    */
  ]);

  useMemo(() => {
    curentStrategy(slot1pet1, slot3pet1);
    if (
      requiredPetOneSlot1[0].loading &&
      requiredPetOneSlot2[0].loading &&
      requiredPetOneSlot3[0].loading &&
      !curentActiveSlot2[0].loading &&
      !curentActiveSlot3[0].loading
    )
      getPetDetails();
  }, [
    curentActiveSlot3[0],
    curentActiveSlot2[0],
    curentActiveSlot1[0],

    /*
    curentActiveSlot3[1],
    curentActiveSlot1[1],
    */
    requiredPetOneSlot1[0].loading,
    requiredPetOneSlot2[0].loading,
    requiredPetOneSlot3[0].loading,
  ]);

  function setOwnedPetsInArray(slotpet, number) {
    let slot1pet1Array = [...slotpet];
    console.log(slotpet[0].length);
    for (var i = 0; i < slotpet[0].length; i++) {
      slot1pet1Array[0][i] = {
        ...slotpet[0][i],
        owned: checkOwnedPet(slotpet[0][i].id),
        loading: false,
      };
    }
    /*
    for (var i = 0; i < slotpet[1].length; i++) {
      slot1pet1Array[1][i] = {
        ...slotpet[1][i],
        owned: checkOwnedPet(slotpet[1][i].id),
        loading: false,
      };
    }  for strategy nr 2 */

    return slot1pet1Array;
  }

  function setCurentActivePetsInArray(curentActiveSlot, slotpet, number) {
    let slot1pet1Array = [...curentActiveSlot];
    slot1pet1Array[number] = {
      ...curentActiveSlot[number],
      id: slotpet.id,
      found: true,
      loading: false,
    };
    return slot1pet1Array;
  }

  function setFoundNoneArray(curentActiveSlot, number) {
    let slot1pet1Array = [...curentActiveSlot];
    slot1pet1Array[number] = {
      ...curentActiveSlot[number],
      id: null,
      found: false,
      loading: false,
    };
    return slot1pet1Array;
  }

  function ActivePetSlot1() {
    let initialArray = [...curentActiveSlot1];
    var found = false;
    for (var i = 0; i < slot1pet1[0].length; i++) {
      if (slot1pet1[0][i].owned && checkPetLevel25(slot1pet1[0][i].id)) {
        setCurentActiveSlot1(
          setCurentActivePetsInArray(curentActiveSlot1, slot1pet1[0][i], 0)
        );
        break;
      }
      if (slot1pet1[0][i].owned && !initialArray[0].found) {
        found = true;
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot1,
          slot1pet1[0][i],
          0
        );
        setCurentActiveSlot1(
          setCurentActivePetsInArray(curentActiveSlot1, slot1pet1[0][i], 0)
        );
      }
    }
    if (!found) {
      setCurentActiveSlot1(setFoundNoneArray(curentActiveSlot1, 0));
    }
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

  function ActivePetSlot2() {
    let initialArray = [...curentActiveSlot2];
    var found = false;
    for (var i = 0; i < slot2pet1[0].length; i++) {
      if (slot2pet1[0][i].owned && checkPetLevel25(slot2pet1[0][i].id)) {
        setCurentActiveSlot2(
          setCurentActivePetsInArray(curentActiveSlot2, slot2pet1[0][i], 0)
        );
        break;
      }
      if (slot2pet1[0][i].owned && !initialArray[0].found) {
        found = true;
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot2,
          slot2pet1[0][i],
          0
        );
        setCurentActiveSlot2(
          setCurentActivePetsInArray(curentActiveSlot2, slot2pet1[0][i], 0)
        );
      }
    }
    if (!found) {
      setCurentActiveSlot2(setFoundNoneArray(curentActiveSlot2, 0));
    }
  }

  function ActivePetSlot3() {
    let initialArray = [...curentActiveSlot3];
    var found = false;
    console.log("dupas");
    for (var i = 0; i < slot3pet1[0].length; i++) {
      if (slot3pet1[0][i].owned && checkPetLevel25(slot3pet1[0][i].id)) {
        setCurentActiveSlot3(
          setCurentActivePetsInArray(curentActiveSlot3, slot3pet1[0][i], 0)
        );
        break;
      }
      if (slot3pet1[0][i].owned && !initialArray[0].found) {
        found = true;
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot3,
          slot3pet1[0][i],
          0
        );
        setCurentActiveSlot3(
          setCurentActivePetsInArray(curentActiveSlot3, slot3pet1[0][i], 0)
        );
      }
    }
    if (!found) {
      setCurentActiveSlot3(setFoundNoneArray(curentActiveSlot3, 0));
    }
  }
  /*
  function ActivePetSlot3() {
    let initialArray = [...curentActiveSlot3];

    for (var j = 0; j < slot3pet1.length; j++) {
      slot3pet1[j].map((pet) => {
        console.log("J", j);
        if (!initialArray[j].found) {
          if (pet.owned && checkPetLevel25(pet.id)) {
            setCurentActiveSlot3(
              setCurentActivePetsInArray(initialArray, pet, j)
            );
          }
          if (pet.owned && checkArraysEqual(initialArray, curentActiveSlot3)) {
            console.log("enters in the for");
            initialArray = setCurentActivePetsInArray(
              curentActiveSlot3,
              pet,
              j
            );
            setCurentActiveSlot3(
              setCurentActivePetsInArray(initialArray, pet, j)
            );
          }
        }
      });
    }
  }
*/
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
    console.log(curentActiveSlot);
    let slotArray = [...curentActiveSlot];
    slotArray[number] = {
      ...curentActiveSlot[number],
      pets: response,
      petAbilities: [],
      loading: false,
    };
    return slotArray;
  }

  async function getPetDetails() {
    console.log("details");
    if (curentActiveSlot1[0].id === slot1pet1[0][0].id) {
      console.log("details 1");
      await singlePetInfo(slot1pet1[0][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 0)
        );
      });
    }
    if (curentActiveSlot1[0].id === slot1pet1[0][1].id) {
      console.log("details 1");
      await singlePetInfo(slot1pet1[0][1]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 0)
        );
      });
    }
    if (curentActiveSlot2[0].id === slot2pet1[0][0].id) {
      console.log("details 1");
      await singlePetInfo(slot2pet1[0][0]).then((res) => {
        setRequiredPetOneSlot2(
          setRequiredPetInArray(requiredPetOneSlot2, res, 0)
        );
      });
    }
    if (curentActiveSlot2[0].id === slot2pet1[0][1].id) {
      console.log("details 1");
      await singlePetInfo(slot2pet1[0][1]).then((res) => {
        setRequiredPetOneSlot2(
          setRequiredPetInArray(requiredPetOneSlot2, res, 0)
        );
      });
    }
    if (curentActiveSlot3[0].id === slot3pet1[0][0].id) {
      console.log("details 2");
      await singlePetInfo(slot3pet1[0][0]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 0)
        );
      });
    }
    if (curentActiveSlot3[0].id === slot3pet1[0][1].id) {
      await singlePetInfo(slot3pet1[0][1]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 0)
        );
      });
    }

    if (curentActiveSlot1[0].id === null) {
      console.log("details 3");
      await singlePetInfo(slot1pet1[0][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 0)
        );
      });
    }

    if (curentActiveSlot2[0].id === null) {
      console.log("details 3");
      await singlePetInfo(slot2pet1[0][0]).then((res) => {
        setRequiredPetOneSlot2(
          setRequiredPetInArray(requiredPetOneSlot2, res, 0)
        );
      });
    }
    if (curentActiveSlot3[0].id === null) {
      console.log("details 4");
      await singlePetInfo(slot3pet1[0][0]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 0)
        );
      });
    }
  }

  function getPetDetails2() {
    console.log("getPetDetails 2");
    console.log(requiredPetOneSlot1);
    if (curentActiveSlot1[1].id === slot1pet1[1][0].id) {
      singlePetInfo(slot1pet1[1][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 1)
        );
      });
    }
    if (curentActiveSlot3[1].id === slot3pet1[1][0].id) {
      console.log("intra aici slot 3 active pet 1 -2");
      singlePetInfo(slot3pet1[1][0]).then((res) => {
        console.log(setRequiredPetInArray(requiredPetOneSlot3, res, 1));
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 1)
        );
      });
    }

    if (curentActiveSlot3[1].id === slot3pet1[1][0].id) {
      console.log("intra aici slot 3 active");
      singlePetInfo(slot3pet1[1][0]).then((res) => {
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 2)
        );
      });
    }

    if (curentActiveSlot1[1].id === null) {
      console.log("intra aici dad");
      singlePetInfo(slot1pet1[1][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 1)
        );
      });
    }
    if (curentActiveSlot3[1].id === null) {
      console.log("intra aici das");
      singlePetInfo(slot3pet1[1][0]).then((res) => {
        console.log(setRequiredPetInArray(requiredPetOneSlot3, res, 1));
        setRequiredPetOneSlot3(
          setRequiredPetInArray(requiredPetOneSlot3, res, 1)
        );
      });
    }

    console.log("full round get Pet Details ");
  }

  function curentStrategy(slot1, slot2) {
    slot1[0].map((strat1slot1) => {
      slot2[0].map((strat1slot2) => {
        if (
          strat1slot1.owned &&
          checkPetLevel25(strat1slot1.id) &&
          strat1slot2.owned &&
          checkPetLevel25(strat1slot2.id)
        )
          console.log("setat str 0");
        return setCurentActiveStrategy(0);
      });
    });
    /*
    slot1[1].map((strat2slot1) => {
      slot2[1].map((strat2slot2) => {
        if (
          strat2slot1.owned &&
          checkPetLevel25(strat2slot1.id) &&
          strat2slot2.owned &&
          checkPetLevel25(strat2slot2.id)
        )
          console.log("setat str 1");
        return setCurentActiveStrategy(1);
      });
    });
*/
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
    <div className="dundleyWQGuide">
      <h1>Dundley Stickyfingers Pet Battle Guide</h1>
      <h2>Maldraxxus (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      {
        (console.log("active", curentActiveSlot1[0]),
        console.log("req", requiredPetOneSlot1[0]),
        console.log("slot", slot1pet1[0]))
      }
      <div className="containerDundleyWQ">
        <div className="FightRequirements">
          {curentActiveStrategy === 0 && (
            <ul>
              {!requiredPetOneSlot1[0].loading && requiredPetOneSlot1[0].pets
                ? curentActiveSlot1[0].id === slot1pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot1[0]}
                      petOwned={slot1pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot1[0].loading && requiredPetOneSlot1[0].pets
                ? curentActiveSlot1[0].id === slot1pet1[0][1].id && (
                    <Pet
                      pet={requiredPetOneSlot1[0]}
                      petOwned={slot1pet1[0][1]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot1[0].loading && requiredPetOneSlot1[0].pets
                ? curentActiveSlot1[0].id === null && (
                    <Pet
                      pet={requiredPetOneSlot1[0]}
                      petOwned={slot1pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[0].loading && requiredPetOneSlot2[0].pets
                ? curentActiveSlot2[0].id === slot2pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot2[0]}
                      petOwned={slot2pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[0].loading && requiredPetOneSlot2[0].pets
                ? curentActiveSlot2[0].id === slot2pet1[0][1].id && (
                    <Pet
                      pet={requiredPetOneSlot2[0]}
                      petOwned={slot2pet1[0][1]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[0].loading && requiredPetOneSlot2[0].pets
                ? curentActiveSlot2[0].id === null && (
                    <Pet
                      pet={requiredPetOneSlot2[0]}
                      petOwned={slot2pet1[0][0]}
                    />
                  )
                : ""}

              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? curentActiveSlot3[0].id === slot3pet1[0][0].id && (
                    <Pet
                      pet={requiredPetOneSlot3[0]}
                      petOwned={slot3pet1[0][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? curentActiveSlot3[0].id === slot3pet1[0][1].id && (
                    <Pet
                      pet={requiredPetOneSlot3[0]}
                      petOwned={slot3pet1[0][1]}
                    />
                  )
                : ""}

              {!requiredPetOneSlot3[0].loading && requiredPetOneSlot3[0].pets
                ? curentActiveSlot3[0].id === null && (
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
              <div className="turn">
                {" "}
                <p>Turn 1</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Start with the <span>Stampede</span> ability.
                  </p>
                ) : (
                  <p>
                    Start with the <span>Stampede</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 4</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    After the <span>Stampede </span> is done cast{" "}
                    <span>Tranqulity</span> .
                  </p>
                ) : (
                  <p>
                    After the <span>Stampede </span> is done cast{" "}
                    <span>Tranqulity</span> .
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5 </p>
                <p>
                  Whirly dies, Stinkdust comes in. Continue using{" "}
                  <span>Stampede</span>.
                </p>
              </div>
              <div className="turn">
                {" "}
                <p>Turn 8</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Use <span>Headbutt</span> ability.
                  </p>
                ) : (
                  <p>
                    Use <span>Headbutt</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 9</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Use <span>Stampede</span> again.
                  </p>
                ) : (
                  <p>
                    Use <span>Stampede</span> again.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 12</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Continue using <span>Stampede</span> until Stinkdust dies.
                  </p>
                ) : (
                  <p>
                    Continue using <span>Stampede</span> until Stinkdust dies.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 13</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id &&
                curentActiveSlot2[0].id === slot2pet1[0][1].id ? (
                  <p>
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot1[0].pets.name}{" "}
                    </span>
                    dies, bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}
                    </span>{" "}
                    and just pass if Trailblazer attacked already.
                  </p>
                ) : (
                  <p>
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot1[0].pets.name}{" "}
                    </span>
                    dies, bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}
                    </span>{" "}
                    and just pass if Trailblazer attacked already.
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 14</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id &&
                curentActiveSlot2[0].id === slot2pet1[0][1].id ? (
                  <p>
                    Use <span>Enrage</span>.
                  </p>
                ) : (
                  <p>
                    Use <span>Ethereal</span>.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 15</p>
                <p>
                  Cast <span>Soulrush</span> ability.
                </p>
              </div>

              <div className="turn">
                {" "}
                <p>Turn 16</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id &&
                curentActiveSlot2[0].id === slot2pet1[0][1].id ? (
                  <p>
                    From now on use <span>Spiritfire Bolt</span> as a filler.
                  </p>
                ) : (
                  <p>
                    From now on use <span>Dark Talon</span> as a filler and{" "}
                    <span>Ethereal</span> after Trailblazer uses{" "}
                    <span>Evasion</span> (dodge buff).
                  </p>
                )}
              </div>

              <div className="turn">
                {" "}
                <p>Turn 17</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id &&
                curentActiveSlot2[0].id === slot2pet1[0][1].id ? (
                  <p>
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}
                    </span>{" "}
                    dies. Bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot3[0].pets.name}
                    </span>{" "}
                    to finish it off with <span>Call Darkness</span>.
                  </p>
                ) : (
                  <p>
                    <span className="hero">
                      {requiredPetOneSlot2[0].pets.name}
                    </span>{" "}
                    dies. Bring in{" "}
                    <span className="hero">
                      {requiredPetOneSlot3[0].pets.name}
                    </span>{" "}
                    to finish it off with <span>Call Darkness</span>.
                  </p>
                )}
              </div>

              {curentActiveSlot2[0].id === slot2pet1[0][0].id && (
                <p className="tip">
                  While in his passive you can use Ethereal to dodge his
                  attacks.
                </p>
              )}
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
        props={{ location: "shadowlands/MaldraxxusWQs/Dundley" }}
      />
    </div>
  );
}

export default Dundley;
