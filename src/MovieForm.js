export default function MovieForm({
  movieFormYearReleased,
  setMovieFormYearReleased,
  movieTitle,
  setMovieTitle,
  movieFormColor,
  setMovieFormColor,
  movieFormDirector,
  setMovieFormDirector,
  submitMovie,
}) {
  return (
    <form onSubmit={submitMovie}>
      <label>
        Title
        <input required value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}></input>
        {/* what does required value mean? */}
      </label>

      <label>
        Year
        <input
          required
          value={movieFormYearReleased}
          onChange={(e) => setMovieFormYearReleased(e.target.value)}
        ></input>
      </label>

      <label>
        Director
        <input
          required
          value={movieFormDirector}
          onChange={(e) => setMovieFormDirector(e.target.value)}
        ></input>
      </label>

      <label>
        Color
        <select value={movieFormColor} onChange={(e) => setMovieFormColor(e.target.value)}>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="pink">Pink</option>
        </select>
      </label>

      <button>Add Movie</button>
    </form>
  );
}
