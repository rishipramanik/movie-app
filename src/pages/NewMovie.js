import { useHistory } from "react-router-dom";

import NewMovieForm from "../components/movies/NewMovieForm";

function NewMovies(){
    const history = useHistory();

    function addMovieHandler(movieData){
        fetch('https://movie-browser-ab351-default-rtdb.firebaseio.com/movies.json',
        {
            method: 'POST',
            body: JSON.stringify(movieData),
            headers: {
                'Content-Type':'application/json'
            }
        }
        ).then(() =>{
            history.replace('/');
        })
    }
    return (
    <section>
    <h1>New Movie</h1>
    <NewMovieForm onAddMovie={addMovieHandler} />
    </section>
    )
}


export default NewMovies;