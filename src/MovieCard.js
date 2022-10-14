import './MovieCard.css'
import { Component } from 'react';

const MovieCard = (props) => {
    return (
        <div className="movieCard">
            <img src={`${ props.poster_path }`} />
            <h2>{props.title}</h2>
        </div>
     )
}


export default MovieCard;
