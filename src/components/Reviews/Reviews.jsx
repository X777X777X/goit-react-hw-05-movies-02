import { fetchMovieReviews } from "api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
    const { movieId } = useParams('movieId');
    const [reviews, setRviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setRviews);
    }, [movieId]);

    return (
        <ReviewsContainer>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(({ id, autor, content }) => (
                        <li key={id}>
                            <h3>{autor}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </ReviewsContainer>
    );
};

export default Reviews;