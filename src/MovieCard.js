import './MovieCard.css'
import { Component } from 'react';

const MovieCard = (props) => {
    const id = props.id;
    return (
        <div className="movieCard" onClick={() => props.expandView(id)}>
            <img className="card-poster" src={`${ props.poster_path }`} />
            <h2>{props.title}</h2>
        </div>
     )
}


export default MovieCard;
