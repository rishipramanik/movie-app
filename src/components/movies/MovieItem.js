import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MovieItem.module.css'
import FavoritesContext from '../../store/favorites-context';

function MovieItem(props) {
    const favoritesCtx = useContext(FavoritesContext)

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function togglefavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                genre: props.genre,
                cast: props.cast,
                description: props.description

            })
        }
    }

    return(
        <li className={classes.item}>
            <Card>
            {/* <div className={classes.genre}>
                <img src={props.genre} alt={props.title} />
            </div> */}
            <div className={classes.content}>
                <h2>{props.title}</h2>
                <h4>{props.genre}</h4>
                <p><b>Cast:</b> {props.cast}&emsp;
                <b>Language:</b> {props.lang}</p>
                <p><b>Movie Description:</b> <br />{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={togglefavoriteStatusHandler}>{itemIsFavorite ? 'Remove favorite' : 'Add Favorite'}</button>
            </div>
            </Card>
        </li>
    )
}

export default MovieItem;