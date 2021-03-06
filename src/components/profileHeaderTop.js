import "../scss/style.css";

import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { petInfo2 } from "./functions/serverFunctions.js";

function ProfileImage() {
    const profile = useSelector((state) => state.profile);
    const petsChar = useSelector((state) => state.pets);
    const [totalPets, setTotalPets] = useState(0);
    const [ownedUniquePets, setOwnedUniquePets] = useState(0);
    useMemo(() => {
        if (!profile.error) {
            petInfo2().then((res) => {
                setTotalPets(res.pets.length);
            });

            let noDuplicates = [];
            if (!petsChar.loading && !petsChar.error && petsChar.pets.pets)
                noDuplicates = petsChar.pets.pets.filter((ele, ind) => ind === petsChar.pets.pets.findIndex((elem) => elem.species.id === ele.species.id));
            setOwnedUniquePets(noDuplicates.length);
        }
    }, [petsChar]);

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    return (
        <div>
            <div className="emptyBarTotalPets">
                <div
                    className={percentage(ownedUniquePets, totalPets).toFixed(2) > 50 ? "fillBarOwnedPets" : "fillBarOwnedPetsYellow"}
                    style={{
                        width: (percentage(ownedUniquePets, totalPets).toFixed(2) * 120) / 100 + "px",
                    }}
                >
                    <h3 className={percentage(ownedUniquePets, totalPets).toFixed(2) > 50 ? "" : "yellowText"}> {percentage(ownedUniquePets, totalPets).toFixed(2)} %</h3>
                </div>
                <p>{ownedUniquePets + "/" + totalPets} Unique Pets</p>
            </div>
            {!profile.error && profile.profile && !profile.loading ? (
                <div>
                    <div className="profile">
                        <img src={profile.profile.assets ? profile.profile.assets[0].value : profile.profile.avatar_url} alt="noProfileImg"></img>
                        <img src={profile.profile.assets ? profile.profile.assets[1].value : profile.profile.bust_url} alt="noProfileImg" className="hoverProfile"></img>
                        <div>
                            {profile.profile.character.name} - <h2>{profile.profile.character.realm.slug}</h2>
                        </div>
                    </div>
                </div>
            ) : profile.loading ? (
                <div className="spinnerProfile-1"></div>
            ) : (
                <div className="noFavorite"> No Favorite</div>
            )}
        </div>
    );
}

export default ProfileImage;
