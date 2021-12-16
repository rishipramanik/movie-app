import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";
 

function MainNavigation() {
    const favoritesCtx= useContext(FavoritesContext);
    return (
        <header className={classes.header}>
        <div className = {classes.logo}>Movies &amp; More</div>
        <nav>
        <ul>
        <li>
        <Link to='/'>All Movies</Link>
        </li>
        <li>
        <Link to='/new-movie'>New Movie</Link>
        </li>
        <li>
        <Link to='/favorites'>Favorites
        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
        </li>
        </ul>
        </nav>
        </header>
    );
}

export default MainNavigation;