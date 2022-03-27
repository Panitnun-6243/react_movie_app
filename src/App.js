import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=92696fa0";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovie = async (title) => {
    //call api
    const response = await fetch(`${API_URL}&s=${title}`);
    //after get response we have to get data from json
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("captain");
  }, []);

  return (
    <div className="app">
      <h1>MovieLists</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }
        ></input>
        <img src={SearchIcon} alt="search" onClick={()=> searchMovie(searchTerm)}/>
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
