import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../APIservice';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const reviewsDetails = await getMovies(`movie/${id}/reviews`);
        setReviews(reviewsDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setReviews({});
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
    <section>
      {reviews.results && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(unit => (
            <li key={unit.id}>
              <h3>{unit.author}</h3>
              <span>{unit.content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>No reviews available.</div>
      )}
    </section>
  );
};

export default Reviews;
