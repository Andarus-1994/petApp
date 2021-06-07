import { useEffect, useState } from "react";

function SearchPet(props) {
  const [filter, setFilterName] = useState("");
  useEffect(() => {}, [props.allPets.loading]);
  return (
    <div className="allPetIcons">
      <input
        onChange={(e) => {
          setFilterName(e.target.value);
        }}
        placeholder="Search Pet"
      ></input>
      <div>
        <p
          className="anypet"
          onClick={() => {
            props.setPet(0, null, null, null, null);
          }}
        >
          Any Pet
        </p>
        {!props.allPets.loading &&
          props.allPets.pets
            .filter((petFind) =>
              petFind.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((pet) => (
              <div key={pet.id}>
                <img
                  onClick={() => {
                    props.setPet(
                      pet.id,
                      pet.name,
                      pet.battle_pet_type.type,
                      pet.abilities,
                      pet.icon
                    );
                  }}
                  src={pet.icon}
                  alt="noIcon"
                ></img>
                <p>{pet.name}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default SearchPet;
