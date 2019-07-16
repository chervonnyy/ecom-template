import React, { useState, useEffect } from 'react';

import Main from './pages/Main';
import Header from './components/Header';

import { AppContext } from './context';

import data from './data.json';
import './App.sass';
import 'typeface-roboto';

const App = () => {

    const [basket, setBasket] = useState([]);

    data.basket = basket;
    data.setBasket = setBasket;

    useEffect(() => console.log(basket));

    return (
        <div id="root">
            <AppContext.Provider value = {data} >
                <Header value = {basket} />
                <Main />
            </AppContext.Provider>
        </div>
    );
}

export default App;