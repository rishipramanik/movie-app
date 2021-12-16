import MovieItem from './MovieItem';
import classes from './MovieList.module.css'



function MovieList(props) {
    return <ul className={classes.list}>
        {props.movies.map(movie => <MovieItem 
        key={movie.id}
        id={movie.id}
        genre={movie.genre}
        title={movie.title}
        cast={movie.cast}
        lang={movie.lang}
        description={movie.description}
        />)}
    </ul>


}

export default MovieList;