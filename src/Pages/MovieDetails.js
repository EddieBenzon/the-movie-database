import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const idURL = "https://imdb-api.com/en/API/Title/k_h0i49j2g/";

const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const back = useNavigate();
  const backButton = () => {
    back("/");
  };
  useEffect(() => {
    setLoading(true);
    const getMovieDetails = async () => {
      try {
        const response = await fetch(`${idURL}${id}`);
        const data = await response.json();
        if (data.originalTitle) {
          const {
            originalTitle: title,
            stars: stars,
            imDbRating: rating,
            image: image,
            directors: directors,
            plot: plot,
            releaseDate: release,
            runtimeStr: runtime,
          } = data;
          const newMovie = {
            title,
            stars,
            rating,
            image,
            directors,
            plot,
            release,
            runtime,
          };
          setMovie(newMovie);
          setLoading(false);
        } else if (!data.originalTitle && data.fullTitle) {
          const {
            fullTitle: title,
            stars: stars,
            imDbRating: rating,
            image: image,
            directors: directors,
            plot: plot,
            releaseDate: release,
            runtimeStr: runtime,
          } = data;
          const newMovie = {
            release,
            title,
            stars,
            rating,
            image,
            directors,
            plot,
            runtime,
          };
          setMovie(newMovie);
          setLoading(false);
        } else {
          setLoading(false);
          return <h4>We couldn't find any data.</h4>;
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);
  const { title, stars, release, rating, image, directors, plot, runtime } =
    movie;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="movie-details-container">
          <img src={image} alt={title} />
          <div className="movie-details-info">
            <h3 className="movie-details-title">{title}</h3>
            <h5>Release Date:</h5>
            <p>{release ? release : "N/A"}</p>
            <h5>Runtime:</h5>
            <p>{runtime ? runtime : "N/A"}</p>
            <h5>Directors:</h5>
            <p>{directors ? directors : "N/A"}</p>
            <h5>Stars:</h5>
            <p>{stars ? stars : "N/A"}</p>
            <h5>Plot:</h5>
            <p>{plot ? plot : "N/A"}</p>
            <h5>IMDb Rating:</h5>
            <p>{rating ? rating : "N/A"}</p>
            <button onClick={backButton}>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
