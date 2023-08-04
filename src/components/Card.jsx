import React from 'react'


function Card(props){
    return(
        <div className='card'>
            {props.openSpots == 0 && <div className='card--badge'>SOLD OUT</div>}
            <img src={`../public/images/${props.img}`} className='card--image'/>
            <div className='card--stats'>
                <img src='../public/images/star.png' className='star'/>
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card