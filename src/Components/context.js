import React, { useContext, useEffect, useState, useReducer } from "react";
import reducer from "../reducer";

const apiKey = process.env.REACT_APP_API_KEY;

const titleurl = `https://imdb-api.com/API/AdvancedSearch/${apiKey}?title=`;

const defaulturl = `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`;

const genreURL = `https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=feature,tv_movie&num_votes=10000,3000000&languages=en&sort=user_rating,desc&count=100`;

const AppContext = React.createContext();

const initialState = {
  movies: [],
  loading: false,
  searchTerm: "",
  headlineContent: "Trending Movies",
  genre: "popular",
};

const AppProvider = ({ children }) => {
  const [showGenres, setShowGenres] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchTerm = (term) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: term });
  };

  const fetchTitle = async (searchTerm) => {
    dispatch({ type: "LOADING" });
    const res = await fetch(
      `${titleurl}${searchTerm}&title_type=feature,tv_movie`
    );
    const data = await res.json();
    const titleResults = await data.results;
    titleResults.splice(50, 100);
    dispatch({ type: "DISPLAY_TITLES", payload: titleResults });
  };

  const fetchMostPopular = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(defaulturl);
    const data = await response.json();
    const mostPopular = await [...data.items];
    mostPopular.splice(50, 50);
    dispatch({ type: "DISPLAY_DEFAULT", payload: mostPopular });
  };
  const setGenre = async (x) => {
    dispatch({ type: "SET_GENRE", payload: x });
    dispatch({ type: "LOADING" });
    const res = await fetch(`${genreURL}&genres=${x}`);
    const data = await res.json();
    const genreResults = await [...data.results];
    dispatch({ type: "DISPLAY_GENRES", payload: genreResults });
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchTitle,
        setSearchTerm,
        setGenre,
        showGenres,
        setShowGenres,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
