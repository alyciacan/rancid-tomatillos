import './MovieCard.css'

const MovieCard = (props) => {
    const id = props.id;
    return (
        <div className="movieCard" onClick={() => props.expandView(id)}>
            <img className="cardImage" src={props.poster_path} alt={`${props.title} Movie Poster`} />
            <h2>{props.title}</h2>
        </div>
     )
}

export default MovieCard;
