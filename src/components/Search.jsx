import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../context';

const Search = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const products = useContext(AppContext).products.map(product => product.title.toLowerCase());

    // useEffect(() => {
    //     setSearchResults(products.filter(product => product.indexOf(searchValue) > -1));
    // });

    return (
        <div className="search">search: 
            <input onInput={(e) => setSearchValue(e.target.value.toLowerCase())}></input>
            <ul className="search__results">
                {searchResults.map((item, index) => {
                    return (<li key={index}>{item}</li>)
                })}
            </ul>
        </div>);
}

export default Search;