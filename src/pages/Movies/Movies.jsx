import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { getMovies } from '../../APIservice';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState(searchParams.get('name') ?? '');

  useEffect(() => {
    const fetchMovies = async () => {
      if (name !== '') {
        const response = await getMovies('search/movie', {
          param: { key: 'query', value: name },
        });
        setMovies(response.results);
      }
    };

    fetchMovies();
  }, [name]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      updateQueryString(name);
    }
  };
  return (
    <main>
      <SearchBox
        value={name}
        onChange={e => {
          setName(e.target.value);
          updateQueryString(e.target.value); // Оновлюємо URL при зміні значення поля пошуку
        }}
        onKeyPress={handleKeyPress}
      />{' '}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
