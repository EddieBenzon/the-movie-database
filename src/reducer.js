const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_DEFAULT") {
    return { ...state, movies: action.payload, loading: false };
  }
  if (action.type === "SET_SEARCH_TERM") {
    return {
      ...state,
      searchTerm: action.payload,
      headlineContent: `Results for "${action.payload}"`,
    };
  }
  if (action.type === "DISPLAY_TITLES") {
    return { ...state, movies: action.payload, loading: false };
  }
  if (action.type === "SET_GENRE") {
    return { ...state, genre: action.payload, searchTerm: "" };
  }
  if (action.type === "DISPLAY_GENRES") {
    return {
      ...state,
      movies: action.payload,
      loading: false,
      headlineContent: `Top-rated ${state.genre} titles`,
    };
  }
  return state;
};

export default reducer;
