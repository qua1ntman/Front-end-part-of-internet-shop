import React from 'react';
import './Head.css';
import logo from '../../items/a-logo.png';

function Logo () {
    return (
        <div className="Logo">
            <img alt="img" src={logo} className="Logo-img"/>
        </div>
    )
}

export default Logo

