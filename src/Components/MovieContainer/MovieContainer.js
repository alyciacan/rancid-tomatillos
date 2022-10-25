import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieContainer = (props) => {
  const movieCards = props.moviesToRender.map(movie => {
    return (
      <MovieCard
        id={ movie.id }
        key={ movie.id }
        poster_path={ movie.poster_path }
        backdrop_path={ movie.backdrop_path }
        title={ movie.title }
        average_rating={ movie.average_rating }
        release_date={ movie.release_date }
        data-cy="movie-card"
      />
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.slidesToShow(),
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="movieContainer" data-cy='movie-container'>
      { !props.moviesToRender.length
        ? <h5 className="no-movies-found">Sorry, there are no movies matching your search.</h5>
        : <Slider { ...settings }>
          { movieCards }
        </Slider> }
    </div>
  );
};

export default MovieContainer;
