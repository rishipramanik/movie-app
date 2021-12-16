import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritemovie) => {},
    removeFavorite: (movieId) => {},
    itemIsFavorite: (movieId) => {}
});

 export function FavoritesContextProvider(props){
   const [userFavorites, setUserFavorites] = useState([])

   function addFavoritesHandler(favoritemovie) {
    setUserFavorites((prevUserFavorites)=> {
        return prevUserFavorites.concat(favoritemovie)
    })
   }

   function removeFavoriteHandler(movieId){
       setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.filter(movie=> movie.id !==movieId)
       })

   }

   function itemIsFavoriteHandler(movieId){
       return userFavorites.some(movie => movie.id === movieId)


   }

    const context ={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;