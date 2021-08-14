import { useEffect, useState } from "react";
import axios from "axios";
function SearchPet(props) {
    const [requestObject, setRequestObject] = useState({
        allPets: [],
        petName: "",
        page: 0,
    });
    const [searchedPet, setSearchedPet] = useState({ loading: true, data: [] });

    useEffect(() => {
        if (!props.allPets.loading && requestObject.allPets.length === 0)
            setRequestObject({
                ...requestObject,
                allPets: props.allPets.pets,
            });
        if (requestObject.allPets.length > 0) {
            getSearchedPetsFromDB();
        }
        console.log(requestObject);
    }, [requestObject.allPets, requestObject.petName, props.allPets.loading]);

    async function getSearchedPetsFromDB() {
        return await axios
            .post(
                "https://apipetslaravel.herokuapp.com/api/getSearchedPet",
                requestObject,
                {
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                return setSearchedPet({
                    loading: false,
                    data: response.data.data,
                });
            })

            .catch((error) => {
                console.log(error.data);
                return error;
            });
    }

    return (
        <div className="allPetIcons">
            <input
                onChange={(e) => {
                    setRequestObject({
                        ...requestObject,
                        petName: e.target.value,
                    });
                }}
                placeholder="Search Pet"
            ></input>
            <div>
                <div className="buttons">
                    <p
                        className="anypet"
                        onClick={() => {
                            props.setPet(0, null, null, null, null);
                        }}
                    >
                        Any Pet
                    </p>
                    <p
                        className="anypet"
                        onClick={() => {
                            props.setModal(false);
                        }}
                    >
                        Done
                    </p>
                </div>
                <div className="allPets">
                    {!searchedPet.loading ? (
                        searchedPet.data.map((pet) => (
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
                        ))
                    ) : (
                        <h5 style={{ textAlign: "center" }}>Loading</h5>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchPet;
