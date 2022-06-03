import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <main className="about-main">
      <h4>About this Page</h4>
      <p>
        Welcome to The Movie Database! This is an educational project made as a
        means to practice React skills, such as React Routing, working with APIs
        and data handling, to name a few. Hopefully it's also useful!
      </p>
      <Link to="/" style={{ textDecoration: "none", alignSelf: "flex-end" }}>
        <button>Back to Home</button>
      </Link>
    </main>
  );
};

export default About;
