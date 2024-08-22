import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "../../appi/axio"
import "./Hero.css"
import { useTranslation } from 'react-i18next';



const Hero = () => {
  const [t] = useTranslation();
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios('/products')
      .then(response => setProducts(response.data))

  }, [])

  return (
    <>


      <div className='hero'>
        <div className="container">
          <div className="hero__wrapper">
            <div className='hero__card'>
                    <h1 className='ss'>{t("super")}</h1>
                    <h3 className='ss'>{t("six")}</h3>
                    <button className='s'>{t("shop")}</button>
            </div>
            {
              products.map(product =>
                <div className='card'>
                  <img className='card__imgg' src={product.image} alt={product.name} />
                </div>

              ).slice(1, 4)
            }
          </div>
        </div>
      </div>

    </>



  )
}

export default Hero
