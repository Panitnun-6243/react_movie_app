import React, { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=92696fa0';

const App = () => {

  const searchMovie = async (title) => {
    //call api
    const response = await fetch(`${API_URL}&s=${title}`)
    //after get response we have to get data from json
    const data = await response.json();

    console.log(data.Search)
  }

  useEffect(()=>{
    searchMovie('Spiderman')
  },[])
  
  return (
    <div className="App">
      <h1>Movie App</h1>
    </div>
  );
}

export default App;
