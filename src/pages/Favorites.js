import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';

import MovieList from '../components/movies/MovieList';

function Favorites(){
    const favoritesCtx = useContext(FavoritesContext)

let content;
if (favoritesCtx.totalFavorites===0) {
    content = <p>You have no favorites yet. Start adding now!!</p>;
} else {
    content = <MovieList movies={favoritesCtx.favorites} />;
}

    return <section> 
        <h1>Favorites</h1>
        {content}
        </section>
}


export default Favorites;