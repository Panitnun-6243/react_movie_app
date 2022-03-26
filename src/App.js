import React, { useEffect } from "react";
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

const movie2 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const searchMovie = async (title) => {
    //call api
    const response = await fetch(`${API_URL}&s=${title}`);
    //after get response we have to get data from json
    const data = await response.json();

    console.log(data.Search);
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
      <div className="container">
        
      </div>
    </div>
  );
};

export default App;
