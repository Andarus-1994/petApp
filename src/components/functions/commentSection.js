import axios from "axios";

export const getPosts = async (details) => {
  console.log(details);

  return await axios
    .post("https://apipetslaravel.herokuapp.com/api/getPosts", details, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
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

export const addPost = async (details) => {
  console.log(details);

  return await axios
    .post("https://apipetslaravel.herokuapp.com/api/addPost", details, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
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
