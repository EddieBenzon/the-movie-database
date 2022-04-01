import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ title, image, id, imDbRating }) => {
  return (
    <Link
      to={`/movie/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="grid-item" key={id}>
        <img src={image} alt={title} />
        <div className="grid-item-info">
          <h5>{title}</h5>
          <h5>{imDbRating}</h5>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
