import React from 'react'
import { useTranslation } from 'react-i18next';
import Card__img from "../../img/Group 190.png"
import Card__imgs from "../../img/Group 190 (1).png"
import {   NavLink} from 'react-router-dom';
import "./Card.css"

const Card = () => {
    const [t] = useTranslation();
  return (
    <div className="card__main">
        <div className="container">
            <div className="card__wrapper">
                <div className="card">
                    <div className="card__img">
                         <NavLink to="/single"><img src={Card__img} alt="" /></NavLink>
                    </div>
                    <div className="card__content">
                        <h2>{t("boig")}</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img">
                         <NavLink to="/single"><img src={Card__imgs} alt="" /></NavLink>
                    </div>
                    <div className="card__content">
                        <h2>{t("boig")}</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img">
                         <NavLink to="/single"><img src={Card__img} alt="" /></NavLink>
                    </div>
                    <div className="card__content">
                        <h2>{t("boig")}</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card__img">
                         <NavLink to="/single"><img src={Card__imgs} alt="" /></NavLink>
                    </div>
                    <div className="card__content">
                        <h2>{t("boig")}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card