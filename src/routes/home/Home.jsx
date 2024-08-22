import React from 'react'
import Hero from "../../components/hero/Hero"


import Product from '../product/Product'
import NouName from '../../components/nouname/NouName'
import Productt from '../producttwo/Productt'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Product/>
    <NouName/>
    <Productt/>
    <Footer/>
    </>
  )
}

export default Home