import axios from 'axios';
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '461ba64581ae29c8fdfba4dc8ef7243b';
export const getMovies = async (request, { param } = {}) => {
  try {
    let url = `${TMDB_API_BASE_URL}/${request}?api_key=${TMDB_API_KEY}`;

    if (param) {
      url += `&${param.key}=${param.value}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
