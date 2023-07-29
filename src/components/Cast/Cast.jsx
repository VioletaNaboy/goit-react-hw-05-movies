import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../APIservice';
const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const castDetails = await getMovies(`movie/${id}/credits`);
        setCast(castDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setCast({});
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
    <section>
      {cast.cast && cast.cast.length > 0 ? (
        <ul>
          {cast.cast.map(unit => (
            <li key={unit.id}>
              {unit.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${unit.profile_path}`}
                  alt={unit.name}
                />
              )}
              <span>Name: {unit.name}</span>
              <span>Character: {unit.character}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>No cast information available.</div>
      )}
    </section>
  );
};

export default Cast;
