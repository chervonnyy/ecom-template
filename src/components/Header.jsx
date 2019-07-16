import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

const Header = props => {
    return (
        <header className="header">
            <div>
                <Link to='/'>home</Link>
            </div>
            <div>contacts</div>
            <Search />
            <div className="header__cart">
                <Link to='/basket'>cart
                    <div className="header__counter">
                        items in basket: {props.value.length}
                    </div>
                </Link>
            </div>
        </header>);
}

export default Header;