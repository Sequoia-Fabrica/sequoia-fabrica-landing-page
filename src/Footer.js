// Footer.js
import './Footer.css';
import React from 'react';

const copyright="©2023 Sequoia Fabrica. All rights reserved."

const Footer = () => {
    const getContactItem = () => {

    }

    const getLocationItem = () => {

    }

    const getDonationItem = () => {

    }

    const footerItems = []
    return (
        <footer className='footer'>
        <ul>
        {footerItems.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <div>
        <p>{copyright}</p>
        </div>
        </footer>
    );
};



export default Footer;
