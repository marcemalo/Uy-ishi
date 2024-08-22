import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Nav.css"
import { NavLink } from 'react-router-dom';
import Logo from "../../img/logo.svg"



const Nav = () => {
    const [t, i18n] = useTranslation();


    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    
                    <div>
                        <select class="selector" defaultValue={i18n.language} onChange={handleChangeLanguage}>
                            <option class="option" value="uz">O'zbekcha</option>
                            <option class="option" value="ru">Русский</option>
                            <option class="option" value="en">English</option>
                        </select>
                    </div>
                    <div>
                        <input className='nav__inputt' type="text" placeholder={t("any")}/>
                        <button className='nav__button'>{t("Search")}</button>
                    </div>
                    <div>
                       <NavLink to={"./login"}>Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav