import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import '../style/MovieDetail.css';

const MovieDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);


    const bookForm = () => {
        navigate('/book/' + id, { state: { movieTitle: movie.title } });
    };

    useEffect(() => {
        fetch('/movie.json')
            .then(res => res.json())
            .then(data => {
                const selectedMovie = data.find(movie => movie.id === parseInt(id));
                setMovie(selectedMovie);
            })
            .catch(error => console.error('Error fetching movie data:', error));
    }, [id]);

    if (!movie) {
        return <div className='loading'>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="movie-detail">
                <div className="image">
                    <img src={movie.image_url} alt={movie.title} />
                </div>
                <div className="content">
                    <h2>{movie.title}</h2>
                    <p><b>Year:</b> {movie.year}</p>
                    <p><b>Genre:</b> {movie.genre}</p>
                    <p><b>Rating:</b> {movie.rating}</p>
                    <button onClick={bookForm}>Book Seat</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
