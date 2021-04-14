const initialState = {
  loading: true,
  pets: { pets: [] },
  error: "",
};

const petsCharacter = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PETS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PETS_SUCCESS": {
      console.log("merge post2");
      console.log(action.payload);
      return {
        loading: false,
        pets: action.payload,
        error: "",
      };
    }
    case "FETCH_PETS_FAILURE":
      return {
        loading: false,
        pets: { pets: [] },
        error: action.payload,
      };
    default:
      return state;
  }
};

export default petsCharacter;
