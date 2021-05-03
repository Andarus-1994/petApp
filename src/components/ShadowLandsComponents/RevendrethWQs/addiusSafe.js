import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { singlePetInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Pet from "../../PetLevelGuideComponents/pet.js";
import location3 from "../../../assets/Shadowlands/Addius/addius.jpg";
import location from "../../../assets/Shadowlands/Addius/addiusSL.jpg";
import location2 from "../../../assets/Shadowlands/Addius/addiusRevendreth.jpg";

function Addius() {
  const petsChar = useSelector((state) => state.pets);
  const [coords] = useState("/way Maldraxxus 63, 46");
  const [rememberOwned, setRememberOwned] = useState(false);
  const [slot1pet1, setslot1pet1] = useState([
    [
      {
        id: 1625,
        owned: false,
        abilities: { 1: 3, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 1320,
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

  const [slot2pet1, setslot2pet1] = useState([
    [
      {
        id: 1625,
        owned: false,
        abilities: { 1: 0, 2: 1, 3: 5 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 1320,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
    [
      {
        id: 1531,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
      {
        id: 1320,
        owned: false,
        abilities: { 1: 0, 2: 4, 3: 2 },
        loading: true,
        speed: null,
        rarity: "rare",
      },
    ],
  ]);

  const [slot3pet1, setslot3pet1] = useState([[{}, {}], []]);

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

    if (!rememberOwned) {
      setslot1pet1(setOwnedPetsInArray(slot1pet1, 2));
      setslot2pet1(setOwnedPetsInArray(slot2pet1, 2));
      setslot3pet1(setOwnedPetsInArray(slot3pet1, 3));
      setRememberOwned(true);
      console.log("treces Remember true");
    }

    if (
      !curentActiveSlot1[0].found &&
      curentActiveSlot1[0].id === null &&
      !curentActiveSlot1[1].found &&
      curentActiveSlot1[1].id === null &&
      rememberOwned
      /*&&
      !curentActiveSlot1[1].found &&
      curentActiveSlot1[1].id === null */
    ) {
      ActivePetSlot1();
    }
    if (
      !curentActiveSlot2[0].found &&
      curentActiveSlot2[0].id === null &&
      !curentActiveSlot2[1].found &&
      curentActiveSlot2[1].id === null &&
      rememberOwned
      /*&&
        !curentActiveSlot1[1].found &&
        curentActiveSlot1[1].id === null */
    ) {
      ActivePetSlot2();
    }
    if (
      !curentActiveSlot3[0].found &&
      curentActiveSlot3[0].id === null &&
      rememberOwned

      /*&&
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
    rememberOwned,
    /*
    curentActiveSlot1[1],
    curentActiveSlot3[1],
    */
  ]);

  useMemo(() => {
    curentStrategy(slot1pet1, slot2pet1);
    if (
      requiredPetOneSlot1[0].loading &&
      requiredPetOneSlot1[1].loading &&
      requiredPetOneSlot2[0].loading &&
      requiredPetOneSlot2[1].loading &&
      !curentActiveSlot1[1].loading &&
      !curentActiveSlot2[0].loading &&
      !curentActiveSlot2[1].loading &&
      rememberOwned
    )
      getPetDetails();

    /* if (
      requiredPetOneSlot1[1].loading &&
      !curentActiveSlot1[1].loading &&
      !requiredPetOneSlot1[0].loading
    )
      getPetDetails2();
      */
  }, [
    curentActiveSlot3[0],
    curentActiveSlot2[0],
    curentActiveSlot1[0],
    curentActiveSlot1[1],
    rememberOwned,
    requiredPetOneSlot1[0].loading,
    requiredPetOneSlot1[1].loading,
    requiredPetOneSlot2[0].loading,
    requiredPetOneSlot2[1].loading,
    requiredPetOneSlot3[0].loading,
  ]);

  function setOwnedPetsInArray(slotpet, number) {
    let slot1pet1Array = [...slotpet];

    for (var i = 0; i < slotpet[0].length; i++) {
      slot1pet1Array[0][i] = {
        ...slotpet[0][i],
        owned: checkOwnedPet(slotpet[0][i].id),
        loading: false,
      };
    }

    for (var i = 0; i < slotpet[1].length; i++) {
      slot1pet1Array[1][i] = {
        ...slotpet[1][i],
        owned: checkOwnedPet(slotpet[1][i].id),
        loading: false,
      };
    }

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
  function setFoundSomethingArray(curentActiveSlot, id, number) {
    console.log("test intra");
    let slot1pet1Array = [...curentActiveSlot];
    slot1pet1Array[number] = {
      ...curentActiveSlot[number],
      id: id,
      found: true,
      loading: false,
    };
    return slot1pet1Array;
  }

  function ActivePetSlot1() {
    let initialArray = [...curentActiveSlot1];
    console.log("treces,enter, active slot 1", initialArray);
    for (var i = 0; i < slot1pet1[0].length; i++) {
      console.log("treces", slot1pet1[0][i]);
      if (slot1pet1[0][i].owned && checkPetLevel25(slot1pet1[0][i].id)) {
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot1,
          slot1pet1[0][i],
          0
        );
        console.log("treces,enter, first IF slot 1", initialArray);
        break;
      }
      if (slot1pet1[0][i].owned && !initialArray[0].found) {
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot1,
          slot1pet1[0][i],
          0
        );
        console.log("treces,enter, second IF slot 1", initialArray);
      }
    }
    console.log("treces", initialArray);
    if (!initialArray[0].found) {
      console.log("treces");
      initialArray = setFoundNoneArray(curentActiveSlot1, 0);
    }
    console.log("testIDenter", initialArray);

    for (var j = 0; j < slot1pet1[1].length; j++) {
      if (slot1pet1[1][j].owned && checkPetLevel25(slot1pet1[1][j].id)) {
        initialArray = setCurentActivePetsInArray(
          initialArray,
          slot1pet1[1][j],
          1
        );

        console.log("testID", initialArray[1]);
        break;
      }
      if (slot1pet1[1][j].owned && !initialArray[j].found) {
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot1,
          slot1pet1[1][j],
          1
        );
        console.log("testID", initialArray[1]);
      }
    }
    if (!initialArray[1].found) {
      initialArray = setFoundNoneArray(initialArray, 1);
    }
    console.log("testID", initialArray[1]);

    setCurentActiveSlot1(
      setFoundSomethingArray(initialArray, initialArray[1].id, 1)
    );

    console.log("treces,EXIT, active slot 1", initialArray);
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

  function setCurentActivePetsInArray(curentActiveSlot, slotpet, number) {
    let slot1pet1Array = [...curentActiveSlot];
    console.log("trecesFunction", curentActiveSlot);
    slot1pet1Array[number] = {
      ...slot1pet1Array[number],
      id: slotpet.id,
      found: true,
      loading: false,
    };
    return slot1pet1Array;
  }

  function setPetsArray(curentActiveSlot, id, number) {
    let slot1pet1Array = curentActiveSlot;

    slot1pet1Array[number].id = id;
    slot1pet1Array[number].found = true;
    slot1pet1Array[number].loading = false;

    return slot1pet1Array;
  }

  function setFindNoneArray(curentActiveSlot, number) {
    let slot1pet1Array = curentActiveSlot;

    slot1pet1Array[number].id = null;
    slot1pet1Array[number].found = false;
    slot1pet1Array[number].loading = false;

    return slot1pet1Array;
  }

  function ActivePetSlot2() {
    let initialArray = [...curentActiveSlot2];
    console.log("treces,enter, active slot 2", initialArray);
    console.log("treces,enter, active slot 2", curentActiveSlot2);
    for (var i = 0; i < slot2pet1[0].length; i++) {
      if (slot2pet1[0][i].owned && checkPetLevel25(slot2pet1[0][i].id)) {
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot2,
          slot2pet1[0][i],
          0
        );

        break;
      }
      if (slot2pet1[0][i].owned && !initialArray[0].found) {
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot2,
          slot2pet1[0][i],
          0
        );
      }
    }
    if (!initialArray[0].found) {
      console.log("treces not found cica");
      initialArray = setFindNoneArray(curentActiveSlot2, 0);
    }
    console.log("trecesArray mid", initialArray);

    for (var i = 0; i < slot2pet1[1].length; i++) {
      if (slot2pet1[1][i].owned && checkPetLevel25(slot2pet1[1][i].id)) {
        console.log("trecesBEFORE", initialArray);
        initialArray = setPetsArray(initialArray, slot2pet1[1][i].id, 1);
        console.log("trecesAFTER", initialArray);
        console.log("trecesNewArray", initialArray);
        break;
      }
      if (slot2pet1[1][i].owned && !initialArray[1].found) {
        initialArray = setCurentActivePetsInArray(
          curentActiveSlot2,
          slot2pet1[1][i],
          1
        );
        console.log("testID", initialArray[1]);
      }
    }
    if (!initialArray[1].found) {
      initialArray = setFindNoneArray(initialArray, 1);
    }
    console.log("testID", initialArray[1]);

    setCurentActiveSlot2(setPetsArray(initialArray, initialArray[1].id, 1));

    console.log("treces activeslot2, array", initialArray);
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

  function getPetDetails() {
    let initialArraySlot1 = [...requiredPetOneSlot1];
    let initialArraySlot2 = [...requiredPetOneSlot2];
    console.log("details");
    if (curentActiveSlot1[0].id === slot1pet1[0][0].id) {
      console.log("details 1");
      singlePetInfo(slot1pet1[0][0]).then((res) => {
        initialArraySlot1 = setRequiredPetInArray(requiredPetOneSlot1, res, 0);
      });
    }
    if (curentActiveSlot2[0].id === slot2pet1[0][0].id) {
      console.log("details 1");
      singlePetInfo(slot2pet1[0][0]).then((res) => {
        initialArraySlot2 = setRequiredPetInArray(requiredPetOneSlot2, res, 0);
      });
    }
    if (curentActiveSlot2[0].id === slot2pet1[0][1].id) {
      console.log("details 1");
      singlePetInfo(slot2pet1[0][1]).then((res) => {
        initialArraySlot2 = setRequiredPetInArray(requiredPetOneSlot2, res, 0);
      });
    }
    if (curentActiveSlot2[0].id === null) {
      console.log("details 3");
      singlePetInfo(slot2pet1[0][0]).then((res) => {
        initialArraySlot2 = setRequiredPetInArray(requiredPetOneSlot2, res, 0);
      });
    }

    if (curentActiveSlot1[0].id === null) {
      console.log("details 3");

      singlePetInfo(slot1pet1[0][0]).then((res) => {
        initialArraySlot1 = setRequiredPetInArray(requiredPetOneSlot1, res, 0);
      });
    }

    if (curentActiveSlot1[1].id === slot1pet1[1][0].id) {
      singlePetInfo(slot1pet1[1][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(initialArraySlot1, res, 1)
        );
      });
    }
    if (curentActiveSlot1[1].id === null) {
      singlePetInfo(slot1pet1[1][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(initialArraySlot1, res, 1)
        );
      });
    }

    if (curentActiveSlot2[1].id === slot2pet1[1][0].id) {
      singlePetInfo(slot2pet1[1][0]).then((res) => {
        setRequiredPetOneSlot2(
          setRequiredPetInArray(initialArraySlot2, res, 1)
        );
      });
    }
    if (curentActiveSlot2[1].id === slot2pet1[1][1].id) {
      singlePetInfo(slot2pet1[1][1]).then((res) => {
        setRequiredPetOneSlot2(
          setRequiredPetInArray(initialArraySlot2, res, 1)
        );
      });
    }

    if (curentActiveSlot2[1].id === null) {
      singlePetInfo(slot2pet1[1][0]).then((res) => {
        setRequiredPetOneSlot2(
          setRequiredPetInArray(initialArraySlot2, res, 1)
        );
      });
    }
  }

  function getPetDetails2() {
    console.log("test merge");
    if (curentActiveSlot1[1].id === slot1pet1[1][0].id) {
      singlePetInfo(slot1pet1[1][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 1)
        );
      });
    }
    if (curentActiveSlot1[1].id === null) {
      singlePetInfo(slot1pet1[1][0]).then((res) => {
        setRequiredPetOneSlot1(
          setRequiredPetInArray(requiredPetOneSlot1, res, 1)
        );
      });
    }
  }

  function curentStrategy(slot1, slot2) {
    for (var i = 0; i < slot1[1].length; i++) {
      for (var j = 0; j < slot2[1].length; j++) {
        if (
          slot1[1][i].owned &&
          checkPetLevel25(slot1[1][i].id) &&
          slot2[1][i].owned &&
          checkPetLevel25(slot2[1][i].id)
        ) {
          console.log("setat str 1");
          return setCurentActiveStrategy(1);
        }
      }
    }
    for (var i = 0; i < slot1[0].length; i++) {
      for (var j = 0; j < slot2[0].length; j++) {
        if (
          slot1[0][i].owned &&
          checkPetLevel25(slot1[0][i].id) &&
          slot2[0][i].owned &&
          checkPetLevel25(slot2[0][i].id)
        ) {
          console.log("setat str 1");
          return setCurentActiveStrategy(0);
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
    <div className="addiusWQGuide">
      <h1>Addius Pet Battle Guide</h1>
      <h2>Revendreth (Shadowlands)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerAddiusWQ">
        <div className="FightRequirements">
          {curentActiveStrategy === 0 && (
            <button
              className="stratAviable"
              onClick={() => {
                setCurentActiveStrategy(1);
              }}
            >
              <FontAwesomeIcon icon={faSyncAlt} /> Strategy 2 Available for your
              Collection.
            </button>
          )}
          {curentActiveStrategy === 1 && (
            <button
              className="stratAviable"
              onClick={() => {
                setCurentActiveStrategy(0);
              }}
            >
              <FontAwesomeIcon icon={faSyncAlt} /> Strategy 1 Available for your
              Collection.
            </button>
          )}
          {console.log("test req1", requiredPetOneSlot1[1])}
          {console.log("test curent1", curentActiveSlot1[1])}
          {console.log("test slot1", slot1pet1[1])}
          {console.log("test req2", requiredPetOneSlot2[1])}
          {console.log("test curent2", curentActiveSlot2[1])}
          {console.log("test slot2", slot2pet1[1])}
          {curentActiveStrategy}
          {curentActiveStrategy === 0 && (
            <ul>
              {!requiredPetOneSlot1[1].loading && requiredPetOneSlot1[1].pets
                ? curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                    <Pet
                      pet={requiredPetOneSlot1[1]}
                      petOwned={slot1pet1[1][0]}
                    />
                  )
                : ""}
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
                ? curentActiveSlot1[1].id === slot1pet1[1][0].id && (
                    <Pet
                      pet={requiredPetOneSlot1[1]}
                      petOwned={slot1pet1[1][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot1[1].loading && requiredPetOneSlot1[1].pets
                ? curentActiveSlot1[1].id === null && (
                    <Pet
                      pet={requiredPetOneSlot1[1]}
                      petOwned={slot1pet1[1][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[1].loading && requiredPetOneSlot2[1].pets
                ? curentActiveSlot2[1].id === slot2pet1[1][0].id && (
                    <Pet
                      pet={requiredPetOneSlot2[1]}
                      petOwned={slot2pet1[1][0]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[1].loading && requiredPetOneSlot2[1].pets
                ? curentActiveSlot2[1].id === slot2pet1[1][1].id && (
                    <Pet
                      pet={requiredPetOneSlot2[1]}
                      petOwned={slot2pet1[1][1]}
                    />
                  )
                : ""}
              {!requiredPetOneSlot2[1].loading && requiredPetOneSlot2[1].pets
                ? curentActiveSlot2[1].id === null && (
                    <Pet
                      pet={requiredPetOneSlot2[1]}
                      petOwned={slot2pet1[1][0]}
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
                    Start with <span>Make it Rain</span>. Then choose effect 1.
                  </p>
                ) : (
                  <p>
                    Start with <span>Make it Rain</span>. Then choose effect 1.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 2</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Cast <span>Inflation</span> ability.
                  </p>
                ) : (
                  <p>
                    Cast <span>Inflation</span> ability.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 5 </p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    Use <span>Make it Rain</span> again.
                  </p>
                ) : (
                  <p>
                    Use <span>Make it Rain</span> again.
                  </p>
                )}
              </div>
              <div className="turn">
                {" "}
                <p>Turn 6</p>
                {curentActiveSlot1[0].id === slot1pet1[0][0].id ? (
                  <p>
                    <span className="hero">
                      {requiredPetOneSlot1[0].pets.name}
                    </span>{" "}
                    dies. Bring in{" "}
                    <span className="hero">
                      {" "}
                      {requiredPetOneSlot2[0].pets.name}{" "}
                    </span>{" "}
                    and finish him off with any ability.
                  </p>
                ) : (
                  <p>
                    <span className="hero"></span> dies. Bring in{" "}
                    <span className="hero"> </span>
                    and finish him off with any ability.
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
    </div>
  );
}

export default Addius;
