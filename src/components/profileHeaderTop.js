import "../scss/style.css";
import Nav from "./router/nav.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { retriveMediaProfile, searchChar } from "./actions";

function ProfileImage() {
  const profile = useSelector((state) => state.profile);
  const favChar = JSON.parse(localStorage.getItem("favChar"));
  const searchedChar = useSelector((state) => state.foundChar);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div>
      {profile.profile && !profile.loading ? (
        <div>
          <div className="profile">
            <img src={profile.profile.assets[0].value} alt="noProfileImg"></img>
            <img
              src={profile.profile.assets[1].value}
              alt="noProfileImg"
              className="hoverProfile"
            ></img>
            <div>
              {profile.profile.character.name} -{" "}
              <h2>{profile.profile.character.realm.slug}</h2>
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
