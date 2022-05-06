export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div
      className="movie"
      onClick={() => handleDeleteMovie && handleDeleteMovie(movie.title)}
      style={{ backgroundColor: movie.color }}
    >
      <h2>{movie.title}</h2>
      <h3>{movie.director}</h3>
      <h3>{movie.title}</h3>
    </div>
  );
}
