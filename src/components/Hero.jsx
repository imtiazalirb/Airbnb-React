import React from 'react'
import Heroimage from "/public/images/hero.png"

function Hero() {
    return(
        <div className='hero--section'>
             <img src={ Heroimage } alt="" className='hero--image' />
             <h1 className='hero--header'>Online Experiences</h1>
             <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero