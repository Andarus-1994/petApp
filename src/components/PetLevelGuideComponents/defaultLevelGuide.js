import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petInfo2, petsInfo } from "../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faDragon } from "@fortawesome/free-solid-svg-icons";

function DefaultLevelGuide() {
  const petsChar = useSelector((state) => state.pets);
  const [idRequiredPets, setIdRequiredPets] = useState([
    { id: 844 },
    { id: 1387 },
    { id: 1672 },
    { id: 1531 },
    { id: 1233 },
    { id: 1238 },
    { id: 1351 },
    { id: 2833 },
    { id: 1155 },
    { id: 200 },
    { id: 72 },
    { id: 137 },
    { id: 479 },
    { id: 1167 },
    { id: 1152 },
    { id: 1165 },
    { id: 1721 },
  ]);
  const [requiredPets, setRequiredPets] = useState({ pets: [], loading: true });

  useEffect(() => {
    if (requiredPets.pets.length === 0) {
      getPets();
    }
    console.log(petsChar.pets);
  }, [idRequiredPets]);

  useMemo(() => {
    /*
    const idPets = [];
    petInfo2().then((res) => {
      res.pets.map((res2) => {
        idPets.push({ id: res2.id });
      });

      petsInfo(idPets, idPets.length).then((res3) => {
        res3.map((res4) => {
          if (res4.creature.name === "Chrominius")
            console.log("chromi " + res4.id);
          if (res4.creature.name === "Thunderscale Whelpling")
            console.log("thunder " + res4.id);
        });
      });
    });
    */
  }, []);

  function getPets() {
    petsInfo(idRequiredPets, idRequiredPets.length).then((res) => {
      setRequiredPets({
        pets: res,
        loading: false,
      });
    });
  }

  function checkOwnedPet(id) {
    if (petsChar.pets.pets.find((pet) => isPet(pet, id))) return true;
    else return false;
  }
  function isPet(pet, id) {
    return pet.species.id === id;
  }

  return (
    <div className="defaultLevelGuide">
      <h1>Leveling Pets Guide</h1>
      <h2>Choose a guide to follow up from the menu on the left!</h2>
      <p>
        The most effective way to level pets is via Pet Trainers because they
        grant 4-6 times more XP than an usual wild pet. Sadly most of them are
        having a daily lockout, being doable once per day, that's why I suggest
        you leaving one of your alts in the desired spot of each pet masters.
      </p>
      <h3>Pets Required for the Fights</h3>
      <p>
        "The pets I recommended for the fights are taken from your collection.
        Usually there are 1-3 pets suggested for each slot and just the best is
        displayed (from the ones you own)."
      </p>

      <ul>
        {!requiredPets.loading ? (
          requiredPets.pets.map((pet, index) => (
            <li key={index} className="defaultPet">
              <img src={pet.icon}></img>{" "}
              <span className={checkOwnedPet(pet.id) ? "owned" : "notOwned"}>
                {pet.name}{" "}
              </span>
              {checkOwnedPet(pet.id) ? (
                <FontAwesomeIcon className="owned" icon={faCheck} />
              ) : (
                <FontAwesomeIcon className="notOwned" icon={faTimes} />
              )}
              <div className="source">{pet.source.name}</div>
            </li>
          ))
        ) : (
          <div className="spinnerPets-1"></div>
        )}

        <FontAwesomeIcon className="cogBackground" icon={faDragon} />
      </ul>
    </div>
  );
}

export default DefaultLevelGuide;
