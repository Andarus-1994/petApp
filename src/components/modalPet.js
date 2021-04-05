import "../scss/style.css";
import { petAbility } from "./functions/serverFunctions.js";
import { useEffect, useState } from "react";

function ModalPet({ pet, closeModal }) {
  const [petAbilities, setPetAbilities] = useState([]);
  const [loadAbilities, setLoadAbilities] = useState(true);
  console.log(pet);
  useEffect(() => {
    if (petAbilities.length < 6) {
      console.log("intra");

      petAbility(pet.abilities[petAbilities.length]).then((resp) => {
        setPetAbilities([...petAbilities, resp.assets[0].value]);
      });
      if (petAbilities.length === 5) setLoadAbilities(false);
    }
    console.log(petAbilities);
  }, [petAbilities]);
  return (
    <div>
      <div className="behindModal" onClick={closeModal}></div>
      <div className="modalPet">
        <div className="icon">
          <img src={pet.icon}></img>
        </div>
        <h1>{pet.creature.name}</h1>
        <h2> {pet.battle_pet_type.name}</h2>
        <p>"{pet.description}"</p>
        <ul>
          {!loadAbilities
            ? petAbilities.map((ability, index) => (
                <li key={index}>
                  <img src={ability}></img>
                  <h2>{pet.abilities[index].ability.name}</h2>
                </li>
              ))
            : ""}
        </ul>
        <p className="trade">{pet.is_tradable ? "Non-tradable" : "Tradable"}</p>
        <p className="type">{pet.source.type}</p>
        <p className="source">{pet.source.name}</p>
      </div>
    </div>
  );
}

export default ModalPet;
