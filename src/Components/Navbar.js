import React, { useRef } from "react";
import { IoPlay } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useGlobalContext } from "./context";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { setSearchTerm, fetchTitle } = useGlobalContext();
  const refContainer = useRef(null);
  const refreshPage = (e) => {
    e.preventDefault();
    navigate("/");
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(refContainer.current.value);
    fetchTitle(refContainer.current.value);
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <div className="title" onClick={refreshPage}>
        TheMovieDB
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" className="input-field" ref={refContainer} />
        <button type="submit" className="btn-search" onClick={handleSubmit}>
          <IconContext.Provider value={{ className: "react-icon" }}>
            <IoPlay />
          </IconContext.Provider>
        </button>
      </form>
      <div className="btn-container">
        <Link
          to="/genres"
          style={{ textDecoration: "none" }}
          className="btn-link"
        >
          <span className="btn-genres">Genres</span>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          className="btn-link"
        >
          <span className="btn-about">About</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
