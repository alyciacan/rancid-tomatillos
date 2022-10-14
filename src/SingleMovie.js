import './SingleMovie.css';
import backArrow from './backArrow.png';

const SingleMovie = (props) => {
    return (
        <section className="single-movie">
            <div className="movie-stats">
                <img className="poster" src={props.singleMovie.poster_path} />
                <h1>{props.singleMovie.title}</h1>
                <h4>
                    {props.singleMovie.release_date}   
                 | {props.singleMovie.average_rating} 
                 {/* | {props.singleMovie.runtime} */}
                 </h4>
            </div>
            <div className="movie-details">
                {/* <p>Description: {props.overview}</p> */}
                {/* <p>Genre: {props.genres}</p> */}
                {/* <p>Budget: ${props.budget}</p> */}
                <p>Release Date: {props.singleMovie.release_date}</p>
                <img src={backArrow} alt="Arrow to go back" onClick={ props.goBack } />
            </div>
        </section>
    )
}


export default SingleMovie;