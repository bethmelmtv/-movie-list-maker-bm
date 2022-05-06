// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([
    { title: 'the dark knight', year: '2010', director: 'Spieldberg', color: 'red' },
  ]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('1997');
  const [movieFormDirector, setMovieFormDirector] = useState('Spieldberg');
  const [movieTitle, setMovieTitle] = useState('Titanic');
  const [movieFormColor, setMovieFormColor] = useState('red');

  function handleDeleteMovie(title) {
    const deleteMovie = allMovies.findIndex((movie) => movie.title === title);
    //movie is a booger in line 21 .// like an item of the array
    allMovies.splice(deleteMovie, 1);
    //not sure what this line is doing
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    if (search) {
      const filteredMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies([...filteredMovies]);
    } else {
      setFilteredMovies([...allMovies]);
    }
  }

  function submitMovie(e) {
    e.preventDefault();

    const newMovie = {
      title: movieTitle,
      year: movieFormYearReleased,
      director: movieFormDirector,
      color: movieFormColor,
    };

    setAllMovies([...allMovies, newMovie]);

    setMovieTitle('');
    setMovieFormYearReleased('');
    setMovieFormColor('');
    setMovieFormDirector('');
  }

  return (
    <div className="App">
      <MovieForm
        movieFormYearReleased={movieFormYearReleased}
        setMovieFormYearReleased={setMovieFormYearReleased}
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
        movieFormColor={movieFormColor}
        setMovieFormColor={setMovieFormColor}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        submitMovie={submitMovie}
      />

      <div className="filter-movies">
        Filter Movies
        <input onChange={(e) => handleFilterMovies(e.target.value)} />
      </div>

      <Movie
        movie={{
          title: movieTitle,
          year: movieFormYearReleased,
          director: movieFormDirector,
          color: movieFormColor,
        }}
      />

      <MovieList
        movies={filteredMovies.length ? filteredMovies : allMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
