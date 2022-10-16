import './SingleMovie.css';
import backArrow from './backArrow.png';

const SingleMovie = (props) => {
    const background = {
        backgroundImage: `url(${props.singleMovie.backdrop_path})`,
        backgroundSize: 'cover',
        minWidth: '100%'
    }

    return (
        <section className='single-movie' style={ background }>
            <div className="transparent-wrap">
            </div>
            <div className='movie-stats'>
                <img className='poster' src={props.singleMovie.poster_path} alt={`${props.singleMovie.title} Movie Poster`} />
                <h1>{props.singleMovie.title}</h1>
                <h4>{props.singleMovie.release_date}&nbsp;&nbsp; | &nbsp;&nbsp;{props.singleMovie.average_rating}</h4> 
                <h4>Runtime: {`${props.singleMovie.runtime} minutes`}</h4>
            </div>
            <div className='movie-details'>
                <p>Genre: {props.singleMovie.genres}</p>
                <p>Description: {props.singleMovie.overview}</p>
                <div className='backArrow'>
                    <img role='button' src={backArrow} alt='back button' width='75vw' height='75vh' onClick={ props.goBack } />
                </div>
            </div>
        </section>
    )
}


export default SingleMovie;