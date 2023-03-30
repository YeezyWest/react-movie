import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=7751be12";

const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Mr'West West Movies </h1>

      <div className="search">
        <input
          type="search"
          placeholder="search for movies"
          value="Superman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
