'use client'

import {createContext, useContext, useState, useEffect, useMemo} from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('/data/movies.json')

                if(!response.ok){
                    throw new Error("Movies not found")
                }

                const data = await response.json()
                setMovies(data)

            } catch (err) {
                setError(true);
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    const genres = useMemo(()=>{
        const allGenres = movies.map((movie)=> movie.genre)
        return ["All", ...new Set(allGenres)]
    },[movies])

    const filteredMovies = useMemo(()=>{
        if(selectedGenre === "All"){
            return movies
        }
        return movies.filter((movie)=>movie.genre === selectedGenre)
    }, [movies, selectedGenre])

    const addToFavorites = (movie) => {
        if(!favorites.find((fav)=> fav.id === movie.id)){
            setFavorites([...favorites, movie])
        }
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(favorites.filter((movie) => movie.id !== movieId));
    };

    return (
        <AppContext.Provider
        value={{
            movies,
            loading,
            error,
            genres,
            filteredMovies,
            favorites,
            selectedGenre,
            setSelectedGenre,
            addToFavorites,
            removeFromFavorites,
            setMovies
        }}
        >
            {children}
        </AppContext.Provider>
    )

}


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};