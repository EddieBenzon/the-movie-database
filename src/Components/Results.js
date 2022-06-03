import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import Genres from "./Genres";

const Results = () => {
  const { movies, loading, headlineContent, showGenres } = useGlobalContext();
  return (
    <main className="results-main">
      {showGenres && <Genres />}
      <h4>{headlineContent}</h4>
      {loading ? (
        <Loading />
      ) : (
        <section className="movie-grid">
          {movies.length < 1 && (
            <h4>We couldn't find any movies by that title.</h4>
          )}
          {movies.map((item) => {
            return <MovieCard key={item.id} {...item} />;
          })}
        </section>
      )}
    </main>
  );
};

export default Results;
