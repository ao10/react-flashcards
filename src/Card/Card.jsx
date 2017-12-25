import React, { Component } from 'react';
import './Card.css';

//This is a presentational component
const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">     
                <div className="eng">English Word</div>
            </div>
            <div className="back">
                <div className="han">Hanzi Word</div>
                <div className="pin">Pinyin Word</div>
            </div>
        </div>
    </div>
)

export default Card;