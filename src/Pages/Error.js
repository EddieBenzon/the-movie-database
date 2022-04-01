import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h4>Whoops! That page doesn't exist...</h4>
      <Link to="/">
        <button className="btn-error">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
