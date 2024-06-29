import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";

import '../style/MovieList.css';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch('/movie.json')
            .then(res => res.json())
            .then(data => setMovieList(data))
            .catch(error => console.error('Error fetching movie data:', error));
    }, []);

    return (
        <div>
            <h1>React - Movie Booking</h1>
            <div className="movie-list">
                {movieList.map((movie) => (
                    <MovieCard key={movie.id} movieDetail={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;