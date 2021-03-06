import axios from "axios";

export const login = async (userDetails) => {
  const userToken = localStorage.getItem("userToken");
  if (userToken) {
    return await axios
      .post(
        "https://apipetslaravel.herokuapp.com/api/loginUser",
        userDetails,

        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: userToken,
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
  }

  return await axios
    .post(
      "https://apipetslaravel.herokuapp.com/api/loginUser",
      userDetails,

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

export const registerUser = async (userDetails) => {
  return await axios
    .post(
      "https://apipetslaravel.herokuapp.com/api/createUser",
      userDetails,

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

export const validateUser = async (token) => {
  return await axios
    .post(
      "https://apipetslaravel.herokuapp.com/api/validateUser",
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
