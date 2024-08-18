import React from 'react'
import bigiii from "../../img/Group 190 (2).png"
import { useTranslation } from 'react-i18next';
import "./Single.css"
import { NavLink } from 'react-router-dom';

const Single = () => {
  const [t] = useTranslation();
  return (
    <div className="single">
      <div className="container">
        <div className="single__wrapper">
          <div className="single__img">
            <img src={bigiii} alt="" />
          </div>
          <div className="single__content">
            <h1 className='dhhs'>BLOG DETAILS H1</h1>
            <h3 className='joki'>{t("kol")}</h3>
          </div>
          <div className="single__content">
            <h1 className='dhhs'>BLOG DETAILS H2</h1>
            <h3 className='joki'>{t("kol")}</h3>
          </div>
          <div className="single__content">
            <h1 className='dhhs'>BLOG DETAILS H3</h1>
            <h3 className='joki'>{t("kol")}</h3>
          </div>
          <NavLink to="/">
            <button className="single-button">Go Home</button>
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Single