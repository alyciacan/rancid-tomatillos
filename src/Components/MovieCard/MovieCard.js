import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const id = props.id;
    return (
        <Link to={ `/${id}` }>
            <div className="movieCard" data-cy="movie-card">
                <img className="cardImage" src={ props.poster_path } alt={ `${props.title} Movie Poster` } />
                <div className='movie-title'>
                    <h2>{ props.title }</h2>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
