'use client';

import { useState } from "react";
import { useAppContext } from '@/context/AppContext';
import GenreFilter from '../components/GenreFilter';
import MoviesList from '../components/MoviesList';
import FavoriteMoviesList from '../components/FavoriteMoviesList';
import AddBookForm from '../components/AddBookForm';
import EditBookForm from '../components/EditBookForm';
import useFilteredMovies from '../hooks/useFilteredMovies';

export default function Home() {
    const { loading, error, genres, movies, selectedGenre, setSelectedGenre } = useAppContext();
    const filteredMovies = useFilteredMovies(movies, selectedGenre);

    const [bookToEdit, setBookToEdit] = useState(null);

    if (loading) return <h2 className="text-center text-lg font-semibold text-blue-500">Ładowanie danych...</h2>;
    if (error) return <h2 className="text-center text-lg font-semibold text-red-500">Błąd podczas ładowania danych!</h2>;
    if (filteredMovies.length === 0) return <div className="text-center text-lg font-semibold">Nie znaleziono filmów...</div>;

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Lista Filmów</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <GenreFilter genres={genres} selectedGenre={selectedGenre} onChange={setSelectedGenre} />
                    <AddBookForm />
                    {bookToEdit && (
                        <EditBookForm bookToEdit={bookToEdit} onClose={() => setBookToEdit(null)} />
                    )}
                    <MoviesList movies={filteredMovies} onEdit={(book) => setBookToEdit(book)} />
                </div>
                <div>
                    <FavoriteMoviesList />
                </div>
            </div>
        </div>
    );
}
