import React from 'react';
import './Card.css';

//This is a presentational component
const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">     
                <div className="eng">{props.eng}</div>
            </div>
            <div className="back">
                <div className="han">{props.han}</div>
                <div className="pin">{props.pin}</div>
            </div>
        </div>
    </div>
)

export default Card;