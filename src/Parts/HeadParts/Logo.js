import React from 'react';
import './Head.css';
import logo from '../../items/a-logo.png';

function Logo () {
    return (
        <div className="Logo">
            <img src={`${logo}`} width={`41px`}/>
        </div>
    )
}

export default Logo

