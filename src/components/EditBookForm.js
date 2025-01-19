'use client';

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const EditBookForm = ({ bookToEdit, onClose }) => {
    const { movies, setMovies } = useAppContext();
    const [updatedBook, setUpdatedBook] = useState(bookToEdit);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBook((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedMovies = movies.map((movie) =>
            movie.id === updatedBook.id ? updatedBook : movie
        );

        setMovies(updatedMovies);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Edytuj książkę</h2>
            <input
                type="text"
                name="title"
                placeholder="Tytuł"
                value={updatedBook.title}
                onChange={handleChange}
                required
                className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
            />
            <input
                type="text"
                name="genre"
                placeholder="Gatunek"
                value={updatedBook.genre}
                onChange={handleChange}
                required
                className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
            />
            <input
                type="text"
                name="director"
                placeholder="Autor"
                value={updatedBook.director}
                onChange={handleChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
            />
            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mr-2"
            >
                Zapisz zmiany
            </button>
            <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
            >
                Anuluj
            </button>
        </form>
    );
};

export default EditBookForm;
