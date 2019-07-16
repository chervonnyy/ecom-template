import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
    
    const [isFavorite, addToFavorite] = useState(false);
    const { id, title, price, cover, handler, basket } = props;

    let isAdded = basket.includes(title) ? true : false;

    useEffect(() => {
        isAdded = (basket.includes(title)) ? true : false;
        console.log(title, id, isFavorite, isAdded)
    });

    return (
        <div className="card">
            <div className="card__cover">
                <Link to={`/product/${id}`}>
                    <img src={cover} alt={title} />
                </Link>
            </div>
            <div className="card__title">{title}</div>
            <div className="card__price">{price}</div>
            <div className="card__actions">
                <div 
                    className="card__favorite" 
                    onClick = {(e) => {
                        addToFavorite(!isFavorite);
                        e.target.classList.toggle('card__favorite_active');
                    }}
                />
                <div 
                    className = {isAdded ? "card__cart card__cart_active" : "card__cart"}
                    onClick = {() => {
                        handler(basket.includes(title) ? basket.filter(item => item !== title) : [...basket, title]);
                    }} 
                />
            </div>
        </div>
    );
}

export default Card;