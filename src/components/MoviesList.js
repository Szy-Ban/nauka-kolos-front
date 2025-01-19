import {useAppContext} from "@/context/AppContext";


const MoviesList = ({ movies, onEdit }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
                <li key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h1 className="text-lg font-semibold">{movie.title}</h1>
                    <p className="text-gray-600">Gatunek: {movie.genre}</p>
                    <p className="text-gray-600">Autor: {movie.director}</p>
                    <div className="mt-2">
                        {favorites.find((fav) => fav.id === movie.id) ? (
                            <button
                                onClick={() => removeFromFavorites(movie.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 mr-2"
                            >
                                Usuń z ulubionych
                            </button>
                        ) : (
                            <button
                                onClick={() => addToFavorites(movie)}
                                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 mr-2"
                            >
                                Dodaj do ulubionych
                            </button>
                        )}
                        <button
                            onClick={() => onEdit(movie)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                        >
                            Edytuj
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MoviesList;
