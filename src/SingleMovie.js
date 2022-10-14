import './SingleMovie.css';

const SingleMovie = (props) => {
    return (
        <section className="single-movie">
            <div className="movie-stats">
                <img src={props.poster_path} />
                <h1>{props.title}</h1>
                <h4>{props.release_date} | {props.rating} | {props.runtime}</h4>
            </div>
            <div className="movie-details">
                <p>Description: {props.overview}</p>
                <p>Genre: {props.genres}</p>
                <p>Budget: ${props.budget}</p>
                <p>Release Date: {props.release_date}</p>
            </div>
        </section>
    )
}


export default SingleMovie;