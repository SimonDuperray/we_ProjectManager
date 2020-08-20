import React from 'react';

const Header = ({ pseudo }) => {
    return (
        <header>
            <h1>{pseudo}'s Project Manager</h1>
            <a id="fireLink" target="_blank" href="https://console.firebase.google.com/project/projectmanager-67f9c/database/projectmanager-67f9c/data">RealTime DataBase - Firebase</a>
        </header>
    )
}

export default Header;