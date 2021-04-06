import axios from "axios";
/*const token = "EUaqHPkRrZ9xEnxvd2iVKSjT649wt2lYY2"; */
const clientID = "f684f07f82ac41aaabafaa42fa9a067f";
const clientSecret = "eUE5pg86dF2V0vz1iubJv84ecWMNDTNd";

var formData = new FormData();

formData.append("grant_type", "client_credentials");
formData.append("redirect_uri", "http://localhost:3000/");
formData.append("scope", "wow.profile");
formData.append("client_id", clientID);

export const retriveToken = async () => {
  return await axios
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
      localStorage.removeItem("token");
      localStorage.setItem("token", response.data.access_token);
      console.log(response.data.access_token);

      return response.data;
    })

    .catch((error) => {
      return { error: error.message };
    });
};

export const servers = async () => {
  const token = localStorage.getItem("token");
  return await axios
    .get(
      "https://eu.api.blizzard.com/data/wow/connected-realm/1080?namespace=dynamic-eu&locale=en_EU&access_token=" +
        token,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    })

    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
};

export const profileChar = async (character) => {
  console.log(character);
  const token = localStorage.getItem("token");
  return await axios
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
      console.log(response.data);
      return response.data;
    })

    .catch((error) => {
      console.log("aici");
      console.log(error.message);
      return { error: error.message };
    });
};

export const retriveProfileChar = async (character, idChar, idServer) => {
  const token = localStorage.getItem("token");
  return await axios
    .get(
      "https://eu.api.blizzard.com/profile/user/wow/protected-character/" +
        idChar +
        "-" +
        idServer +
        "?namespace=profile-" +
        character.region.toLowerCase() +
        "&locale=en_" +
        character.region +
        "&access_token=" +
        token,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })

    .catch((error) => {
      console.log("aici");
      console.log(error.message);
      return { error: error.message };
    });
};

export const auth = async (character) => {
  console.log(character);
  const token = localStorage.getItem("token");
  return await axios
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
          /* Authorization: "Basic " + Buffer.from("user:pass").toString("base64"),
          user: `${clientID}:${clientSecret}`, */
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })

    .catch((error) => {
      console.log("aici");
      console.log(error.message);
      return { error: error.message };
    });
};

export const imgPet = async (pet) => {
  const token = localStorage.getItem("token");
  console.log("aici");
  console.log(pet);
  const petImages = [];
  for (var i = 0; i < 50; i++) {
    var idPet = pet[i].species.id;

    console.log("idPet" + idPet);
    await axios
      .get(
        "https://eu.api.blizzard.com/data/wow/media/pet/" +
          idPet +
          "?namespace=static-9.0.5_37760-eu&access_token=" +
          token,

        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        petImages.push(response.data);
        return response.data;
      })

      .catch((error) => {
        return error;
      });
  }
  return petImages;
};

export const petInfo = async (pet, page) => {
  const token = localStorage.getItem("token");
  console.log("aici");

  const petDetails = [];

  for (var i = page; i < page + 10; i++) {
    if (pet[i]) {
      var idPet = pet[i].species.id;
      console.log(i);
      console.log("idPet" + idPet);
      await axios
        .get(
          "https://eu.api.blizzard.com/data/wow/pet/" +
            idPet +
            "?namespace=static-eu&locale=en_US&access_token=" +
            token,

          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          petDetails.push(response.data);
          return response.data;
        })

        .catch((error) => {
          return error;
        });
    }
  }
  return petDetails;
};

export const petInfo2 = async () => {
  const token = localStorage.getItem("token");
  return await axios
    .get(
      "https://eu.api.blizzard.com/data/wow/pet/142?namespace=static-eu&locale=en_EU&access_token=" +
        token,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })

    .catch((error) => {
      return error;
    });
};

export const petAbility = async (ability) => {
  const token = localStorage.getItem("token");
  console.log(ability);
  return await axios
    .get(
      "https://eu.api.blizzard.com/data/wow/media/pet-ability/" +
        ability.ability.id +
        "?namespace=static-9.0.5_37760-eu&access_token=" +
        token,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })

    .catch((error) => {
      return { error: error };
    });
};
