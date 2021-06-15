import axios from "axios";

export const strategySubmission = async (petsInstructions) => {
  return await axios
    .post(
      "https://apipetslaravel.herokuapp.com/api/addStrategy",
      petsInstructions,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response;
    })

    .catch((error) => {
      return { error: error };
    });
};

export const getStrategy = async (location) => {
  return await axios
    .post(
      "https://apipetslaravel.herokuapp.com/api/getStrategy",
      location,

      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response;
    })

    .catch((error) => {
      return { error: error };
    });
};
