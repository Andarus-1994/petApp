import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petInfo2, petsInfo } from "../functions/serverFunctions.js";

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
    /*const idPets = [];
    petInfo2().then((res) => {
      res.pets.map((res2) => {
        idPets.push({ id: res2.id });
      });

      petsInfo(idPets, idPets.length).then((res3) => {
        res3.map((res4) => {
          if (res4.creature.name === "Fragment of Anger")
            console.log("chro " + res4.id);
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
              <img src={pet.icon}></img> <span>{pet.name} </span>
            </li>
          ))
        ) : (
          <div className="spinnerPets-1"></div>
        )}
      </ul>
    </div>
  );
}

export default DefaultLevelGuide;
