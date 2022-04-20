import axios from "axios";

const clientID = process.env.REACT_APP_clientID;
const clientSecret = process.env.REACT_APP_clientSecret;

var formData = new FormData();

formData.append("grant_type", "client_credentials");
formData.append("redirect_uri", "http://localhost:3000/");
formData.append("scope", "wow.profile public");
formData.append("response_type", "code");
export const retriveToken = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_TOKEN_REQUEST",
    });
    axios
      .post("https://oauth.battle.net/token", formData, {
        auth: {
          username: clientID,
          password: clientSecret,
        },
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((response) => {
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
          const charMedia = response.data;

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
        const pets = response.data;

        dispatch({ type: "FETCH_PETS_SUCCESS", payload: pets });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_PETS_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const getAllPets = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_ALL_PETS_REQUEST",
    });
    axios
      .get("https://apipetslaravel.herokuapp.com/api/getAllPets", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((response) => {
        const pets = response.data;

        dispatch({ type: "FETCH_ALL_PETS_SUCCESS", payload: pets });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ALL_PETS_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const loginAction = (loginAnswer) => {
  return {
    type: "LOGIN",
    payload: loginAnswer,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
