import React, { useContext } from 'react';
import ProductCard from './ProductCard';

import { AppContext } from '../context';

const Grid = () => {

    const data = useContext(AppContext);

    const cards = data.products.map((product, index) => {
        return (
            <ProductCard
                key = {index}
                id = {product.id}
                title = {product.title} 
                price = {product.price} 
                cover = {product.cover}
                handler = {data.setBasket}
                basket = {data.basket}
            />);
    });

    return <div className="grid">{cards}</div>;
}

export default Grid;