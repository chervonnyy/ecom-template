import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BasketPage from './BasketPage';
import ProductPage from './ProductPage';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/basket' component={BasketPage} />
            <Route path='/product/:id' component={ProductPage} />
        </Switch>
    );
}

export default Main;