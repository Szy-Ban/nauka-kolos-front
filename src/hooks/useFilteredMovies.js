'use client';

import { useMemo } from "react";

const useFilteredMovies = (movies, selectedGenre) => {
    const filteredMovies = useMemo(() => {
        if (selectedGenre === "All") {
            return movies;
        }
        return movies.filter((movie) => movie.genre === selectedGenre);
    }, [movies, selectedGenre]);

    return filteredMovies;
};

export default useFilteredMovies;
