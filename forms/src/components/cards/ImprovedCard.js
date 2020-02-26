import React from 'react';
import './Card.css'

const improvedCard = props => {
    return (
        <article className="improvedMovieCard">
            <h4>{props.title}</h4>
            <p><small>Director: {props.director} {props.hasOscars ? <>(tiene Oscar)</> : <>(no tiene Oscar)</>}</small></p>
        </article>
    )
}

export default improvedCard;