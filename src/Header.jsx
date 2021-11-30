import React from 'react';
import download from './Images/download.png';

const Header = () => {
    return (
        <>
        <div className = 'header'>
            <img src={download} alt='logo' width='70' height='50'/>
            <h1>Alpit Keep </h1>
        </div>
        </>
    )
}

export default Header;