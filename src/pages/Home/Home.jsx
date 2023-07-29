import React, { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList.jsx';
import { getMovies } from 'APIservice';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovies('trending/movie/day');
      setMovies(moviesData.results);
    }

    fetchMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
