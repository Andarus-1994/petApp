import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singlePetInfo, petAbility } from "../functions/serverFunctions.js";
import Pet from "./pet.js";
import location3 from "../../assets/Gargra/gargraFrostFireRidge.jpg";
import location from "../../assets/Gargra/gargraDraenorMap.jpg";
import location2 from "../../assets/Gargra/gargraFrostFireMap.jpg";

function FrostFireRidge() {
  const petsChar = useSelector((state) => state.pets);
  const [pet, setPet] = useState({
    id: 1387,
    owned: false,
    abilities: { 1: 0, 2: 4, 3: 5 },
  });
  const [slot3pet2, setslot3pet2] = useState({
    id: 1672,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 5 },
  });

  const [slot3pet3, setslot3pet3] = useState({
    id: 1531,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 5 },
  });
  const [slot3pet4, setslot3pet4] = useState({
    id: 1233,
    owned: false,
    abilities: { 1: 0, 2: 1, 3: 5 },
  });
  const [curentActiveSlot3, setCurentActiveSlot3] = useState(1672);

  const [requiredPetOne, setRequiredPetOne] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetTwoSlot3, setRequiredPetTwoSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetThreeSlot3, setRequiredPetThreeSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });
  const [requiredPetFourSlot3, setRequiredPetFourSlot3] = useState({
    pets: {},
    petAbilities: [],
    loading: true,
  });

  useEffect(() => {
    if (requiredPetOne.loading && requiredPetTwoSlot3.loading) getPetDetails();

    setPet({
      id: 1387,
      abilities: { 1: 0, 2: 4, 3: 5 },
      owned: checkOwnedPet(pet.id),
    });
    setslot3pet2({
      id: 1672,
      abilities: { 1: 0, 2: 1, 3: 5 },
      owned: checkOwnedPet(slot3pet2.id),
    });
    setslot3pet3({
      id: 1531,
      abilities: { 1: 0, 2: 1, 3: 5 },
      owned: checkOwnedPet(slot3pet3.id),
    });
    setslot3pet4({
      id: 1233,
      abilities: { 1: 0, 2: 1, 3: 5 },
      owned: checkOwnedPet(slot3pet4.id),
    });

    if (requiredPetOne.petAbilities.length < 6 && !requiredPetOne.loading) {
      petAbility(
        requiredPetOne.pets.abilities[requiredPetOne.petAbilities.length]
      ).then((resp) => {
        if (!resp.error)
          setRequiredPetOne({
            ...requiredPetOne,
            petAbilities: [
              ...requiredPetOne.petAbilities,
              resp.assets[0].value,
            ],
          });
      });
    }

    if (
      requiredPetTwoSlot3.petAbilities.length < 6 &&
      !requiredPetTwoSlot3.loading &&
      curentActiveSlot3 === slot3pet2.id
    ) {
      petAbility(
        requiredPetTwoSlot3.pets.abilities[
          requiredPetTwoSlot3.petAbilities.length
        ]
      ).then((resp) => {
        if (!resp.error)
          setRequiredPetTwoSlot3({
            ...requiredPetTwoSlot3,
            petAbilities: [
              ...requiredPetTwoSlot3.petAbilities,
              resp.assets[0].value,
            ],
          });
      });
    }

    if (
      requiredPetThreeSlot3.petAbilities.length < 6 &&
      !requiredPetThreeSlot3.loading &&
      curentActiveSlot3 === slot3pet3.id
    ) {
      petAbility(
        requiredPetThreeSlot3.pets.abilities[
          requiredPetThreeSlot3.petAbilities.length
        ]
      ).then((resp) => {
        if (!resp.error)
          setRequiredPetThreeSlot3({
            ...requiredPetThreeSlot3,
            petAbilities: [
              ...requiredPetThreeSlot3.petAbilities,
              resp.assets[0].value,
            ],
          });
      });
    }
    if (
      requiredPetFourSlot3.petAbilities.length < 6 &&
      !requiredPetFourSlot3.loading &&
      curentActiveSlot3 === slot3pet4.id
    ) {
      petAbility(
        requiredPetFourSlot3.pets.abilities[
          requiredPetFourSlot3.petAbilities.length
        ]
      ).then((resp) => {
        if (!resp.error)
          setRequiredPetFourSlot3({
            ...requiredPetFourSlot3,
            petAbilities: [
              ...requiredPetFourSlot3.petAbilities,
              resp.assets[0].value,
            ],
          });
      });
    }
    if (
      curentActiveSlot3 === "1672" &&
      !slot3pet2.owned &&
      (slot3pet3.owned || slot3pet4.owned)
    )
      ActivePetSlot3();
  }, [
    petsChar,
    requiredPetOne.petAbilities,
    requiredPetTwoSlot3.petAbilities,
    requiredPetThreeSlot3.petAbilities,
    requiredPetFourSlot3.petAbilities,
    curentActiveSlot3,
  ]);

  function ActivePetSlot3() {
    const array = [slot3pet2.id, slot3pet3.id, slot3pet4.id];
    if (slot3pet2.owned) return setCurentActiveSlot3(slot3pet2.id);
    if (slot3pet3.owned) return setCurentActiveSlot3(slot3pet3.id);
    if (slot3pet4.owned) return setCurentActiveSlot3(slot3pet4.id);

    const randomElement = array[Math.floor(Math.random() * array.length)];
    return setCurentActiveSlot3(randomElement);
  }

  function getPetDetails() {
    singlePetInfo(pet).then((res) => {
      setRequiredPetOne({ pets: res, petAbilities: [], loading: false });
    });
    if (curentActiveSlot3 === slot3pet2.id) {
      singlePetInfo(slot3pet2).then((res) => {
        setRequiredPetTwoSlot3({ pets: res, petAbilities: [], loading: false });
      });
    }
    if (curentActiveSlot3 === slot3pet3.id) {
      singlePetInfo(slot3pet3).then((res) => {
        setRequiredPetThreeSlot3({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }
    if (curentActiveSlot3 === slot3pet4.id) {
      singlePetInfo(slot3pet4).then((res) => {
        setRequiredPetFourSlot3({
          pets: res,
          petAbilities: [],
          loading: false,
        });
      });
    }
  }

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  return (
    <div className="frostFireDraenorLevelGuide">
      <h1>Gargra Pet Battle Guide</h1>
      <h2>FrostFire Ridge (Draenor)</h2>
      <div className="difficulty">
        <div className="greenDifficulty"></div>
        <p>Difficulty level:</p>
      </div>
      <div className="containerFrostFireRidgeLevel">
        <div className="FightRequirements">
          <ul>
            {!requiredPetOne.loading && requiredPetOne.pets ? (
              <Pet
                pet={requiredPetOne}
                idPet={pet.id}
                ownedPet={pet.owned}
                abilities={pet.abilities}
              />
            ) : (
              ""
            )}
            <li className={"anyPet"}>
              <div className="iconPet">
                <img className="noImg" alt="?"></img>
              </div>
              <p>Any Pet</p>
              <p>No Stats Required</p>
              <p className="level">Any level </p>
            </li>
            {!requiredPetTwoSlot3.loading && requiredPetTwoSlot3.pets
              ? curentActiveSlot3 === slot3pet2.id && (
                  <Pet
                    pet={requiredPetTwoSlot3}
                    idPet={slot3pet2.id}
                    ownedPet={slot3pet2.owned}
                    abilities={slot3pet2.abilities}
                  />
                )
              : ""}
            {!requiredPetThreeSlot3.loading && requiredPetThreeSlot3.pets
              ? curentActiveSlot3 === slot3pet3.id && (
                  <Pet
                    pet={requiredPetThreeSlot3}
                    idPet={slot3pet3.id}
                    ownedPet={slot3pet3.owned}
                    abilities={slot3pet3.abilities}
                  />
                )
              : ""}
            {!requiredPetFourSlot3.loading && requiredPetFourSlot3.pets
              ? curentActiveSlot3 === slot3pet4.id && (
                  <Pet
                    pet={requiredPetFourSlot3}
                    idPet={slot3pet4.id}
                    ownedPet={slot3pet4.owned}
                    abilities={slot3pet4.abilities}
                  />
                )
              : ""}
          </ul>
          <div className="FightInstructions">
            <h1>Fight Instructions</h1>
            <div className="turn">
              {" "}
              <p>Turn 1</p>
              <p>
                Use <span>Toxic Smoke</span> ability.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 2 </p>
              <p>
                Use <span>Wind Up</span>
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 3</p>
              <p>
                Use <span>Toxic Smoke</span> again and first pet will die.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 4</p>
              <p>
                Second pet joins the fight. Use <span>Wind Up</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 5</p>
              <p>
                Use <span>Toxic Smoke</span> if isn't dead already.
                <div className="important">
                  (It has 30% chance to dodge, so if he does just restart the
                  fight)
                </div>
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 6</p>
              <p>
                Third pet comes in. Use <span>Explode</span>.
              </p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 7</p>
              <p>Swap in the leveling pet then swap it back out again.</p>
            </div>
            <div className="turn">
              {" "}
              <p>Turn 8+</p>
              <p>
                <span>Metal Fist</span> until last pet dies.
              </p>
            </div>
          </div>
        </div>
        <div className="locationImages">
          <h1>Localization: </h1>
          <a href={location} target="_blank">
            {" "}
            <img src={location} alt="noImg"></img>
          </a>

          <a href={location2} target="_blank">
            {" "}
            <img src={location2} alt="noImg"></img>
          </a>
          <a href={location3} target="_blank">
            {" "}
            <img src={location3} alt="noImg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrostFireRidge;
