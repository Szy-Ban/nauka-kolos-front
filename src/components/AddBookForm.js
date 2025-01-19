'use client';

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const AddBookForm = () => {
    const { movies, setMovies } = useAppContext();
    const [newBook, setNewBook] = useState({
        title: "",
        genre: "",
        director: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBook((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBookWithId = {
            ...newBook,
            id: movies.length + 1,
        };

        setMovies([...movies, newBookWithId]);
        setNewBook({ title: "", genre: "", director: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Dodaj książkę</h2>
            <input
                type="text"
                name="title"
                placeholder="Tytuł"
                value={newBook.title}
                onChange={handleChange}
                required
                className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
            />
            <input
                type="text"
                name="genre"
                placeholder="Gatunek"
                value={newBook.genre}
                onChange={handleChange}
                required
                className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
            />
            <input
                type="text"
                name="director"
                placeholder="Autor"
                value={newBook.director}
                onChange={handleChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Dodaj książkę
            </button>
        </form>
    );
};

export default AddBookForm;
