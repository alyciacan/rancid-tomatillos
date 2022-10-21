import './SingleMovie.css';
import backArrow from './backArrow.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SingleMovie = (props) => {
    useEffect(() => {
        props.expandView(props.id);
    }, []);

    if (!props.singleMovie) {
        return (
            <p>loading</p>
        );
    }

    const background = {
        backgroundImage: `url(${props.singleMovie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    };

    const genres = props.singleMovie.genres.map(genre => <li className="single-movie-genre" key={ Date.now + genre }>{ genre }</li>);
    return (
        <section className='single-movie' style={ background }>
            <div className='screen'></div>
            <div className='movie-stats'>
                <img className='poster' src={ props.singleMovie.poster_path } alt={ `${props.singleMovie.title} Movie Poster` } />
                <h1>{ props.singleMovie.title }</h1>
                <h4>{ props.singleMovie.release_date.slice(0, 4) }&nbsp;&nbsp; | &nbsp;&nbsp;{ props.singleMovie.average_rating.toFixed(2) } / 10</h4>
                <h4>Runtime: { `${props.singleMovie.runtime} minutes` }</h4>
            </div>
            <div className='movie-details'>
                <h3>{ props.singleMovie.tagline }</h3>
                <hr />
                <ul className="genre-box">{ genres }</ul>
                <hr />
                <p>{ props.singleMovie.overview }</p>

                <Link to={'/'} className='backArrow'>
                    <img role='button' src={ backArrow } alt='back button' width='75vw' height='75vh' onClick={ props.goBack } />
                </Link>
                </div>
        </section>
    );
};


export default SingleMovie;