import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=92696fa0";

const movie1 = {
  Title: "Spiderman and Grandma",
  Year: "2009",
  imdbID: "tt1433184",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    //call api
    const response = await fetch(`${API_URL}&s=${title}`);
    //after get response we have to get data from json
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLists</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        ></input>
        <img src={SearchIcon} alt="search" />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
