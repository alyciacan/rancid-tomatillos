import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const id = props.id;
    return (
        <Link to={ `/${id}` }>
            <div className="movieCard" data-cy="movie-card">
                <img className="cardImage" src={ props.poster_path } alt={ `${props.title} Movie Poster` } />
                <h2>{ props.title }</h2>
            </div>
        </Link>
    );
};

export default MovieCard;
