import React from "react";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "./context";
import Loading from "./Loading";

const Genres = () => {
  const { setGenre } = useGlobalContext();

  return (
    <div className="genres-main">
      <h4>Browse by Genre</h4>
      <section className="genres-container">
        <button
          className="btn-genre"
          type="submit"
          value="horror"
          onClick={(e) => setGenre(e.target.value)}
        >
          Horror
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="action"
          onClick={(e) => setGenre(e.target.value)}
        >
          Action
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="drama"
          onClick={(e) => setGenre(e.target.value)}
        >
          Drama
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="thriller"
          onClick={(e) => setGenre(e.target.value)}
        >
          Thriller
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="comedy"
          onClick={(e) => setGenre(e.target.value)}
        >
          Comedy
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="sci_fi"
          onClick={(e) => setGenre(e.target.value)}
        >
          Sci-Fi
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="fantasy"
          onClick={(e) => setGenre(e.target.value)}
        >
          Fantasy
        </button>
        <button
          className="btn-genre"
          type="submit"
          value="romance"
          onClick={(e) => setGenre(e.target.value)}
        >
          Romance
        </button>
      </section>
    </div>
  );
};

export default Genres;
