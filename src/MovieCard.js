import './MovieCard.css'

const MovieCard = (props) => {
	return (
		<div className="movieCard">
			<img className="cardImage" src={props.poster_path} alt={`${props.title} Movie Poster`} />
			<h2>{props.title}</h2>
		</div>
	 )
}


export default MovieCard;
