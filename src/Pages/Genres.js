import React from "react";
import MovieCard from "../Components/MovieCard";
import { useGlobalContext } from "../Components/context";
import Loading from "../Components/Loading";

const Genres = () => {
  const { movies, setGenre, loading, headlineContent } = useGlobalContext();

  return (
    <div className="results-main">
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <h4>{headlineContent}</h4>
          <section className="movie-grid">
            {movies.map((item) => {
              return <MovieCard key={item.id} {...item} />;
            })}
          </section>
        </>
      )}
    </div>
  );
};

export default Genres;
