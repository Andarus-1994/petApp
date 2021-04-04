import "../scss/style.css";

import { useEffect, useState } from "react";

function ModalPet({ pet, closeModal }) {
  const [search, setSearch] = useState("");
  console.log(pet);
  useEffect(() => {});
  return (
    <div>
      <div className="behindModal" onClick={closeModal}></div>
      <div className="modalPet">
        <div className="icon">
          <img src={pet.icon}></img>
        </div>
        <h1>{pet.creature.name}</h1>
        <h2> {pet.battle_pet_type.name}</h2>
        <p>{pet.description}</p>
        <p className="type">{pet.source.type}</p>
        <p className="source">{pet.source.name}</p>
      </div>
    </div>
  );
}

export default ModalPet;
