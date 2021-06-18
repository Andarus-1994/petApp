const initialState = {
  loading: true,
  login: false,
  user: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loading: false,
        login: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        loading: false,
        login: false,
        user: {},
      };
    default:
      return state;
  }
};

export default login;
