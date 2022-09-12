import React from 'react'
import Navlogo from '/src/assets/airbnb-logo.png'

function Navbar() {
    return(
        <nav>
            <img src={ Navlogo } className='nav--logo'/>
        </nav>
    )
}

export default Navbar