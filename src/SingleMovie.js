import './SingleMovie.css';
import backArrow from './backArrow.png';

const SingleMovie = (props) => {
    return (
        <section className='single-movie'>
            <div className='movie-stats'>
                <img className='poster' src={props.singleMovie.poster_path} alt={`${props.singleMovie.title} Movie Poster`} />
                <h1>{props.singleMovie.title}</h1>
                <h4>{props.singleMovie.release_date}&nbsp;&nbsp; | &nbsp;&nbsp;{props.singleMovie.average_rating}</h4> 
                 {/* | {props.singleMovie.runtime} */}
            </div>
            <div className='movie-details'>
                {/* <p>Genre: {props.genres}</p> */}
                {/* <p>Description: {props.overview}</p> */}
                {/* <p>Budget: ${props.budget}</p> */}
                <p>Release Date: {props.singleMovie.release_date}</p>
                <div className='backArrow'>
                    <img role='button' src={backArrow} alt='back button' width='75vw' height='75vh' onClick={ props.goBack } />
                </div>
            </div>
        </section>
    )
}


export default SingleMovie;