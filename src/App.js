import Results from "./Components/Results";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Error from "./Pages/Error";
import MovieDetails from "./Pages/MovieDetails";
import About from "./Pages/About.js";
import Genres from "./Pages/Genres";

function App() {
  useEffect(() => {
    document.title = "The Movie Database";
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Results />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
