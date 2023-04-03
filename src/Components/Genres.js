import React from "react";
import { useGlobalContext } from "./context";

const Genres = () => {
  const { setGenre } = useGlobalContext();

  const genreStrings = [
    "horror",
    "action",
    "drama",
    "thriller",
    "comedy",
    "sci_fi",
    "fantasy",
    "romance",
  ];

  return (
    <div className="genres-main">
      <h4>Browse by Genre</h4>
      <section className="genres-container">
        {genreStrings.map((item) => {
          const newStr = item.charAt(0).toUpperCase() + item.slice(1);
          return (
            <button
              className="btn-genre"
              type="submit"
              value={item}
              onClick={(e) => setGenre(e.target.value)}
            >
              {newStr}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default Genres;
