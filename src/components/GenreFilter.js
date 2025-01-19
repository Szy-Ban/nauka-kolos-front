'use client'

const GenreFilter = ({genres, selectedGenre, onChange}) => (
    <div>
        <label>Choose genre:</label>
        <select
            value={selectedGenre}
            onChange={(e) => onChange(e.target.value)}
        >
            {
                genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))
            }
        </select>
    </div>
)

export default GenreFilter;