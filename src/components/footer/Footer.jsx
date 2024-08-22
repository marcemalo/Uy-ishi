import React from 'react';
import './Footer.css'; // Ensure to create this CSS file

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__section'>
                    <h2 className='footer__title'>Quick Links</h2>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href='#' className='footer__link'>Home</a>
                        </li>
                        <li className='footer__item'>
                            <a href='#' className='footer__link'>About Us</a>
                        </li>
                        <li className='footer__item'>
                            <a href='#' className='footer__link'>Services</a>
                        </li>
                        <li className='footer__item'>
                            <a href='#' className='footer__link'>Contact</a>
                        </li>
                        <li className='footer__item'>
                            <a href='#' className='footer__link'>Blog</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__section'>
                    <h2 className='footer__title'>Contact Us</h2>
                    <p className='footer__info'>
                        <strong>&copy; 2024 Your Company Name</strong><br />
                        1234 Street Address, City, Country<br />
                        Email: contact@yourcompany.com<br />
                        Phone: (123) 456-7890
                    </p>
                </div>
                <div className='footer__section'>
                    <h2 className='footer__title'>Follow Us</h2>
                    <div className='footer__social'>
                        <a href='#' className='footer__social-link'>Facebook</a>
                        <a href='#' className='footer__social-link'>Twitter</a>
                        <a href='#' className='footer__social-link'>Instagram</a>
                        <a href='#' className='footer__social-link'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;



