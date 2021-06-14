import axios from "axios";

export const strategySubmission = async (petsInstructions) => {
  return console.log(petsInstructions);
  await axios
    .post(
      "adress",
      petsInstructions,

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
