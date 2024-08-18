import React from 'react'
import { useTranslation } from 'react-i18next';
import Logo from '../../img/Logo (1).svg'
import "./Nav.css"

const Nav = () => {
    const [t, i18n] = useTranslation();


    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <div className="nav__img">
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <ul className='ul__list'>
                            <li className='nav__hovers'>{t("profile")}</li>
                            <li className='nav__hovers'>CV</li>
                            <li className='nav__hovers'>{t("blog")}</li>
                            <li className='nav__hovers'>{t("store")}</li>
                            <li className='nav__hovers'>{t("freelance")}</li>
                            <li className='nav__hovers'>{t("about")}</li>
                            <li className='nav__hovers'>{t("contact")}</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <select className='custom-selector' defaultValue={i18n.language} onChange={handleChangeLanguage}>
                                <option className='custom-option' value="uz">O'zbekcha</option>
                                <option className='custom-option' value="ru">Русский</option>
                                <option className='custom-option' value="en">English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav