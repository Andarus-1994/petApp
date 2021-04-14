const initialState = {
  loading: true,
  token: "",
  error: "",
};

const token = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOKEN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TOKEN_SUCCESS": {
      console.log("merge post2");
      return {
        loading: false,
        token: action.payload,
        error: "",
      };
    }
    case "FETCH_TOKEN_FAILURE":
      return {
        loading: false,
        token: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default token;
