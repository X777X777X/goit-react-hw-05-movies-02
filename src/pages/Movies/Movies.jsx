import { useState, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { fetchByQuery } from "api";
import {
  FormDiv,
  Form,
  Input,
  Btn,
  MovieList,
  MovieItem,
  MovieLink,
  Image,
  MovieTitle,
} from './Movies.styled';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const location = useLocation();
    const searchQuery = searchParams.get('query');

    useEffect(() => {
        searchQuery && fetchByQuery(searchQuery).then(setMovies);
    }, [searchQuery]);

    const handleSubmit = async e => {
      e.preventDefault();

      const res = await fetchByQuery(query);
      setMovies(res);
      setSearchParams({ query });
      setQuery('');
    };
    const onChange = e => {
      setQuery(e.target.value);
    };
    return (
        <>
      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={query} onChange={onChange} />
          <Btn type="submit">Search</Btn>
        </Form>
      </FormDiv>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title, poster }) => (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Image src={poster} alt={title} />
                <MovieTitle>
                  <h3>{title}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </>
  );
};

export default Movies;