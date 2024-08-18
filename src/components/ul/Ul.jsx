import React from 'react'
import "./ul.css"
import { useTranslation } from 'react-i18next';

const Ul = () => {

    const [t] = useTranslation();

    return (
        <div className="ul">
            <div className="container">
                <div className="ul__wrapper">
                    <div className='ulis'>
                        <ul className='ul__lis'>
                            <li className='ull'>{t("all")}</li>
                            <li className='ull'>{t("ul")}</li>
                            <li className='ull'>{t("ux")}</li>
                            <li className='ull'>{t("product")}</li>
                            <li className='ull'>{t("articl")}</li>
                            <li className='ull'>{t("tutor")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ul