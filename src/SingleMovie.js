import './SingleMovie.css';

const SingleMovie = (props) => {
    return (
        <section className="single-movie">
            <div className="movie-stats">
                <img className="poster" src={props.singleMovie.poster_path} />
                <h1>{props.singleMovie.title}</h1>
                <h4>
                    {props.singleMovie.release_date}   
                 | {props.singleMovie.rating} 
                 {/* | {props.singleMovie.runtime} */}
                 </h4>
            </div>
            <div className="movie-details">
                {/* <p>Description: {props.overview}</p> */}
                {/* <p>Genre: {props.genres}</p> */}
                {/* <p>Budget: ${props.budget}</p> */}
                <p>Release Date: {props.singleMovie.release_date}</p>
            </div>
        </section>
    )
}


export default SingleMovie;