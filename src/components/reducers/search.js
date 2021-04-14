const initialState = {
  loading: true,
  character: {},
};

const searchedChar = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CHAR":
      return {
        loading: false,
        character: action.payload,
      };
    default:
      return state;
  }
};

export default searchedChar;
