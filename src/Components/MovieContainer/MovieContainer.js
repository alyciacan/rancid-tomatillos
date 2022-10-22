import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        data-cy="movie-card"
      />
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="movieContainer">
      <Slider { ...settings }>
        { movieCards }
      </Slider>
    </div>
  );
};

export default MovieContainer;
