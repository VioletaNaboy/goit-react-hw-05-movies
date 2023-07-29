import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { getMovies } from '../../APIservice';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovies(`movie/${id}`);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovie(null);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <main>
      <BackLink to={backLinkHref}>Back to Home</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <div>
          <span>User Score: {movie.vote_average}</span>
        </div>

        <div>
          <h2>Overview</h2>
          <span>{movie.overview}</span>
        </div>

        <div>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
