import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "../../appi/axio"
import "./Hero.css"



const Hero = () => {
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
            {
              products.map(product =>
                <div className='card'>
                  <img className='card__img' src={product.image} alt={product.name} />
                </div>

              ).slice(0, 5)
            }
          </div>
        </div>
      </div>

    </>



  )
}

export default Hero
