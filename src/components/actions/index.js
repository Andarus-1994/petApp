import axios from "axios";
/*const token = "EUaqHPkRrZ9xEnxvd2iVKSjT649wt2lYY2"; */
const clientID = "f684f07f82ac41aaabafaa42fa9a067f";
const clientSecret = "eUE5pg86dF2V0vz1iubJv84ecWMNDTNd";

var formData = new FormData();

formData.append("grant_type", "client_credentials");
formData.append("redirect_uri", "http://localhost:3000/");
formData.append("scope", "wow.profile");
formData.append("client_id", clientID);

export const retriveToken = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_TOKEN_REQUEST",
    });
    axios
      .post("https://eu.battle.net/oauth/token", formData, {
        auth: {
          username: clientID,
          password: clientSecret,
        },
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((response) => {
        console.log("merge post");
        const token = response.data;
        localStorage.removeItem("token");
        localStorage.setItem("token", token.access_token);

        dispatch({ type: "FETCH_TOKEN_SUCCESS", payload: token });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_TOKEN_FAILURE", payload: error.message });
      });
  };
};

export const retriveMediaProfile = (character) => {
  const token = localStorage.getItem("token");

  return (dispatch) => {
    console.log(character.char);
    if (character.char === "") {
      dispatch({
        type: "FETCH_PROFILE_MEDIA_FAILURE",
        payload: "noFavorite",
      });
    } else {
      dispatch({
        type: "FETCH_PROFILE_MEDIA_REQUEST",
      });
      axios
        .get(
          "https://" +
            character.region.toLowerCase() +
            ".api.blizzard.com/profile/wow/character/" +
            character.server.toLowerCase() +
            "/" +
            character.char.toLowerCase() +
            "/character-media?namespace=profile-" +
            character.region.toLowerCase() +
            "&locale=en_" +
            character.region.toUpperCase() +
            "&access_token=" +
            token,
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("merge post");
          const charMedia = response.data;
          console.log(charMedia);
          dispatch({ type: "FETCH_PROFILE_MEDIA_SUCCESS", payload: charMedia });
        })
        .catch((error) => {
          dispatch({
            type: "FETCH_PROFILE_MEDIA_FAILURE",
            payload: error.message,
          });
        });
    }
  };
};

export const searchChar = (character) => {
  console.log(character);
  return {
    type: "SEARCH_CHAR",
    payload: character,
  };
};

export const getPetsCharacter = (character) => {
  const token = localStorage.getItem("token");

  return (dispatch) => {
    console.log(character.char);

    dispatch({
      type: "FETCH_PETS_REQUEST",
    });
    axios
      .get(
        "https://" +
          character.region.toLowerCase() +
          ".api.blizzard.com/profile/wow/character/" +
          character.server +
          "/" +
          character.char.toLowerCase() +
          "/collections/pets?namespace=profile-" +
          character.region.toLowerCase() +
          "&locale=en_" +
          character.region +
          "&access_token=" +
          token,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("merge post");
        const pets = response.data;
        console.log(pets);
        dispatch({ type: "FETCH_PETS_SUCCESS", payload: pets });
      })
      .catch((error) => {
        console.log("error");
        dispatch({
          type: "FETCH_PETS_FAILURE",
          payload: error.message,
        });
      });
  };
};
