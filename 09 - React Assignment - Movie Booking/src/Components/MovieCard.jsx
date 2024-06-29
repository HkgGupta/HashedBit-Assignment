import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = (props) => {
    const { movieDetail } = props;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movie/${movieDetail.id}`);
    };

    return (
        <div className="movieCard" onClick={handleCardClick}>
            <img src={movieDetail.image_url} alt={movieDetail.title} />
            <h3 className="title">{movieDetail.title + " (" + movieDetail.year + ")"}</h3>
        </div>
    );
};

export default MovieCard;
