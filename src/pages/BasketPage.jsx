import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';

import { AppContext } from '../context';

const BasketPage = () => {

    const data = useContext(AppContext);
    const productsInBasket = data.products.filter(product => data.basket.includes(product.title));

    const cards = productsInBasket.map((product, index) => {
        return (
            <ProductCard
                key = {index}
                title = {product.title} 
                price = {product.price} 
                cover = {product.cover}
                basket = {data.basket}
                handler = {data.setBasket}

            />);
    });

    return <div className="basket">{cards}</div>;
}

export default BasketPage;