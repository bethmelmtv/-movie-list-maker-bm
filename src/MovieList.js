import Movie from './Movie.js';

export default function MovieList({ movies, handleDeleteMovie }) {
  return movies.map((movie) => (
    <Movie key={movie + movie.title} movie={movie} handleDeleteMovie={handleDeleteMovie} />
  ));
  // why do we need to give it a key, and what does movie ={movie} do?
}
