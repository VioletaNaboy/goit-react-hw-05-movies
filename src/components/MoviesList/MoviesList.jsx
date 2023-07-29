import { Link, useLocation } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  if (!Array.isArray(movies)) {
    return <div>No movies available</div>;
  }
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={
              location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
            }
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
