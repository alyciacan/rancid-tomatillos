import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = (props) => {
    const movieCards = props.allMovies.map(movie => {
        return (
        <MovieCard 
            id={ movie.id }
            key={ movie.id }
            poster_path={ movie.poster_path }
            backdrop_path={ movie.backdrop_path }
            title={ movie.title }
            average_rating={ movie.average_rating }
            release_date={ movie.release_date }
            expandView={props.expandView}
        />
        )
    })
    
    return (
        <div className="movieContainer">
            { movieCards }
        </div>
    )
}

export default MovieContainer;
