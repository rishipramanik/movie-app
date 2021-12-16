import { useState, useEffect } from "react";
import MovieList from "../components/movies/MovieList";



function AllMovies(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedmovies, setLoadedmovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://movie-browser-ab351-default-rtdb.firebaseio.com/movies.json',
).then((response) => {
  return response.json()
}).then(data => {
  console.log(data)
  const movies =[];

  for (const key in data) {
    console.log('data', key)
    const movie = {
      id: key,
      ...data[key]
    };
    movies.push(movie);
  }
  setIsLoading(false);
  setLoadedmovies(movies);
});
  }, []);



if(isLoading) {
  return (
    <section>
    <p>Loading...</p>
    </section>
  )
}

    return (
    <section>
<h1>All Movies</h1>
<MovieList movies={loadedmovies} />
    </section>
    )
    
}


export default AllMovies;