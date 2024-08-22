import React from 'react';
import './Footer.css'; 
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation();
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div>
                        <h2>{t("Buy")}</h2>
                        <ul className='footer__lisr'>
                            <li>{t("eby")}</li>
                            <li>{t("help")}</li>
                            <li>{t("Stores")}</li>
                            <li>{t("char")}</li>
                            <li>{t("chsh")}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>{t("Buy")}</h2>
                        <ul className='footer__lisr'>
                            <li >{t("eby")}</li>
                            <li>{t("help")}</li>
                            <li>{t("Stores")}</li>
                            <li>{t("char")}</li>
                            <li>{t("chsh")}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>{t("Buy")}</h2>
                        <ul className='footer__lisr'>
                            <li>{t("eby")}</li>
                            <li>{t("help")}</li>
                            <li>{t("Stores")}</li>
                            <li>{t("char")}</li>
                            <li>{t("chsh")}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>{t("Buy")}</h2>
                        <ul className='footer__lisr'>
                            <li>{t("eby")}</li>
                            <li>{t("help")}</li>
                            <li>{t("Stores")}</li>
                            <li>{t("char")}</li>
                            <li>{t("chsh")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;



