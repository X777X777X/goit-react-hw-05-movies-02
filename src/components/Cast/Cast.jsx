import { fetchMovieCredits } from "api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  CastContainer,
  CastList,
  CastItem,
  Image,
  CastInfo,
  CastName,
} from './Cast.styled';

const Cast = () => {
    const { movieId } = useParams('movieId');
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        fetchMovieCredits(movieId).then(setCredits)
    }, [movieId]);

    return (
        <CastContainer>
            {credits.length > 0 && (
                <CastList>
                    {credits.map(({ id, name, photo }) => {
                        return (<CastItem key={id}>
                            <Image src={photo} alt={name} />
                            <CastInfo>
                                <CastName>{name}</CastName>
                            </CastInfo>
                        </CastItem>);
                    })}
                </CastList>
            )}
        </CastContainer>
    );
};

export default Cast;