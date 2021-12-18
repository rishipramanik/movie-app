import { useState, useEffect } from "react";
import MovieList from "../components/movies/MovieList";
import "./AllMovies.css";

function AllMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedmovies, setLoadedmovies] = useState([]);
  const [q, setQ] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [isFilter, setIsFilter] = useState("");


  useEffect(() => {
    setIsLoading(true);
    fetch("https://movie-browser-ab351-default-rtdb.firebaseio.com/movies.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        const movies = [];

        for (const key in data) {
          //console.log("data", key);
          const movie = {
            id: key,
            ...data[key],
          };
          movies.push(movie);
        }
        setIsLoading(false);
        setLoadedmovies(movies);
      });
  }, []);

  //Search

  const search =  (searchedValue) => {
    setIsFilter("")
    setSearchedMovie([])
    const searchedMovies = loadedmovies.filter(
      (i) =>
        i.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
        i.genre.toLowerCase().includes(searchedValue.toLowerCase())
    );
    if (searchedMovies.length > 0) setSearchedMovie(searchedMovies);
  };

  //Checkbox

  const handleChange =  (event) => {
    setIsFilter(event.target.value);

     let movieFilter = loadedmovies.filter(d => d.lang === event.target.value);
     console.log("movie filter is",movieFilter);
  
     setSearchedMovie(movieFilter)
    console.log("Checkbox: ", event.target.value);
  };

  

  //Loading Screen till data is loading

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>

{/* radio Filter */}

      <div className="check"  >
        <div className="filter">
  <label style={{fontWeight: 'bold'}}>Filter By Language</label> </div>
  <div>
  <input type='radio'
        id="Hindi"
        onChange={handleChange}
        name="language"
        value='Hindi'
        checked={isFilter==="Hindi"}
      
      /> Hindi
      <input type='radio'
        id="English"
        onChange={handleChange}
        name="language"
        value='English' 
        checked={isFilter==="English"}
      /> English
      </div>
</div>

{/* Search Bar */}

      <div className="search-wrapper">
        <label htmlFor="search-form">
          <h4>Search Movies by Name/Genre here</h4>
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            onChange={(e) => search(e.target.value)}
          />
        </label>
      </div>
      <h1>All Movies</h1>
      {searchedMovie.length > 0 ? (
        <MovieList movies={searchedMovie} />
      ) : (
        <MovieList movies={loadedmovies} />
      )}
    </section>
  );
}

export default AllMovies;
