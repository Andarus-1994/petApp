import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petInfo2, petsInfo } from "../../functions/serverFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faDragon } from "@fortawesome/free-solid-svg-icons";

function BastionDefault() {
  const petsChar = useSelector((state) => state.pets);
  const [idRequiredPets, setIdRequiredPets] = useState([
    { id: 3009 },
    { id: 1532 },
    { id: 1178 },
    { id: 1167 },
    { id: 1349 },
  ]);

  const [idAlternativePets, setidAlternativePets] = useState([
    { id: 1387 },
    { id: 2165 },
    { id: 1567 },
    { id: 1725 },
  ]);

  const [requiredPets, setRequiredPets] = useState({ pets: [], loading: true });
  const [alternativePets, setAlternativePets] = useState({
    pets: [],
    loading: true,
  });

  useEffect(() => {
    if (requiredPets.pets.length === 0) {
      getPets();
    }
    console.log(petsChar.pets);
  }, [idRequiredPets]);

  function getPets() {
    petsInfo(idRequiredPets, idRequiredPets.length).then((res) => {
      setRequiredPets({
        pets: res,
        loading: false,
      });
    });
    petsInfo(idAlternativePets, idAlternativePets.length).then((res) => {
      setAlternativePets({
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
    <div className="bastionDefault">
      <h1>Bastion Pet World Quests Guides</h1>
      <h2>Choose a guide to follow up from the menu on the left!</h2>
      <p>
        Bastion, realm of Kyrians and location of four of the Pet Battle World
        Quests that exists in Shadowlands. Most of the fights are somehow
        difficult, but with the ideal pet-team and my guides you will pass
        through it pretty easy.
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
            </li>
          ))
        ) : (
          <div className="spinnerPets-1"></div>
        )}

        <FontAwesomeIcon className="cogBackground" icon={faDragon} />
      </ul>
      <h3>Alternative Pets</h3>
      <ul>
        {!alternativePets.loading ? (
          alternativePets.pets.map((pet, index) => (
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
            </li>
          ))
        ) : (
          <div className="spinnerPets-1"></div>
        )}

        <FontAwesomeIcon className="cogBackground" icon={faDragon} />
      </ul>
      <p>Side Note: Some of the pets are included in multiple fights.</p>
    </div>
  );
}

export default BastionDefault;
