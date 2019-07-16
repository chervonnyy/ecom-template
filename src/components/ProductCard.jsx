import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

const ProductCard = props => {
    
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
                    className="card__action_favorite" 
                    onClick = {() => addToFavorite(!isFavorite)}
                >
                    <Icon>{isFavorite ? 'favorite' : 'favorite_border'}</Icon>
                </div>
                <div className="card__action_cart"
                    onClick = {() => {
                        handler(basket.includes(title) ? basket.filter(item => item !== title) : [...basket, title]);
                    }}
                >
                    <Icon>{isAdded ? 'remove_shopping_cart' : 'add_shopping_cart'}</Icon>
                </div>

            </div>
        </div>
    );
}

export default ProductCard;