import React, { useContext } from 'react';

import { AppContext } from '../context';

const ProductPage = props => {

    const product = useContext(AppContext).products.filter(item => item.id.toString() === props.match.params.id)[0];
    
    return <h2>{product.title}</h2>
}

export default ProductPage;