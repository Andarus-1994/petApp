const initialState = {
  loading: true,
  profile: "",
  error: "",
};

const profileMedia = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE_MEDIA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PROFILE_MEDIA_SUCCESS": {
      console.log("merge post2");
      console.log(action.payload);
      return {
        loading: false,
        profile: action.payload,
        error: "",
      };
    }
    case "FETCH_PROFILE_MEDIA_FAILURE":
      return {
        loading: false,
        profile: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileMedia;
