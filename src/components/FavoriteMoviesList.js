'use client';

import { useAppContext } from "@/context/AppContext";

const FavoriteMoviesList = () => {
    const { favorites, removeFromFavorites } = useAppContext();

    if (favorites.length === 0) {
        return <h2 className="text-lg font-semibold text-center text-gray-500">Brak ulubionych filmów.</h2>;
    }

    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Ulubione Filmy</h2>
            <ul className="space-y-4">
                {favorites.map((movie) => (
                    <li key={movie.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold">{movie.title}</h3>
                        <p className="text-gray-600">Gatunek: {movie.genre}</p>
                        <p className="text-gray-600">Autor: {movie.director}</p>
                        <button
                            onClick={() => removeFromFavorites(movie.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mt-2"
                        >
                            Usuń z ulubionych
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteMoviesList;
