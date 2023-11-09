

const initial_state = {
  loading: false,
  posts: [],
  error: "",
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCC':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: "",
      };
    case 'POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
