import React from 'react'
import divv  from "../../img/div.svg"
import divvv  from "../../img/div (1).svg"
import divvvv  from "../../img/div (2).png"
import one  from "../../img/1.png"
import "./name.css"

const NouName = () => {
  return (
    <div className="name">
        <div className="container">
            <div className="name__wrapper">
                <div className="div">
                    <img className='go' src={divv} alt="" />
                    <h1 className='go'>Deals made easy all year long.</h1>
                    <p className='go'>Free shipping. Best prices.</p>
                    <img className='go' src={divvv} alt="" />
                </div>
                <div>
                        <img src={divvvv} alt="" />
                </div>
                <div>
                    <img src={one} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NouName