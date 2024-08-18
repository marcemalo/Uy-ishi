import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Hero.css"
import Twitter from "../../img/Group 290.png"
import Linkedin from "../../img/Group 292.png"
import Medium from "../../img/Group 295.png"
import Herobig from "../../img/Group 296.png"

const Hero = () => {

    const [t] = useTranslation();
    
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                   <h1 className='hero__h1'>{t("post")}</h1>
                   <h2 className='hero__h2'>{t("think")}</h2>
                   <p className='hero__p'>{t("bigg")}</p>
                   <div className="hero__button">
                    <img src={Twitter} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Medium} alt="" />
                   </div>
                </div>

                <div>
                    <img src={Herobig} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero